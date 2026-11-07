<script lang="ts">
	import Toaster from './../lib/components/Toaster.svelte';
	import 'bootstrap/dist/css/bootstrap.min.css';
	import 'bootstrap-icons/font/bootstrap-icons.min.css';
	import { toast } from '../lib/scripts/storeToasts.svelte';

	let i = $state(1);
</script>

<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<button
	class="btn btn-sm rounded-3"
	onclick={() => {
		toast({
			title: `${i}. Привет`,
			content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. '
		});
		i++;
	}}>Сообщение</button
>

<Toaster />
