'use client'
import { Editor } from "@monaco-editor/react";

export default function Home() {
	return (
		<div className="grid grid-cols-2 bg-slate-300">
			<div className="flex flex-col">
				<div className="flex flex-row gap-2">
					<button className="bg-green-500 text-white px-4 py-2">Run Code</button>
				</div>
				<Editor
					height="100vh"
					defaultLanguage="javascript"
					defaultValue="// code"
				/>
			</div>
			<div className="grid grid-rows-2">
				<h1 className="bg-white text-black">Game Window</h1>
				<div className="bg-slate-300 text-black p-2">Console</div>
			</div>
		</div>
	);
}
