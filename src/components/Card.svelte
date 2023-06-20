<script lang="ts">
	import { Button, Card } from 'flowbite-svelte';
</script>

<div class="container">
	<Card padding="xl">
		<h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Standard plan</h5>
		<div class="flex items-baseline text-gray-900 dark:text-white">
			<span class="text-3xl font-semibold">$</span>
			<span class="text-5xl font-extrabold tracking-tight">49</span>
			<span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
		</div>
		<!-- List -->
		<ul class="my-7 space-y-4">
			<li class="flex space-x-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6 text-blue-600 dark:text-blue-500"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/></svg
				>
				<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
					>2 team members</span
				>
			</li>
			<li class="flex space-x-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6 text-blue-600 dark:text-blue-500"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/></svg
				>
				<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
					>20GB Cloud storage</span
				>
			</li>
			<li class="flex space-x-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6 text-blue-600 dark:text-blue-500"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/></svg
				>
				<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
					>Integration help</span
				>
			</li>
			<li class="flex space-x-2 line-through decoration-gray-500">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6 text-blue-600 dark:text-blue-500"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/></svg
				>
				<span class="text-base font-normal leading-tight text-gray-500">Sketch Files</span>
			</li>
			<li class="flex space-x-2 line-through decoration-gray-500">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6 text-blue-600 dark:text-blue-500"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/></svg
				>
				<span class="text-base font-normal leading-tight text-gray-500">API Access</span>
			</li>
			<li class="flex space-x-2 line-through decoration-gray-500">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6 text-blue-600 dark:text-blue-500"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/></svg
				>
				<span class="text-base font-normal leading-tight text-gray-500">Complete documentation</span
				>
			</li>
			<li class="flex space-x-2 line-through decoration-gray-500">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6 text-blue-600 dark:text-blue-500"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/></svg
				>
				<span class="text-base font-normal leading-tight text-gray-500"
					>24×7 phone & email support</span
				>
			</li>
		</ul>
		<Button class="w-full">Choose plan</Button>
	</Card>
</div>
