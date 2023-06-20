<script lang="ts">
	import { Button, Gallery, Heading, Timeline, TimelineItem } from 'flowbite-svelte';

	const images = [
		{ alt: 'erbology', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg' },
		{ alt: 'shoes', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg' },
		{ alt: 'small bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg' },
		{ alt: 'plants', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg' },
		{ alt: 'watch', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg' },
		{ alt: 'shoe', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg' },
		{ alt: 'cream', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg' },
		{ alt: 'small bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg' },
		{ alt: 'lamp', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg' },
		{ alt: 'toiletbag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg' },
		{
			alt: 'playstation',
			src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg'
		},
		{ alt: 'bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg' }
	];
</script>

<div class="container">
	<Heading tag="h1" class="mb-4" customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl">
		Hello</Heading
	>
	<br />

	<Heading tag="h2" class="mb-4" customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl">
		Timeline</Heading
	>
	<Timeline order="vertical">
		<TimelineItem title="Flowbite Application UI v2.0.0" date="Released on January 13th, 2022">
			<svelte:fragment slot="icon">
				<span
					class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900"
				>
					<svg
						aria-hidden="true"
						class="w-3 h-3 text-primary-600 dark:text-primary-400"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						><path
							fill-rule="evenodd"
							d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
							clip-rule="evenodd"
						/></svg
					>
				</span>
			</svelte:fragment>
			<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
				Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar,
				and pre-order E-commerce & Marketing pages.
			</p>
		</TimelineItem>
		<TimelineItem title="Flowbite Figma v1.3.0" date="Released on December 7th, 2021">
			<svelte:fragment slot="icon">
				<span
					class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900"
				>
					<svg
						aria-hidden="true"
						class="w-3 h-3 text-primary-600 dark:text-primary-400"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						><path
							fill-rule="evenodd"
							d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
							clip-rule="evenodd"
						/></svg
					>
				</span>
			</svelte:fragment>
			<p class="text-base font-normal text-gray-500 dark:text-gray-400">
				All of the pages and components are first designed in Figma and we keep a parity between the
				two versions even as we update the project.
			</p>
		</TimelineItem>
		<TimelineItem title="Flowbite Library v1.2.2" date="Released on December 2nd, 2021">
			<svelte:fragment slot="icon">
				<span
					class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900"
				>
					<svg
						aria-hidden="true"
						class="w-3 h-3 text-primary-600 dark:text-primary-400"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						><path
							fill-rule="evenodd"
							d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
							clip-rule="evenodd"
						/></svg
					>
				</span>
			</svelte:fragment>
			<p class="text-base font-normal text-gray-500 dark:text-gray-400">
				Get started with dozens of web components and interactive elements built on top of Tailwind
				CSS.
			</p>
		</TimelineItem>
	</Timeline>

	<br />

	<Heading tag="h2" class="mb-4" customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl">
		Gallery</Heading
	>
	<Gallery items={images} class="gap-4 grid-cols-2 md:grid-cols-3" />
	<a href="/login"> <Button color="green">Login</Button></a>
</div>

