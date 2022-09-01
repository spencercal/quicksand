import supabase from './db.js';

export async function getUsers() {
	let { data: profiles, error } = await supabase.from('profiles').select(`
    name, id, 
    roles (
      id, name
    )
  `);
	if (error) {
		throw new Error(error.message);
	}
	return profiles;
}
