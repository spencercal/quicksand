<script>
	import Modal from '../components/modal.svelte';
	export let showModal = true;
	export let unitId = 'N/A';
</script>

<Modal {showModal} title="Verify Unit Number" subtext="">
	<div slot="content">
		<p class="text-gray-500 text-lg">Confirm you the current tenant of unit</p>
		<div class="border-2 border-gray-300 py-3 rounded-2xl bg-gray-200 mt-2">
			<h1 class="text-4xl font-semibold text-slate-600 uppercase">{unitId}</h1>
		</div>
		<p class="mt-2 text-slate-400 text-sm">
			By continuing you are confirming that you are the tenant of NOVEL Daybreak Unit <span
				class="uppercase">{unitId}</span
			> and are authorized to make changes to broadband services.
		</p>
	</div>

	<span
		slot="btn-left"
		on:click|preventDefault={() => {
			showModal = false;
		}}
		class="btn btn-neutral btn-outline w-full mt-4 border-slate-400 rounded-full">Wrong Unit</span
	>
	<span
		slot="btn-right"
		on:click|preventDefault={() => {
			showModal = false;
		}}
		class="btn btn-success w-full mt-4 border border-emerald-500 rounded-full">Confirm</span
	>
</Modal>
