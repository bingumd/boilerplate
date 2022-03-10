/**
 * Where webpack looks to start building the bundle.
 *
 * @see https://webpack.js.org/concepts/entry-points
 *
 * @author bingumd <bingumd@gmail.com>
 * @since 0.1.0
 */

import { paths } from '../store'

export const entry = {
    main: [`${paths.scripts}/main.js`, `${paths.styles}/main.scss`],
}
