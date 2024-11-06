/* tslint:disable */
/* eslint-disable */
export const memory: WebAssembly.Memory;
export function __wbg_gamestate_free(a: number, b: number): void;
export function __wbg_level_free(a: number, b: number): void;
export function gamestate_new(a: number): number;
export function gamestate_get_coin_count(a: number): number;
export function gamestate_load_level(a: number, b: number): Array;
export function gamestate_get_board(a: number): number;
export function gamestate_get_player_pos(a: number): number;
export function gamestate_move_forward(a: number): void;
export function gamestate_turn(a: number, b: number, c: number): void;
export function gamestate_get_neighbour(a: number, b: number, c: number): number;
export function gamestate_get_neighbouring_cells(a: number): number;
export function add(a: number, b: number): number;
export function __wbindgen_malloc(a: number, b: number): number;
export function __wbindgen_realloc(a: number, b: number, c: number, d: number): number;
export const __wbindgen_export_2: WebAssembly.Table;
export function __wbindgen_free(a: number, b: number, c: number): void;
export function __wbindgen_start(): void;
