import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, color, number } from "@storybook/addon-knobs";
import { Robot } from '../component/RicochetRobots/Robot';

storiesOf('Robot', module).addDecorator(withKnobs)
	.add('single', () => {
		const props = {
			id: number("ID", 0, {range: true, min: 0, max: 9, step: 1}),
			color: color("Color", "#a4c639")
		};
		return (
			<Robot {...props} />
		);
	})

