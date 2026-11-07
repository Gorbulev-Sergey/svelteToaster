<script lang="ts">
	import { STORE, deleteToast } from '../scripts/storeToasts.svelte';
	import Toast from './Toast.svelte';

	interface IProps {
		position?: 'topLeft' | 'topCenter' | 'topRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight';
	}

	let positionStyle = $derived.by(() => {
		switch (position) {
			case 'topLeft':
				return 'top:0; left:0; align-items:flex-start;';
			case 'topCenter':
				return 'top:0; left:50%; transform:translateX(-50%); align-items:center;';
			case 'topRight':
				return 'top:0; right:0; align-items:flex-end;';
			case 'bottomLeft':
				return 'bottom:0; left:0; align-items:flex-start;';
			case 'bottomCenter':
				return 'bottom:0; left:50%; transform: translateX(-50%); align-items:center;';
			case 'bottomRight':
				return 'bottom:0; right:0; align-items:flex-end;';
		}
	});

	let { position = 'bottomCenter' }: IProps = $props();
</script>

<div
	class="position-absolute d-flex flex-column-reverse gap-3 p-5"
	style="z-index: 10000; {positionStyle}"
>
	{#each [...STORE.toasts].reverse() as toast}
		<Toast {toast} onClose={() => deleteToast(toast.id)} />
	{/each}
</div>
