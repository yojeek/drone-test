import path from 'path'
import webpack from 'webpack'
import jssGlobal from 'jss-global'
import jssNested from 'jss-nested'
import jssCamelCase from 'jss-camel-case'
import autoprefixer from 'autoprefixer'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CssResolvePlugin from 'elementum-tools/lib/webpack/css-resolve-plugin'

export const entry = [
  '@babel/polyfill',
  'webpack-hot-middleware/client',
  './src/index.js',
]

export const output = {
  path: '/',
  filename: '[name].js',
}

export const module = {
  rules: [
    {
      test: /\.js?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        babelrc: false,
        presets: [
          ['@babel/preset-env', {
            modules: false,
            targets: {
              ie: 9,
            },
          }],
          '@babel/preset-react',
        ],
        plugins: [
          '@babel/plugin-proposal-class-properties',
          '@babel/plugin-proposal-object-rest-spread',
          '@babel/plugin-proposal-decorators',
          ['elementum-tools/lib/babel/plugin', {
            alias: {
              Avisits: 'src/app',
              AvisitsUI: 'src/ui',
            },
            extract: true,
          }],
          'react-hot-loader/babel',
        ],
      },
    },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: () => ([
              autoprefixer({ browsers: ['>2%', 'last 2 versions'] }),
            ]),
          },
        },
      ],
    },
    {
      test: /\.jss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: () => ([
              autoprefixer({ browsers: ['>2%', 'last 2 versions'] }),
            ]),
          },
        },
        'jss-loader',
      ],
    },
    {
      test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
      loader: 'file-loader?name=[name].[ext]',
    },
  ],
}

export const resolve = {
  alias: {
    ui: path.join(__dirname, '../../src/ui'),
  },
  plugins: [
    new CssResolvePlugin(),
  ],
}

export const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.resolve(__dirname, 'index.ejs'),
  }),
  new webpack.ProvidePlugin({
    fetch: 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch',
  }),
  new webpack.DefinePlugin({
    'process.env.API_URL': JSON.stringify(
      process.env.API_URL || 'http://localhost:3000/',
    ),
  }),
  new webpack.LoaderOptionsPlugin({
    options: {
      jssLoader: {
        plugins: [
          jssGlobal(),
          jssNested(),
          jssCamelCase(),
        ],
      },
    },
  }),
]
