<script>
	import { SvelteToast } from '@zerodevx/svelte-toast';
	import '../app.postcss';
</script>

<div class="container">
	<slot />
	<SvelteToast />
</div>
