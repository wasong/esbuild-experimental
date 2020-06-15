const { build } = require('esbuild')

module.exports = function() {
  try {
    build({
      entryPoints: ['./index.js'],
      outfile: './public/dist/bundle.js',
      sourcemap: false,
      minify: true,
      bundle: true,
      platform: 'node',
      loader: {
        ".js": "jsx",
      },
      define: {
        "process.env.NODE_ENV": '"production"',
      },
    })
  } catch (err) {
    console.log(err)
  }
}
