const { build } = require('esbuild')

module.exports = function() {
  try {
    build({
      entryPoints: ['./index.js'],
      outfile: './public/dist/bundle.js',
      sourcemap: true,
      minify: true,
      bundle: true,
      platform: 'node',
      loader: {
        ".js": "jsx",
      },
      define: {
        "process.env.NODE_ENV": '"development"',
      },
    })
  } catch (err) {
    console.log(err)
  }
}
