<script>
	import { logIn, logOut, signUp } from '../../services/auth.js';
	let nameOfUser = '';
	let username = '';
	let password = '';
	let role = '';
</script>

<form class="flex flex-col p-4">
	<div class="p-2 flex flex-col">
		<label for="username">E-mail Address</label>
		<input name="username" bind:value={username} type="text" class="input input-bordered" />
	</div>
	<div class="p-2 flex flex-col">
		<label for="password">Password </label>
		<input name="password" bind:value={password} type="password" class="input input-bordered" />
	</div>
	<div class="p-2 flex flex-col">
		<label for="nameOfuser">Name </label>
		<input name="nameOfUser" bind:value={nameOfUser} type="text" class="input input-bordered" />
	</div>
	<div class="p-2 flex flex-col">
		<label for="role"> Role </label>
		<select name="role" bind:value={role} class="select select-bordered">
			<option disabled selected>Select User Role</option>
			<option value="1">Administrator</option>
			<option value="3">Supervisor</option>
			<option value="4">Dispatch</option>
			<option value="2">AP/AR (Billing)</option>
			<option value="5">External User</option>
		</select>
	</div>
	<button on:click|preventDefault={signUp(username, password, nameOfUser, role)} class="btn"
		>Create User</button
	>
</form>

<button on:click|preventDefault={console.log(logIn(username, password))} class="btn m-4"
	>Sign In</button
>
<button on:click|preventDefault={logOut} class="btn m-4">Log Out</button>
