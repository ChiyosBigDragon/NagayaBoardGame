import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, number } from "@storybook/addon-knobs";
import { Board } from "../component/Board";

storiesOf("RicochetRobots/Board", module).addDecorator(withKnobs)
	.add("4*4", () => {
		const json4 = Array(4).fill(null).map(() => (Array(4).fill(null).map(() => ({
			wall: [false, false, false, false],
			robotVisible: false,
			robotSelect: false,
			robotProps: {id: 1, color: "red"},
			goalVisible: false,
			goalProps: {id: 0, color: "red"}
		}))));
		json4[0][0] = {
			wall: [false, false, true, true],
			robotVisible: true,
			robotSelect: false,
			robotProps: {id: 1, color: "#ff1744"},
			goalVisible: false,
			goalProps: {id: 0, color: "red"}
		};
		json4[1][1] = {
			wall: [true, true, false, false],
			robotVisible: false,
			robotSelect: false,
			robotProps: {id: 1, color: "#ff1744"},
			goalVisible: true,
			goalProps: {id: 1, color: "#ff1744"}
		};
		json4[0][3] = {
			wall: [true, false, false, true],
			robotVisible: true,
			robotSelect: false,
			robotProps: {id: 2, color: "#2ecc71"},
			goalVisible: false,
			goalProps: {id: 0, color: "red"}
		};
		json4[1][2] = {
			wall: [false, true, true, false],
			robotVisible: false,
			robotSelect: false,
			robotProps: {id: 1, color: "#ff1744"},
			goalVisible: true,
			goalProps: {id: 2, color: "#2ecc71"}
		};
		json4[3][0] = {
			wall: [false, true, true, false],
			robotVisible: true,
			robotSelect: false,
			robotProps: {id: 3, color: "#3498db"},
			goalVisible: false,
			goalProps: {id: 0, color: "red"}
		};
		json4[2][1] = {
			wall: [true, false, false, true],
			robotVisible: false,
			robotSelect: false,
			robotProps: {id: 3, color: "#3498db"},
			goalVisible: true,
			goalProps: {id: 3, color: "#3498db"}
		};
		json4[3][3] = {
			wall: [true, true, false, false],
			robotVisible: true,
			robotSelect: false,
			robotProps: {id: 4, color: "#ffb900"},
			goalVisible: false,
			goalProps: {id: 0, color: "red"}
		};
		json4[2][2] = {
			wall: [false, false, true, true],
			robotVisible: false,
			robotSelect: false,
			robotProps: {id: 4, color: "#ffb900"},
			goalVisible: true,
			goalProps: {id: 4, color: "#ffb900"}
		};
		const props = {
			sizeX: number("X", 4, {min: 1, step: 1}),
			sizeY: number("Y", 4, {min: 1, step: 1}),
			squareProps: json4
		};
		return (
			<Board {...props} />
		);
	})

