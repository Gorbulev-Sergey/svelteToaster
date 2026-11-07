export interface IToast {
	title?: string;
	content?: string;
	timeout?: number;
	bg?: typeof Colors;
	fg?: typeof Colors;
	opacity?: '10' | '20' | '30' | '40' | '50' | '60' | '70' | '80' | '90';
	shadow?: 'shadow-none' | 'shadow-sm' | 'shadow' | 'shadow-lg';
	_class?: string;
	id?: string;
}

export let Colors:
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
