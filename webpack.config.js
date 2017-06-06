import HtmlWebpackPlugin from 'html-webpack-plugin'

module.exports = {

    entry: {
        main: './src/index.js'
		},

		output: {
			path: __dirname + '/dist',
			filename: "index_bundle.js"
		},

		module: {
			rules: [
				{
					test: /\.js$/, 
					exclude: /node_modules/, 
					loader: "babel-loader"
				},
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader']
				}

			]
		},
		plugins:[
			new HtmlWebpackPlugin({template: __dirname + '/src/index.html', filename: 'index.html', inject: 'body'})
		]
}