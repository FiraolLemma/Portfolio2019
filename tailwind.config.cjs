module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        navy: '#071033',
        brandBlue: '#5b6cff',
        brandPurple: '#7b4bff'
      },
      boxShadow: {
        'soft-lg': '0 10px 30px rgba(11,12,40,0.6)'
      }
    }
  },
  plugins: []
}
