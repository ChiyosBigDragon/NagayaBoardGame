import React from "react";
import { Square, SquareProps } from "./Square";
import "../index.css";

export interface BoardProps {
	sizeX: number;
	sizeY: number;
	squareProps: SquareProps[][];
}

function createRow(W: number, squareProps: SquareProps[]) {
	const ret = Array(W);
	for(let x = 0; x < W; ++x) {
		ret[x] = <Square {...squareProps[x]} />
	}
	return ret;
}

export function Board(props: BoardProps) {
	const squareProps = props.squareProps;
	console.log(squareProps);
	const H = props.sizeY;
	const W = props.sizeX;
	const row = Array(H);
	for(let y = 0; y < H; ++y) {
		row[y] = <div className="board-row">{createRow(W, squareProps[y])}</div>;
	}
	return (
		<div className="board">
			{row}
		</div>
	);
}
