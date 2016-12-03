module.exports = {
  entry: './src/server.js',
  resolve: ['./dist', './src'],
  target: 'node',
  cjs: true,
  externals: Object.keys(require('./package.json').dependencies)
}
