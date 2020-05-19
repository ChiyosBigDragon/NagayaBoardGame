import React from "react";
import { Robot, RobotProps } from "./Robot";
import "../index.css";

export interface SquareProps {
	wall: boolean[];
	robotVisible: boolean;
	robotSelect: boolean;
	robotProps: RobotProps;
	goalVisible: boolean;
	goalProps: RobotProps;
}

export function Square(props: SquareProps) {
	const wall = props.wall;
	let mask = 0;
	for(let i = 0; i < wall.length; ++i) {
		mask |= Number(wall[i]) << i;
	}
	const wallClass = `square-wall square-wall-${mask}`;
	return (
		<div className="square">
			<div className="square-background"></div>
			{props.goalVisible && <div className="square-goal" style={{background: props.goalProps.color}}></div>}
			{props.robotSelect && <div className="square-select"></div>}
			<div className={wallClass}>
				{props.goalVisible && <div className="square-robot-goal"><Robot id={props.goalProps.id} color="#fff" /></div>}
				{props.robotVisible && <div className="square-robot"><Robot {...props.robotProps} /></div>}
			</div>
		</div>
	);
}
