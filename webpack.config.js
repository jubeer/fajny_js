const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new HtmlWebpackPlugin({
            template: 'src/blog/index.html',
            filename: 'blog/index.html'
        }),
        new CopyWebpackPlugin([{
            from: 'src/img/',
            to: 'img/'
        }, {
            from: 'src/blog/img/',
            to: 'blog/img/'
        }])
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader?modules']
            }
        ]
    }
};
