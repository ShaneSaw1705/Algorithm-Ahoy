'use client'
import { Editor } from "@monaco-editor/react";
import { useEffect, useState } from "react";
import init, { new_game, GameState } from "@/public/wasm/wasm";

export default function Home() {

	const [board, setBoard] = useState<GameState>();

	useEffect(() => {
		const initilize = async () => {
			await init();
			setBoard(new_game(4));
		}
		initilize();
	}, []);

	return (
		<div className="grid grid-cols-2 bg-slate-300">
			<div className="flex flex-col">
				<div className="flex flex-row gap-2">
					<button className="bg-green-500 text-white px-4 py-2" onClick={() => console.log(board?.get_board())}>Run Code</button>
				</div>
				<Editor
					height="100vh"
					defaultLanguage="python"
					defaultValue="// code"
				/>
			</div>
			<div className="grid grid-rows-2">
				<h1 className="bg-white text-black">Game Window</h1>
				<div className="bg-slate-300 text-black p-2">{board?.get_board()}</div>
			</div>
		</div>
	);
}
