declare module 'wasm' {
	export class GameState {
		// eslint-disable-next-line @typescript-eslint/no-misused-new
		static new(size: number): GameState;
		get_board(): string[][];
		move_forward(): void;
		turn(direction: string): void;
		get_neighbour(direction: string): string;
		get_neighbouring_cells(): Record<string, string>;
		get_coin_count(): number;
		load_level(level: number): string;
	}

	export default function init(): Promise<void>;
}
