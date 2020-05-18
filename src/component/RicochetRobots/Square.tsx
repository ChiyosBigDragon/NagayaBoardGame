import React from "react";
import {Robot, RobotProps} from "./Robot";

interface SquareProps {
	wall: boolean[];
	robotProps: RobotProps;
}

export default function Square(props: SquareProps) {
	const wall = props.wall
	let mask = 0;
	for(let i = 0; i < wall.length; ++i) {
		mask |= Number(wall[i]) << i;
	}
	const className = `square square-${mask}`;
	return (
		<div className={className}>
			<Robot {...props.robotProps} />
		</div>
	);
}