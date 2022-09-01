export async function get() {
	const url = 'https://catfact.ninja/fact';
	const response = await fetch(url);
	const data = await response.json();
	console.log(data);

	return {
		body: {
			fact: data.fact
		}
	};
}
