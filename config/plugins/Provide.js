/**
 * Automatically load modules instead of having
 * to import or require them everywhere.
 *
 * @see https://webpack.js.org/plugins/provide-plugin/
 *
 * @author bingumd <bingumd@gmail.com>
 * @since 0.1.0
 */

import { ProvidePlugin } from 'webpack'
import { paths } from '../store'

export const Provide = new ProvidePlugin({})

