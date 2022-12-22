const esbuild = require('esbuild');

esbuild
  .build({
    entryPoints: ['index.jsx'],
    bundle: true,
    minify: true,
    outfile: 'dist/index.js',
  })
  .catch(() => process.exit(1));