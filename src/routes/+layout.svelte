<script>
	import { SvelteToast } from '@zerodevx/svelte-toast';
	import '../app.postcss';
</script>

<div class="container" style="height: 100vh; overflow: hidden;">
	<slot />
	<SvelteToast />
</div>
