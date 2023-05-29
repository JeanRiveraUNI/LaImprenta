'use client'
//import Home from '../home/home.html'

//const Page = () => {
  //return (
    //<div>
      //<Home></Home>
    //</div>
  //)
//}

const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
  },
  plugins: [new HtmlWebpackPlugin({ template: './home/home.html' })],
};


