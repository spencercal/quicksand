import supabase from './db.js';

export async function getDrivers() {
	async function getDrivers() {
		let { data: drivers, error } = await supabase
			.from('drivers')
			.select(
				`id, created_at, name, phone, dl_num, dl_expiration, base_rate, verizon_connect_id, contractor, current_load, carrier(name)`
			);
		if (error) throw new Error(error.message);
		return drivers;
	}

	let drivers = await getDrivers();
	return drivers;
}

export async function addDriver(driver) {
	console.log(driver);
	const { data, error } = await supabase.from('drivers').insert([
		{
			name: driver.name,
			phone: driver.phone,
			dl_number: driver.dl_number,
			dl_expiration: driver.dl_expiration,
			base_rate: driver.base_rate,
			verizon_connect_id: driver.verizon_connect_id,
			contractor: driver.contractor,
			carrier: driver.carrier
		}
	]);
	if (error) {
		throw new Error(error.message);
	}
	return { status: 200, message: 'New driver created' };
}
