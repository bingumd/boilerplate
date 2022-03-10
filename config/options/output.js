/**
 * Where webpack outputs the assets and bundles.
 *
 * @see https://webpack.js.org/concepts/output
 *
 * @author bingumd <bingumd@gmail.com>
 * @since 0.1.0
 */

import { paths } from '../store'

export const output = {
    path: paths.dist,
    filename: 'assets/js/[name].js',
    chunkFilename: 'assets/js/[name].js',
}
