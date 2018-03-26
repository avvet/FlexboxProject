const path = require('path');//встроенная в node.js библиотека 'path'

module.exports = {
  mode:'development',
  entry:'./main.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
    // publicPath: "/build/"
  },
  module:{
    rules:[//массив объектов с Babel
      {
        test: /\.js/,
        use:[
          {
            loader: 'babel-loader',
            options:{presets: ["env"]}
          }
        ]
      }
    ]
  }
}