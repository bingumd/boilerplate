/**
 * Spin up a server for quick development.
 *
 * @see https://webpack.js.org/configuration/dev-server
 *
 * @author bingumd <bingumd@gmail.com>
 * @since 0.1.0
 */

import { watchFiles } from '../store'

export const devServer = {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 8080,
    open: process.env.OPEN || true,
    watchFiles: [...watchFiles],
    hot: true,
}
