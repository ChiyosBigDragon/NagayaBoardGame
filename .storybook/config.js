// import { configure, addParameters } from '@storybook/react';
// import { setConsoleOptions } from '@storybook/addon-console';
// import { DocsPage } from '@storybook/addon-docs/blocks';

// addParameters({
// 	docs: DocsPage
// });

// setConsoleOptions({
// 	panelExclude: []
// });

// function loadStories() {
// 	let req = require.context("../src", true, /\.stories.(tsx|js)$/);
// 	req.keys().forEach(filename => req(filename));

// 	req = require.context("../src", true, /\.stories.mdx$/);
// 	req.keys().forEach(filename => req(filename));
// }

// configure(loadStories, module);