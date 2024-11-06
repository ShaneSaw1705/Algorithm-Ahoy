/* tslint:disable */
/* eslint-disable */
/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function add(a: number, b: number): number;
export class GameState {
  free(): void;
  /**
   * @param {number} size
   * @returns {GameState}
   */
  static new(size: number): GameState;
  /**
   * Returns the current coin count as its the easiest way I could think of "winning" the game
   * @returns {number}
   */
  get_coin_count(): number;
  /**
   * Function to load a level(board)
   * @param {number} level_num
   * @returns {string}
   */
  load_level(level_num: number): string;
  /**
   * @returns {Array<any>}
   */
  get_board(): Array<any>;
  /**
   * @returns {any}
   */
  get_player_pos(): any;
  /**
   * Move the player forward in the direction they are facing
   */
  move_forward(): void;
  /**
   * @param {string} direction
   */
  turn(direction: string): void;
  /**
   * @param {string} direction
   * @returns {any}
   */
  get_neighbour(direction: string): any;
  /**
   * @returns {Array<any>}
   */
  get_neighbouring_cells(): Array<any>;
}
export class Level {
  free(): void;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_gamestate_free: (a: number, b: number) => void;
  readonly __wbg_level_free: (a: number, b: number) => void;
  readonly gamestate_new: (a: number) => number;
  readonly gamestate_get_coin_count: (a: number) => number;
  readonly gamestate_load_level: (a: number, b: number) => Array;
  readonly gamestate_get_board: (a: number) => number;
  readonly gamestate_get_player_pos: (a: number) => number;
  readonly gamestate_move_forward: (a: number) => void;
  readonly gamestate_turn: (a: number, b: number, c: number) => void;
  readonly gamestate_get_neighbour: (a: number, b: number, c: number) => number;
  readonly gamestate_get_neighbouring_cells: (a: number) => number;
  readonly add: (a: number, b: number) => number;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_export_2: WebAssembly.Table;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
