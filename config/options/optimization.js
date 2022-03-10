/**
 * Optimization files.
 *
 * @see https://webpack.js.org/configuration/optimization
 *
 * @author bingumd <bingumd@gmail.com>
 * @since 0.1.0
 */

export const optimization = {
    splitChunks: {
        cacheGroups: {
            default: false,
            vendors: false,
            vendor: {
                test: /node_modules/,
                chunks: 'initial',
                name: 'vendor',
                enforce: true,
            },
        },
    },
}
