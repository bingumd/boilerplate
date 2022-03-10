/**
 * These options change how modules are resolved.
 *
 * @see https://webpack.js.org/configuration/resolve
 *
 * @author bingumd <bingumd@gmail.com>
 * @since 0.1.0
 */

import { paths } from '../store'

export const resolve = {
    alias: {
        '@': paths.scripts,
        '@src': paths.src,
        '@public': paths.public,
        '@fonts': `${paths.public}/fonts`,
        '@upload': `${paths.public}/upload`,
        '@images': `${paths.public}/images`,
        'sass:tools': `${paths.styles}/_tools`,
        'sass:settings': `${paths.styles}/_settings`,
    },
}
