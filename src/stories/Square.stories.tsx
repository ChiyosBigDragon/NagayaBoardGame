import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, color, boolean, number } from "@storybook/addon-knobs";
import Square from "../component/RicochetRobots/Square";
import "../index.css";

storiesOf("Square", module).addDecorator(withKnobs)
	.add('single', () => {
		const props = {
			wall: [boolean("→", true), boolean("↓", true), boolean("←", true), boolean("↑", true)],
			robotProps: {
				id: number("ID", 1),
				color: color("Color", "#ff1744")
			}
		};
		return (
			<Square {...props} />
		);
	})

