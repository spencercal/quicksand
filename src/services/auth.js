import supabase from './db.js';
import { userSession } from '../stores/auth.js';

async function updateProfile(userId, name, role) {
	const { data, error } = await supabase
		.from('profiles')
		.update({ name: name, role: role })
		.eq('id', userId);
	console.log('update profile response: ', data, error);
}

export async function signUp(username, password, name, role) {
	const { user, session, error } = await supabase.auth.signUp({
		email: username,
		password: password
	});
	if (error) {
		throw new Error(error.message);
	}
	let updateUser = await updateProfile(user.id, name, role);
	console.log('User updated', updateUser);
	return { status: 200, message: 'New user created', user: user, session: session };
}

export async function logIn(username, password) {
	console.log('starting login');
	const { user, error } = await supabase.auth.signIn({
		email: username,
		password: password
	});
	userSession.set(user);
	return { status: 200, message: 'Successfully logged in', user: user };
}

export async function logOut() {
	const { error } = await supabase.auth.signOut();
	userSession.set(null);
}
