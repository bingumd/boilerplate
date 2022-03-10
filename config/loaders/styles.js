/**
 * Loads a Sass/SCSS file and compiles it to CSS.
 *
 * @see https://webpack.js.org/plugins/mini-css-extract-plugin
 * @see https://webpack.js.org/loaders/css-loader
 * @see https://github.com/webpack-contrib/postcss-loader
 * @see https://webpack.js.org/loaders/sass-loader
 *
 * @author bingumd <bingumd@gmail.com>
 * @since 0.1.0
 */

import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export const styles = {
    test: /\.(sa|sc|c)ss$/,
    use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader',
        'sass-loader',
    ],
}
