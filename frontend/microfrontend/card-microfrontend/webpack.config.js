module.exports = {
    name: "card",
    filename: "index.js",
    exposes: {
        './AddPlacePopup': './src/companents',
        './Card': './src/companents',
        './ImagePopup': './src/companents',
    },
    shared: ["react", "react-dom"]
    }; 