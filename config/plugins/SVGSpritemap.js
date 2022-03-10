/**
 * This webpack plugin generates a single SVG spritemap
 * containing multiple <symbol> elements from all .svg
 * files in a directory.
 *
 * @see https://github.com/cascornelissen/svg-spritemap-webpack-plugin
 *
 * @author bingumd <bingumd@gmail.com>
 * @since 0.1.0
 */

import SVGSpritemapPlugin from 'svg-spritemap-webpack-plugin'
import { basename, dirname } from 'path'
import { paths } from '../store'

export const SVGSpritemap = new SVGSpritemapPlugin(`${paths.public}/sprites/**/*.svg`, {
    output: {
        filename: 'assets/images/sprite.svg',
        svgo: {
            plugins: [
                { name: 'removeStyleElement' },
            ],
        },
    },
    sprite: {
        prefix: filename => {
            const parentName = basename(dirname(filename))
            return 'sprites' !== parentName ? `${parentName}-` : ''
        },
        generate: {
            title: false,
        },
    }
})
