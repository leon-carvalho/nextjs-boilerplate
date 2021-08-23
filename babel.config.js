module.exports = {
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        ssr: true
      }
    ]
  ],
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
    'next/babel'
  ]
}
