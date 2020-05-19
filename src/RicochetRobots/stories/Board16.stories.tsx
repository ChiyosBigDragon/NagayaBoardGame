import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, color, boolean, number } from "@storybook/addon-knobs";
import { Board } from "../component/Board";

storiesOf("RicochetRobots/Board", module).addDecorator(withKnobs)
	.add("16*16", () => {
		const json16 = Array(16).fill(null).map(() => (Array(16).fill(null).map(() => ({
			wall: [false, false, false, false],
			robotVisible: false,
			robotSelect: false,
			robotProps: {id: 1, color: "red"},
			goalVisible: false,
			goalProps: {id: 0, color: "red"}
		}))));
		json16[0][0] = {
			wall: [false, false, true, true],
			robotVisible: true,
			robotSelect: false,
			robotProps: {id: 1, color: "#ff1744"},
			goalVisible: false,
			goalProps: {id: 0, color: "red"}
		};
		json16[6][6] = {
			wall: [true, true, false, false],
			robotVisible: false,
			robotSelect: false,
			robotProps: {id: 1, color: "#ff1744"},
			goalVisible: true,
			goalProps: {id: 1, color: "#ff1744"}
		};
		json16[0][15] = {
			wall: [true, false, false, true],
			robotVisible: true,
			robotSelect: false,
			robotProps: {id: 2, color: "#2ecc71"},
			goalVisible: false,
			goalProps: {id: 0, color: "red"}
		};
		json16[6][9] = {
			wall: [false, true, true, false],
			robotVisible: false,
			robotSelect: false,
			robotProps: {id: 1, color: "#ff1744"},
			goalVisible: true,
			goalProps: {id: 2, color: "#2ecc71"}
		};
		json16[15][0] = {
			wall: [false, true, true, false],
			robotVisible: true,
			robotSelect: false,
			robotProps: {id: 3, color: "#3498db"},
			goalVisible: false,
			goalProps: {id: 0, color: "red"}
		};
		json16[9][6] = {
			wall: [true, false, false, true],
			robotVisible: false,
			robotSelect: false,
			robotProps: {id: 3, color: "#3498db"},
			goalVisible: true,
			goalProps: {id: 3, color: "#3498db"}
		};
		json16[15][15] = {
			wall: [true, true, false, false],
			robotVisible: true,
			robotSelect: false,
			robotProps: {id: 4, color: "#ffb900"},
			goalVisible: false,
			goalProps: {id: 0, color: "red"}
		};
		json16[9][9] = {
			wall: [false, false, true, true],
			robotVisible: false,
			robotSelect: false,
			robotProps: {id: 4, color: "#ffb900"},
			goalVisible: true,
			goalProps: {id: 4, color: "#ffb900"}
		};
		const props = {
			sizeX: number("X", 16, {min: 1, step: 1}),
			sizeY: number("Y", 16, {min: 1, step: 1}),
			squareProps: json16
		};
		return (
			<Board {...props} />
		);
	})

