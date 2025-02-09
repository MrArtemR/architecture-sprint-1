module.exports = {
    name: "profile",
    filename: "index.js",
    exposes: {
        './EditAvatarPopup': './src/companents',
        './EditProfilePipup': './src/companents',
        './Profile': './src/companents',
    },
    shared: ["react", "react-dom"]
    }; 