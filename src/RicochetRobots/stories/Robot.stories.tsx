import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, color, number } from "@storybook/addon-knobs";
import { Robot } from "../component/Robot";

storiesOf("RicochetRobots/Robot", module).addDecorator(withKnobs)
	.add("single", () => {
		const props = {
			id: number("ID", 0),
			color: color("Color", "#a4c639")
		};
		return (
			<div style={{display: "flex", height: "400px"}}>
				<Robot {...props} />
			</div>
		);
	})

