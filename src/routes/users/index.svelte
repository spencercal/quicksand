<script>
	import { getUsers } from '../../services/users.js';

	async function allUsers() {
		try {
			userList = await getUsers();
			return userList;
		} catch {
			throw new Error('Failed to get users');
		}
	}
	let userList = allUsers();
</script>

{#await userList}
	<p>Loading...</p>
{:then users}
	{#each users as user}
		<div class="p-4 border flex justify-between">
			<div>
				<p>{user.name}</p>
				<p>{user.roles?.name}</p>
			</div>
			<button class="btn btn-primary btn-sm">Edit</button>
		</div>
	{/each}
{/await}
