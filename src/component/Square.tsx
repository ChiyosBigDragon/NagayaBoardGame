import React from 'react';
import '../index.css';

type SquareType = string | null;
interface SquareProps {
	value: SquareType;
	onClick: () => void;
}

export function Square(props: SquareProps) {
	return (
		<button className="square" onClick={props.onClick}>
			{props.value}
		</button>
	);
}
