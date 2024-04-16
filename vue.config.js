const { defineConfig } = require('@vue/cli-service')
module.exports = {
  devServer: {
    port: 8085, // your desired port number
  },
};
// module.exports = {
//   publicPath: process.env.NODE_ENV === 'production'
//     ? '/ThailandAccessibleTourism/'
//     : '/'
// }