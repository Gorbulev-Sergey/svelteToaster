import type { Colors, IToast } from '../models/IToast.ts';

let INTERVAL = 4000;

let timers = new Map();
export let STORE = $state<{ toasts: IToast[] }>({ toasts: [] });

export function toast(toast: {
	title?: string;
	content?: string;
	timeout?: number;
	bg?:
		| 'body'
		| 'primary'
		| 'accent'
		| 'success'
		| 'danger'
		| 'warning'
		| 'info'
		| 'inverse'
		| 'secondary'
		| 'black'
		| 'white';
	fg?:
		| 'body'
		| 'primary'
		| 'accent'
		| 'success'
		| 'danger'
		| 'warning'
		| 'info'
		| 'inverse'
		| 'secondary'
		| 'black'
		| 'white';
	opacity?: '10' | '20' | '30' | '40' | '50' | '60' | '70' | '80' | '90';
	shadow?: 'shadow-none' | 'shadow-sm' | 'shadow' | 'shadow-lg';
	_class?: string;
	id?: string;
}) {
	toast.id ||= crypto.randomUUID();
	toast.timeout ||= INTERVAL;
	STORE.toasts.push(toast);

	if (toast.timeout) {
		timers.set(
			toast.id,
			setInterval(async () => deleteToast(toast?.id), toast.timeout)
		);
	}
}

export function deleteToast(id?: string) {
	const timer = timers.get(id);
	if (timer) {
		STORE.toasts = [...STORE.toasts.filter((t) => t.id !== id)];
		timers.delete(id);
		clearInterval(timer);
	}
}
