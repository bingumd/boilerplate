/**
 * This package allows transpiling JavaScript
 * files using Babel and webpack.
 *
 * @see https://github.com/babel/babel-loader
 *
 * @author bingumd <bingumd@gmail.com>
 * @since 0.1.0
 */

export const scripts = {
    test: /\.js$/,
    exclude: /node_modules/,
    use: ['babel-loader'],
}
