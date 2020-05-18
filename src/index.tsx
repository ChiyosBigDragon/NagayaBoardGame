import React from 'react';
import ReactDOM from 'react-dom';
import Square from "./component/RicochetRobots/Square";
import './index.css';

interface BoardProps {
	size: number;
	wall: boolean[][][];
}

class Board extends React.Component<BoardProps> {
	renderSquare(wall: boolean[]) {
		return (<Square wall={wall} robotProps={{id: 1, color: "#ff1744"}} />);
	}
	render() {
		const wall = this.props.wall;
		const size = this.props.size;
		const squares = Array(size);
		for(let y = 0; y < size; ++y) {
			const row = Array(size);
			for(let x = 0; x < size; ++x) {
				row[x] = this.renderSquare(wall[y][x]);
			}
			squares[y] = <div className="board-row">{row}</div>
		}
		return (
			<div>
				{squares}
			</div>
		);
	}
}


interface RicochetRobotsState {
	// step: number;
	size: number;
	wall: boolean[][][];
	// robots: {x: number, y: number, select: boolean}[];
	// goal: boolean[][];
	// history: {squares: SquareType[]}[];
	// stepNumber: number;
	// xIsNext: boolean;
}

class RicochetRobots extends React.Component<any, RicochetRobotsState> {
	constructor(props: RicochetRobotsState) {
		super(props);
		this.state = {
			size: 16,
			wall: Array(16).fill(Array(16).fill(Array(4).fill(true)))
			// wall = [...Array(3)].map(() => Array(3).fill(0));
			// history: [{squares: Array<SquareType>(9).fill(null)}],
			// stepNumber: 0,
			// xIsNext: true
		};
	}
	render() {
		const wall = this.state.wall;
		const size = this.state.size;
		return (
			<div className="game">
				<div className="game-board">
					<Board size={size} wall={wall} />
				</div>
				{/* <div className="game-info">
					<div>{status}</div>
					<ol>{moves}</ol>
				</div> */}
			</div>
		);
	}
}
  
// ========================================

ReactDOM.render(
	<RicochetRobots />,
	document.getElementById('root')
);
