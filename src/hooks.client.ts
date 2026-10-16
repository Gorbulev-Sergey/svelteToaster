import type { HandleClientError } from '@sveltejs/kit/hooks';

// Оставь пустым
export const handleClientError: HandleClientError = async () => {};

// Подключаем Bootstrap JS только на клиенте
if (typeof window !== 'undefined') {
	import('bootstrap').catch(console.error);
}
