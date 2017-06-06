import HtmlWebpackPlugin from 'html-webpack-plugin'


export default {
  entry: {
    main: './src/index.js'
	},
  output: {
    path: __dirname + '/src',
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
			{test: /\.css$/,use: ['style-loader', 'css-loader']}
    ]
  },
  plugins: [
			new HtmlWebpackPlugin({template: __dirname + '/src/index.html', filename: 'index.html', inject: 'body'})
	]
}

