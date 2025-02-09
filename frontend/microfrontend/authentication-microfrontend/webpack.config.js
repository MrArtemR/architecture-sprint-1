module.exports = {
    name: "authentication",
    filename: "index.js",
    exposes: {
        './InfoTooltip': './src/companents',
        './Login': './src/companents',
        './Register': './src/companents',
    },
    shared: ["react", "react-dom"]
    }; 