/*
This is the webpack config file
 */
module.exports = {
    /*
    Specifying the entry file
     */
    entry: "./entry.js",
    /*
    Specifying the output file
     */
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    /*
    Modules
     */
    module: {
        /*
        Modules
         */
        loaders: [
            /*
            CSS loader will be used to bundle CSS code
             */
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    }
};