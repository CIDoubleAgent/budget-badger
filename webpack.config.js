const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
    entry: {
        app: "./server.js"
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].bundle.js"
    },
    plugins: [
        new WebpackPwaManifest({
        
            name: "Budget Tracker",
            short_name: "Budget Tracker",
            background_color: "#dddddd",
            theme_color: "#dddddd",
            start_url: "/",
            icons: [
                {
                    src: "/icons/icon-192x192.png",
                    sizes: [192],
                    destination: path.resolve("public/icons/icon-192x192.png")
                },
                {
                    src: "/icons/icon-512x512.png",
                    sizes: [512],
                    destination: path.resolve("public/icons/icon-512x512.png")
                }
            ]
        })
    ]
}

module.exports = config;