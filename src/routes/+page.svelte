<script lang="ts">
	import { afterUpdate, onMount } from 'svelte';

	let apiEndpoint = 'https://vhi44p15j3.execute-api.ap-northeast-2.amazonaws.com/test/momp-od';
	let buttonText = 'Capture and Send Image';
	let data: any = null;

	let cameraView: HTMLVideoElement | null = null;
	let overlay: HTMLCanvasElement;

	let cameras: any[] = [];
	let selectedCameraId: string | undefined;

	let isLandscape = false;

	onMount(() => {
		loadCameras();

		mainInit();

		checkOrientation();
		window.addEventListener('orientationchange', checkOrientation);
	});

	afterUpdate(drawBoundingBoxes);

	function camInit(stream: MediaStream): void {
		cameraView = document.getElementById('cameraview') as HTMLVideoElement;
		cameraView.srcObject = stream;
		cameraView.onloadedmetadata = function () {
			cameraView!.play();
		};
	}

	function camInitFailed(error: any): void {
		console.error('get camera permission failed : ', error);
		alert('get camera permission failed');
	}

	async function mainInit(): Promise<void> {
		if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
			alert('Media Device not supported');
			return;
		}

		try {
			const stream = await navigator.mediaDevices.getUserMedia({
				video: {
					width: 1280,
					height: 720,
					facingMode: 'environment'
				}
			});
			camInit(stream);
		} catch (error) {
			camInitFailed(error);
		}
	}

	let color_list = ['#8622ff', '#fe0056', '#00ffce', '#ffff00', '#ff00ff', '#bc3989', '#b25050'];

	function drawBoundingBoxes() {
		if (!data || !overlay) {
			console.log('pass');
			return;
		}

		const context = overlay.getContext('2d');
		if (context == null) {
			return;
		}

		context.clearRect(0, 0, overlay.width, overlay.height);
		context.lineWidth = 10;

		data.boxes.forEach(([x1, y1, x2, y2, conf, cla]) => {
			context.strokeStyle = color_list[cla];

			console.log(x1, y1, x2 - x1, y2 - y1);
			context.strokeRect(x1, y1, x2 - x1, y2 - y1);
		});
	}

	async function loadCameras() {
		const devices = await navigator.mediaDevices.enumerateDevices();

		cameras = devices.filter((device) => device.kind === 'videoinput');
	}

	async function startCamera() {
		if (!selectedCameraId) return;

		const constraints = {
			video: {
				width: 1280,
				height: 720,
				facingMode: 'environment',
				deviceId: { exact: selectedCameraId }
			}
		};

		try {
			const stream = await navigator.mediaDevices.getUserMedia(constraints);
			const videoElement = document.getElementById('cameraview') as HTMLVideoElement;
			videoElement.srcObject = stream;
		} catch (err) {
			console.error('Error accessing camera:', err);
		}
	}

	function checkOrientation() {
		isLandscape = window.matchMedia('(orientation: landscape)').matches;
	}

	async function captureAndSendImage(): Promise<void> {
		if (!cameraView) return;

		if (!cameraView.paused) {
			cameraView.pause();
		} else {
			cameraView.play();
			const context = overlay.getContext('2d');
			if (context == null) {
				return;
			}
			context.clearRect(0, 0, overlay.width, overlay.height);
			return;
		}

		const canvas = document.createElement('canvas');
		canvas.width = cameraView.videoWidth;
		canvas.height = cameraView.videoHeight;

		const ctx = canvas.getContext('2d');
		ctx!.drawImage(cameraView, 0, 0);

		const imageBase64 = canvas.toDataURL('image/jpeg');
		const base64Image = imageBase64.split(',')[1];

		const response = await fetch(apiEndpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ data: base64Image })
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		data = await response.json();
	}
</script>

{#if isLandscape}
	<div>
		<div style="position: relative; width: 640px; height: 480px;">
			<!-- svelte-ignore a11y-media-has-caption -->
			<video
				id="cameraview"
				width="1280"
				height="720"
				autoplay
				playsinline
				bind:this={cameraView}
				style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: contain;"
			/>

			<canvas
				id="overlay"
				width="1280"
				height="700"
				bind:this={overlay}
				style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: contain;"
			/>
		</div>

		<input bind:value={apiEndpoint} type="text" placeholder="Enter API Endpoint" />
		<button on:click={captureAndSendImage}>{buttonText}</button>
		<pre>{JSON.stringify(data, null, 2)}</pre>

		<select bind:value={selectedCameraId}>
			<option disabled={true} selected={true}> -- select a camera --</option>
			{#each cameras as camera (camera.deviceId)}
				<option value={camera.deviceId}>{camera.label}</option>
			{/each}
		</select>

		<button on:click={startCamera}>Start Camera</button>
	</div>
{:else}
	<div>가로 모드로 전환해 주세요</div>
{/if}
