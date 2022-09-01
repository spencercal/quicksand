<script>
	import { fly, fade } from 'svelte/transition';

	export let title = "Modal Title - Pass in 'title' prop to change";
	export let image = '';
	export let subtext =
		"Add 'subtext' prop to customize - showSubtext={false} will remove this section.";
	export let showTitle = true;
	export let showSubtext = true;
	export let showImage = false;
	export let showModal = false;
</script>

<div transition:fade class="modal {showModal && 'modal-open'} modal-bottom sm:modal-middle">
	<div
		transition:fly={{ y: 100, duration: 300 }}
		class="modal-box flex flex-col text-center px-8 pt-6 pb-6 bg-gray-100"
	>
		{#if showImage}
			<div class="flex items-center justify-center pb-3">
				<img src={image} class="max-h-[60px] max-w-[180px] " alt="modal logo or icon" />
			</div>
		{/if}
		{#if showTitle}
			<p class="text-xl mb-2 font-medium leading-6 text-gray-900">
				{title}
			</p>
		{/if}
		{#if showSubtext}
			<div class="mt-2">
				<p class="text-sm text-gray-500">
					{subtext}
				</p>
			</div>
		{/if}
		<slot name="content" />
		<div class="mt-3">
			<div class="flex">
				<div class="w-1/2 mr-3">
					<slot name="btn-left" />
				</div>
				<div class="w-1/2 ml-3">
					<slot name="btn-right" />
				</div>
			</div>
			<div class="w-full">
				<slot name="btn-center" />
			</div>
		</div>
	</div>
</div>
