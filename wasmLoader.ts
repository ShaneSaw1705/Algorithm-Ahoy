// eslint-disable-next-line @typescript-eslint/no-explicit-any
let wasmInstance: any = null;

export async function loadWasm() {
	if (!wasmInstance) {
		const init = (await import('@/public/wasm/wasm')).default;
		wasmInstance = await init();
	}
	return wasmInstance;
}
