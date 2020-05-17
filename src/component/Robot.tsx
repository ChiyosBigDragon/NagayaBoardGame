import React from 'react';

interface RobotProps {
	id: number | null;
	color: string;
	// onClick: () => void;
}

export default function Robot(props: RobotProps) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-147 -70 294 345" width="100" height="100">
			<g fill="#a4c639">
				<use stroke-width="14.4" xlinkHref="#b" stroke="#FFF"/>
				<use xlinkHref="#a" transform="scale(-1,1)"/>
				<g id="a" stroke="#FFF" stroke-width="7.2">
					<rect rx="6.5" transform="rotate(29)" height="86" width="13" y="-86" x="14"/>
					<rect id="c" rx="24" height="133" width="48" y="41" x="-143"/>
					<use y="97" x="85" xlinkHref="#c"/>
				</g>
				<g id="b">
					<ellipse cy="41" rx="91" ry="84"/>
					<rect rx="22" height="182" width="182" y="20" x="-91"/>
				</g>
			</g>
			<g stroke="#FFF" stroke-width="7.2" fill="#FFF">
				<path d="m-95 44.5h190"/>
				<circle cx="-42" r="4"/>
				<circle cx="42" r="4"/>
			</g>
			<text font-family="Verdana" font-size="180" fill="black" direction="ltr" text-anchor="start" x="0" y="181" transform="matrix(1,0,0,1,-55,10)">
				<tspan x="0" dy="0">9</tspan>
			</text>
		</svg>
	//   <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" {...props}>
	// 	<title>circle-bottom</title>
	// 	<path
	// 	  d="M27.5 15c0 6.893-5.608 12.5-12.5 12.5-6.893 0-12.5-5.608-12.5-12.5C2.5 8.107 8.108 2.5 15 2.5c6.893 0 12.5 5.608 12.5 12.5zm2.5 0c0-8.284-6.716-15-15-15C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15zm-15 2.5l-5.625-5.625-1.875 1.91L15 21.25l7.5-7.466-1.875-1.91L15 17.5z"
	// 	  fill-rule="evenodd"
	// 	/>
	// 	</svg>
	);
}