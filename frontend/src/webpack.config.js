module.exports = {
    name: "mainApp",
    remotes: {
        "productListing": "productListing@http://example.com/productListing/remoteEntry.js",
    },
    shared: ["react", "react-dom"]
    };   