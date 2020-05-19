import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, color, boolean, number } from "@storybook/addon-knobs";
import { Square } from "../component/Square";

storiesOf("RicochetRobots/Square", module).addDecorator(withKnobs)
	.add("rect", () => {
		const props = {
			wall: [boolean("→", true), boolean("↓", true), boolean("←", true), boolean("↑", true)],
			robotVisible: boolean("Robot", true),
			robotSelect: boolean("Select", false),
			robotProps: {
				id: number("Robot ID", 0),
				color: color("Robot Color", "#a4c639")
			},
			goalVisible: boolean("Goal", false),
			goalProps: {
				id: number("Goal ID", 0),
				color: color("Goal Color", "#a4c639")
			}
		};
		return (
			<div>
				<div style={{display: "flex"}}>
					<Square {...props} /><Square {...props} />
				</div>
				<div style={{display: "flex"}}>
					<Square {...props} /><Square {...props} />
				</div>				
			</div>
		);
	})

