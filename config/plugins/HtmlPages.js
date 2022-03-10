/**
 * A webpack plugin to simplifies creation of HTML
 * files to serve your webpack bundles.
 *
 * @see https://webpack.js.org/plugins/html-webpack-plugin/
 *
 * @author bingumd <bingumd@gmail.com>
 * @since 0.1.0
 */

import fs from 'fs'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { paths } from '../store'

export const HtmlPages = () => fs
.readdirSync(paths.views, { withFileTypes: true })
.filter(dirent => dirent.isFile())
.map(({ name }) => new HtmlWebpackPlugin({
    filename: name.replace('.twig', '.html'),
    template: `${paths.views}/${name}`,
    inject: false,
    minify: false,
}))
