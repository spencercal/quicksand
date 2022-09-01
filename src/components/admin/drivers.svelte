<script>
	import { getDrivers } from '../../services/drivers.js';
	import { formatPhone } from '../../helpers/formatText.js';
	import { addDriver } from '../../services/drivers.js';
	import Modal from '../../components/modal.svelte';
	let showDriverModal = false;
	let selectedDriver = {};
	let newDriver = {
		name: 'Keith Caldwell',
		phone: 4357895680,
		dl_number: 468785621,
		dl_expiration: null,
		base_rate: null,
		verizon_connect_id: 4684556622331,
		contractor: true,
		carrier: '0cf45ccf-7b67-4e05-b77c-d83f47ff5148'
	};

	async function allDrivers() {
		try {
			driverList = await getDrivers();
			return driverList;
		} catch {
			throw new Error('Failed to get drivers');
		}
	}
	let driverList = allDrivers();

	async function addNewDriver() {
		console.log('Trying to add new driver');
		try {
			driver = await addDriver(newDriver);
			return driver;
		} catch {
			throw new Error('Failed to add new driver');
		}
	}

	function selectDriver(driver) {
		selectedDriver = driver;
		showDriverModal = true;
		console.log(driver);
	}
</script>

{#if showDriverModal}
	<Modal showModal={showDriverModal} title="Verify Unit Number" subtext="">
		<div slot="content">
			<p class="text-gray-500 text-lg">Confirm you the current tenant of unit</p>
			<div class="border-2 border-gray-300 py-3 rounded-2xl bg-gray-200 mt-2">
				<h1 class="text-4xl font-semibold text-slate-600 uppercase">Hi there</h1>
			</div>
			<p class="mt-2 text-slate-400 text-sm">
				By continuing you are confirming that you are the tenant of NOVEL Daybreak Unit <span
					class="uppercase"
				/> and are authorized to make changes to broadband services.
			</p>
		</div>

		<span
			slot="btn-left"
			on:click|preventDefault={() => {
				showDriverModal = false;
			}}
			class="btn btn-error w-full mt-4 border-red-600">Delete Driver</span
		>
		<span
			slot="btn-right"
			on:click|preventDefault={() => {
				showDriverModal = false;
			}}
			class="btn btn-primary w-full mt-4 border border-emerald-500 ">Save</span
		>
	</Modal>
{/if}

<div class="w-full flex justify-end py-3 px-6">
	<div
		on:click|preventDefault={() => {
			addNewDriver();
		}}
		class="btn"
	>
		New Driver
	</div>
</div>

{#await driverList}
	<p>Loading...</p>
{:then drivers}
	<div class="overflow-x-auto">
		<!-- Mobile Table -->
		<table class="table w-full sm:hidden">
			<!-- head -->
			<thead>
				<tr>
					<th>Name</th>
					<th>Drivers Lic</th>
					<th>Contractor</th>
				</tr>
			</thead>
			<tbody>
				<!-- row 1 -->
				{#each drivers as driver}
					<tr class="text-xs">
						<td>
							<div class="flex flex-col">
								<span>{driver.name ? driver.name : ''}</span>
								<span class="text-slate-500 font-extralight">
									{driver.phone ? formatPhone(driver.phone) : ''}
								</span>
							</div>
						</td>
						<td>
							<div class="flex flex-col">
								<span>{driver.dl_num ? driver.dl_num : ''}</span>
								<span class="text-slate-500 font-extralight">
									{driver.dl_expiration ? driver.dl_expiration : ''}
								</span>
							</div>
						</td>
						<td>
							<div class="flex flex-col">
								<span>{driver.contractor ? 'Yes' : 'No'}</span>
								<span class="text-slate-500 font-extralight">
									{driver.carrier?.name ? driver.carrier.name : ''}
								</span>
							</div>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
		<!-- Desktop Table -->
		<table class="table hidden sm:table w-full bg-red-200">
			<!-- head -->
			<thead>
				<tr>
					<th>Name</th>
					<th>Phone #</th>
					<th>DL #</th>
					<th>DL Exp.</th>
					<th>Contractor</th>
					<th>Carrier</th>
				</tr>
			</thead>
			<tbody>
				<!-- row 1 -->
				{#each drivers as driver}
					<tr class="hover" on:click={selectDriver(driver)}>
						<td>{driver.name ? driver.name : ''}</td>
						<td>{driver.phone ? formatPhone(driver.phone) : ''}</td>
						<td>{driver.dl_num ? driver.dl_num : ''}</td>
						<td>{driver.dl_expiration ? driver.dl_expiration : ''}</td>
						<td>{driver.contractor ? 'Yes' : 'No'}</td>
						<td>{driver.carrier?.name ? driver.carrier.name : ''}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{/await}
