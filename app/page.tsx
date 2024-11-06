'use client'
import { Editor } from "@monaco-editor/react";
import { Key, useEffect, useState } from "react";
import init, { GameState } from "@/public/wasm/wasm";
import { jsPython } from "jspython-interpreter";
import { toast } from "sonner";

const starterCode = `# Write your python code here
# im not sure I have enough time for a tutorial but heres the documentation
# get_board() -> returns the current board
# move_forward() -> moves the player
# turn("left" or "right") -> turns the player
# get_neighbour('north') -> Returns either 'wall', 'coin' or 'space'`;

export default function Home() {
	const [board, setBoard] = useState<GameState>();
	const [code, setCode] = useState<string>(starterCode);
	const [isRunning, setIsRunning] = useState(false);
	const [rerender, setRerender] = useState(0);
	const [dialoge, setDialoge] = useState<string>('Take your time to learn the basics of the api; your goal is to collect all the coins in each level');
	const [level, setLevel] = useState(0);

	useEffect(() => {
		const initilize = async () => {
			await init();
			setBoard(GameState.new(9))
		}
		initilize();
	}, []);

	const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

	const handleRunCode = () => {
		if (isRunning) return;
		setIsRunning(true);

		jsPython()
			.addFunction('get_board', () => board?.get_board())
			.addFunction('move_forward', async () => {
				board?.move_forward();
				setRerender(prev => prev + 1);
				await sleep(500)
			})
			.addFunction('turn', async (direction: unknown) => {
				board?.turn(direction as string);
				setRerender(prev => prev + 1);
				await sleep(500)
			})
			.addFunction('get_neighbour', (direction: unknown) => board?.get_neighbour(direction as string))
			.addFunction('get_neighbours', () => board?.get_neighbouring_cells())
			.evaluate(code)
			.then(() => {
				const coinCount = board?.get_coin_count();
				if (coinCount === 0) {
					toast.success('You have won the game');
					handleLoadLevel(level + 1);
					setLevel(level + 1);
				}
			})
			.catch(error => {
				console.error("Error => ", error);
				toast.error('An error occurred while running the code');
			})
			.finally(() => {
				setIsRunning(false);
			});
	};

	const handleLoadLevel = (level: number) => {
		const dialoge = board?.load_level(level);
		setDialoge(dialoge || '');
		setRerender(rerender + 1);
	}

	const calculateCellSize = (boardData: string[][]) => {
		const BOARD_SIZE = 320;
		const maxDimension = Math.max(boardData.length, boardData[0].length);
		return BOARD_SIZE / maxDimension;
	};

	return (
		<div className="flex h-screen bg-slate-300">
			<div className="flex flex-col flex-grow">
				<div className="flex flex-row gap-2 p-2">
					<button
						className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled:bg-gray-400"
						onClick={handleRunCode}
						disabled={isRunning}
					>
						{isRunning ? 'Running...' : 'Run Code'}
					</button>
					<button
						className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
						onClick={() => handleLoadLevel(2)}
					>
						Help?
					</button>
				</div>
				<Editor
					defaultLanguage="python"
					value={code}
					onChange={(value) => setCode(value || '')}
				/>
			</div>
			<div className="flex flex-col w-1/2 bg-slate-300 p-2">
				<div className="flex-grow flex items-center justify-center text-black">
					<div className="w-80 h-80 flex flex-col justify-center items-center bg-white rounded-lg shadow-lg">
						{board && (
							<div className="flex flex-col">
								{board.get_board().map((row, rowIndex) => (
									<div key={rowIndex} className="flex">
										{row.map((cell: string, colIndex: Key) => {
											const cellSize = calculateCellSize(board.get_board());
											return (
												<div
													key={colIndex}
													style={{
														width: `${cellSize}px`,
														height: `${cellSize}px`
													}}
													className={`border transition-colors
                          ${cell === 'X' ? 'bg-blue-500' : cell === '#' ? 'bg-green-500' : cell == 'C' ? 'bg-yellow-500' : 'bg-white'}`}
												/>
											);
										})}
									</div>
								))}
							</div>
						)}
					</div>
				</div>
				<div className="w-full h-32 bg-white rounded-lg shadow-lg p-4 mt-4">
					<div className="text-black">{dialoge}</div>
				</div>
			</div>
		</div>
	);
}
