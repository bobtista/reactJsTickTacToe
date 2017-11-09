var path = require("path");
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "dist")
    },
    module:{
        loaders:[
            {
                test:/\.css$/, 
                loader: "style-loader!css-loader"
            },
            {
                test: /\.js$/, 
                loader: 'babel-loader', 
                exclude: /node_modules/, 
                query:{presets:['env']}
            },
            {
                test: /\.jsx?$/,         // Match both .js and .jsx files
                exclude: /node_modules/, 
                loader: "babel-loader", 
                query:
                  {
                    presets:['env','react']
                  } 
            },
            {test: /\.(jpe?g|png|gif|svg)$/i, loader: "url-loader?name=src/img/[name].[ext]"}
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true, 
        port: 3000
    }
}