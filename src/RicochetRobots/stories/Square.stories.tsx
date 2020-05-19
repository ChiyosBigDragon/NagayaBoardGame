import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, color, boolean, number } from "@storybook/addon-knobs";
import { Square } from "../component/Square";

storiesOf("RicochetRobots/Square", module).addDecorator(withKnobs)
	.add("single", () => {
		const props = {
			wall: [boolean("→", true), boolean("↓", true), boolean("←", true), boolean("↑", true)],
			robotVisible: boolean("Robot", true),
			robotSelect: boolean("Select", false),
			robotProps: {
				id: number("ID", 0),
				color: color("Robot Color", "#a4c639")
			},
			goalVisible: boolean("Goal", true),
			goalProps: {
				id: number("ID", 0),
				color: color("Goal Color", "#a4c639")
			}
		};
		return (
			<Square {...props} />
		);
	})

