import React from 'react'
import reactDom from 'react-dom'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import { dirname } from 'path'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

const cjsConfig = {
  include: /node_modules/,
  namedExports: {
    react: Object.keys(React),
    'react-dom': Object.keys(reactDom)
  }
}

const isExternal = id => !id.startsWith('.') && !id.startsWith('/')

const esm = [
  // ESModules (esm) build
  {
    input: './source/index.tsx',
    output: {
      file: pkg.module,
      exports: 'named',
      format: 'esm',
      name: 'rwfr-esm',
      sourcemap: false
    },
    external: isExternal,
    plugins: [resolve(), typescript({ tsconfig: './tsconfig.build.json' })]
  }
]

const cjs = [
  // CommonJS (cjs) build
  {
    input: './source/index.tsx',
    output: {
      dir: dirname(pkg.main),
      exports: 'named',
      format: 'cjs',
      globals: { react: 'React', 'react-dom': 'ReactDOM' },
      name: 'rwfr-cjs',
      sourcemap: false
    },
    external: isExternal,
    plugins: [
      resolve(),
      commonjs(cjsConfig),
      typescript({ tsconfig: './tsconfig.build.json' })
    ]
  },

  // Minified cjs build
  {
    input: './source/index.tsx',
    output: {
      file: `${dirname(pkg.main)}/${pkg.name}.min.js`,
      exports: 'named',
      format: 'cjs',
      name: 'rwfr-cjs-min',
      sourcemap: false
    },
    external: isExternal,
    plugins: [
      resolve(),
      commonjs(cjsConfig),
      typescript({ tsconfig: './tsconfig.build.json' }),
      terser()
    ]
  }
]

const umd = [
  // Universal module definition (UMD) build
  {
    input: './source/index.tsx',
    output: {
      file: './dist/umd/react-with-forwarded-ref.js',
      exports: 'named',
      format: 'umd',
      globals: { react: 'React', 'react-dom': 'ReactDOM' },
      name: 'rwfr-umd',
      sourcemap: false
    },
    external: ['react', 'react-dom'],
    plugins: [
      resolve(),
      commonjs(cjsConfig),
      typescript({ tsconfig: './tsconfig.build.json' })
    ]
  },

  // Minified (UMD) build
  {
    input: './source/index.tsx',
    output: {
      file: './dist/umd/react-with-forwarded-ref.min.js',
      exports: 'named',
      format: 'umd',
      globals: { react: 'react', 'react-dom': 'reactdom' },
      name: 'rwfr-umd',
      sourcemap: false
    },
    external: ['react', 'react-dom'],
    plugins: [
      resolve(),
      commonjs(cjsConfig),
      typescript({ tsconfig: './tsconfig.build.json' }),
      terser()
    ]
  }
]

let config

switch (process.env.BUILD_ENV) {
  case 'cjs':
    config = cjs
    break
  case 'esm':
    config = esm
    break
  case 'umd':
    config = umd
    break
  default:
    config = cjs.concat(esm).concat(umd)
}

export default config
