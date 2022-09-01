<script>
	import { userSession } from '../stores/auth.js';
	import { logOut } from '../services/auth.js';
	import '../app.css';
	import supabase from '../services/db.js';

	userSession.set(supabase.auth.user());
</script>

<!-- Header -->
<div class="bg-stone-700">
	<div class="bg-gray-100">
		<div class="flex justify-between p-4 px-8 bg-gray-100 container mx-auto">
			<div class="flex">
				<img src="/logo.png" alt="quicksand" width="50px" />
				<span class="font-extrabold text-stone-700 text-lg ml-3 my-auto">Quick Sand Inc.</span>
			</div>
			<div>
				{#if $userSession}
					<div>
						<span class="text-xs mr-2 text-gray-500">{$userSession.email}</span>
						<button on:click|preventDefault={logOut} class="btn btn-sm btn-warning text-xs"
							>Log out</button
						>
					</div>
				{:else}
					<button class="btn btn-sm btn-success text-xs">Log in</button>
				{/if}
			</div>
		</div>
	</div>
	<div>
		<div class="bg-white flex flex-col p-4 px-8 container mx-auto">
			<slot />
			<p>Hello World</p>
			{JSON.stringify($userSession)}
		</div>
	</div>
</div>
