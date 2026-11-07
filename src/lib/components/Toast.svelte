<script lang="ts">
	import { fade } from 'svelte/transition';
	import { type IToast } from '../models/IToast';

	interface IProps {
		toast: IToast;
		onClose(id?: string): void;
	}
	let { toast, onClose }: IProps = $props();
</script>

<div class="bg-1 rounded-3" style="min-width: 25em; max-width: 40vw;" transition:fade>
	<div
		class=" d-flex flex-column gap-1 p-3 pb-4 rounded-3
		{toast.bg ? `bg-${toast.bg}` : ''} 
		{toast.fg ? `fg-${toast.fg}` : ''} 
		{toast.opacity ? `bg-${toast.opacity}` : ''}
		{toast.shadow}
		{toast._class}"
	>
		<section class="d-flex align-items-center gap-2">
			<div class="flex-grow-1 d-flex align-items-center ps-1 gap-2">
				<b class="text-uppercase">{@html toast.title}</b>
			</div>
			<button
				class="btn-icon btn-sm theme-subtle"
				title="Закрыть"
				onclick={() => onClose(toast.id)}
			>
				<i class="bi bi-x-lg"></i>
			</button>
		</section>
		<div class="px-1">
			{@html toast.content}
		</div>
	</div>
</div>
