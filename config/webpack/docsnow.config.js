import path from 'path'

export const module = {
  rules: [
    {
      test: /\.js?$/,
      include: path.join(__dirname, '../../src/ui'),
      use: [
        {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [
              ['es2015', { modules: false }],
              'stage-0',
              'react',
            ],
            plugins: [
              ['elementum-tools/lib/babel/plugin', {
                extract: true,
              }],
              'react-hot-loader/babel',
            ],
          },
        },
      ],
    },
  ],
}
