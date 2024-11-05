'use client'
import { Editor } from "@monaco-editor/react";
import { Key, useEffect, useState } from "react";
import init, { GameState } from "@/public/wasm/wasm";
import { jsPython } from "jspython-interpreter";

export default function Home() {
	const [board, setBoard] = useState<GameState>();
	const [code, setCode] = useState<string>('# code');
	const [isRunning, setIsRunning] = useState(false);

	useEffect(() => {
		const initilize = async () => {
			await init();
			setBoard(GameState.new(20))
		}
		initilize();
	}, []);

	const handleRunCode = () => {
		if (isRunning) return;
		setIsRunning(true);
		jsPython()
			.addFunction('get_board', () => board?.get_board())
			.addFunction('move_forward', () => board?.move_forward())
			.addFunction('turn', (direction: unknown) => board?.turn(direction as string))
			.evaluate(code)
			.catch(error => {
				console.error("Error => ", error);
			})
			.finally(() => {
				setIsRunning(false);
			});
	};

	return (
		<div className="flex h-screen bg-slate-300">
			<div className="flex flex-col flex-grow">
				<div className="flex flex-row gap-2 p-2">
					<button className="bg-green-500 text-white px-4 py-2" onClick={handleRunCode}>Run Code</button>
					<button className="bg-blue-500 text-white px-4 py-2">Help?</button>
				</div>
				<Editor
					defaultLanguage="python"
					value={code}
					onChange={(value) => setCode(value || '')}
				/>
			</div>
			<div className="flex flex-col w-1/2 bg-slate-300 p-2">
				<div className="flex-grow flex items-center justify-center text-black">
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
					</div>
				</div>
				<div className="w-full h-full text-black">console</div>
			</div>
		</div>
	);
}
