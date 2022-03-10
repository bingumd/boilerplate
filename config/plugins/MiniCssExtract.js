/**
 * This plugin extracts CSS into separate files.
 *
 * @see https://webpack.js.org/plugins/mini-css-extract-plugin/
 *
 * @author bingumd <bingumd@gmail.com>
 * @since 0.1.0
 */

import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export const MiniCssExtract = new MiniCssExtractPlugin({
    filename: 'assets/css/[name].css',
    chunkFilename: 'assets/css/[name].css',
})
