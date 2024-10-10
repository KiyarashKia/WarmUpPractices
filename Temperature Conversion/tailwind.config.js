module.exports = {
  content: [
    './views/**/*.html',  // All HTML files inside the views folder
    './views/**/*.js',    // All JS files inside the views folder
    './index.html',       // If you move your index.html to the root, scan it directly
    './public/**/*.js',   // All JS files in public (if any)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
