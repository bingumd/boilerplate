/**
 * This Webpack loader compiles Twig templates.
 *
 * @see https://www.npmjs.com/package/twig-html-loader
 *
 * @author bingumd <bingumd@gmail.com>
 * @since 0.1.0
 */

import { join  } from 'path'
import { paths } from '../store'

export const twig = {
    test: /\.(html|twig)$/,
    use: [
        'raw-loader',
        {
            loader: 'twig-html-loader',
            options: {
                namespaces: {
                    'data'    : `${paths.views}/data`,
                    'layouts' : `${paths.views}/layouts`,
                    'macros'  : `${paths.views}/macros`,
                    'partials': `${paths.views}/partials`,
                    'sections': `${paths.views}/sections`,
                },
                data: ({ fs, addDependency  }) => {
                    const data = join(`${paths.views}/data`, 'global.json')
                    addDependency(data)
                    return fs.readJsonSync(data, { throws: false })
                },
                filters: {
                    json_decode(value) {
                        return JSON.parse(value)
                    },
                },
            },
        },
    ],
}
