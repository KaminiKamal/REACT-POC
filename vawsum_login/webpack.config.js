const path = require('path');
const SRC_DIR = path.resolve(__dirname, "src");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = 
{
  entry: "./src/index.js",
  output:{
    filename: "bundle.js",
    path: path.resolve(__dirname, "public")
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './public'
  },
  module: {
    
    rules: [
      {
        test: /\.js?/,
        include: SRC_DIR,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["react","es2015", "stage-2"]
        }
      },
      {
        test: /\.scss?/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {loader: 'css-loader', options: {sourceMap: true} },
                {loader: 'postcss-loader', options: {sourceMap: true} },
                {loader: 'sass-loader', options: {sourceMap: true} }
          ]
        })
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader']
        })
      },  
      {
              test: /\.(png|jpg|gif|ttf|eot|woff|woff2)$/,
              use: [
                {
                  loader: 'url-loader',
                  options: {
                    
                  }
                }
              ]
            }    
    ]
  },
  plugins: [
     new ExtractTextPlugin("styles.css"),
     new BrowserSyncPlugin(
       // BrowserSync options
       {
         // browse to http://localhost:3000/ during development
         host: 'localhost',
         port: 3000,
         // proxy the Webpack Dev Server endpoint
         // (which should be serving on http://localhost:3100/)
         // through BrowserSync
         proxy: 'http://localhost:8080/'
       },
       // plugin options
       {
         // prevent BrowserSync from reloading the page
         // and let Webpack Dev Server take care of this
         reload: false
       }
     )
   ]      
  
};