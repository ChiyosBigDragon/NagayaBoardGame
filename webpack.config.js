const nodeExternals = require("webpack-node-externals");

const clientConfig = {
	mode: "development",
	entry: {
		client: "./src/client/index.ts",
	},
	output: {
		filename: "[name].js",
		path: `${__dirname}/public/js`,
	},
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: "ts-loader",
            exclude: /node_modules/,
        }]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
};

const serverConfig = {
	mode: "development",
	entry: {
		server: "./src/server/index.ts",
	},
	output: {
		filename: "[name].js",
		path: `${__dirname}/server/`,
	},
	target: "node",
	node: {
		// needed for express
		__dirname: false,
		__filename: false,
	},
	externals: [nodeExternals()],
	module: {
		rules: [{
			test: /\.ts$/,
			use: "ts-loader",
			exclude: /node_modules/,
		}]
	},
	resolve: {
		extensions: [".ts", ".js"]
	}
}

module.exports = [/*clientConfig,*/ serverConfig];