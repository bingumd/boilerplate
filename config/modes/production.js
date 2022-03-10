import TerserJSPlugin from 'terser-webpack-plugin'
import { Clean } from '../plugins'

export default {
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [new TerserJSPlugin({})],
    },
    plugins: [Clean],
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
}
