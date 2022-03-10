/**
 * Copies individual files or entire directories,
 * hich already exist, to the build directory.
 *
 * @see https://webpack.js.org/plugins/copy-webpack-plugin/
 *
 * @author bingumd <bingumd@gmail.com>
 * @since 0.1.0
 */

import CopyPlugin from 'copy-webpack-plugin'
import { paths } from '../store'

export const Copy = new CopyPlugin({
    patterns: [
        {
            from: `${paths.public}/images`,
            to: 'assets/images',
            noErrorOnMissing: true,
        },
        {
            from: `${paths.public}/upload`,
            to: 'upload',
            noErrorOnMissing: true,
        }
    ],
})
