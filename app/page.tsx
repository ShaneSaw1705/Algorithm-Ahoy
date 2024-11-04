'use client'
import { Editor } from "@monaco-editor/react";
import { Key, useEffect, useState } from "react";
import init, { GameState } from "@/public/wasm/wasm";

export default function Home() {
	const [board, setBoard] = useState<GameState>();

	useEffect(() => {
		const initilize = async () => {
			await init();
			setBoard(GameState.new(20))
		}
		initilize();
	}, []);

	return (
		<div className="flex h-screen bg-slate-300">
			<div className="flex flex-col flex-grow">
				<div className="flex flex-row gap-2 p-2">
					<button className="bg-green-500 text-white px-4 py-2" onClick={() => console.log(board?.get_board())}>Run Code</button>
					<button className="bg-blue-500 text-white px-4 py-2">Help?</button>
				</div>
				<Editor
					className="flex-grow"
					defaultLanguage="python"
					defaultValue="# code"
				/>
			</div>
			<div className="bg-slate-300 flex items-center justify-center text-black p-2">
				<div className="w-full h-full flex flex-col justify-center items-center">
					{board && board.get_board().map((row, rowIndex) => (
						<div key={rowIndex} className="flex">
							{row.map((cell: string, colIndex: Key) => (
								<div
									key={colIndex}
									className={`w-8 h-8 border ${cell === 'X' ? 'bg-blue-500' : 'bg-white'}`}
								>
								</div>
							))}
						</div>
					))}
					<div className="w-full h-full text-black">console</div>
				</div>
			</div>
		</div>
	);
}
