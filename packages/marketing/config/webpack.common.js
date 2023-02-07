module.exports = {
    module: {
        rules: [
            {
                //when we import any file with a js or mjs ending, this line process it with babel
                test: /\.m?js$/,
                //exclude the node modules
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        //babel will process all the jsx code and convert all the es5+ code to es5
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                        //add async await syntax
                        plugins: ['@babel/plugin-transform-runtime']
                    }

                }
            }
        ]
    }
}