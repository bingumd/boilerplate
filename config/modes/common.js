import { entry, output, optimization, resolve } from '../options'
import * as plugins from '../plugins'
import * as loaders from '../loaders'

export default {
    entry,
    output,
    module: {
        rules: [
            loaders.scripts,
            loaders.twig,
            loaders.styles,
            loaders.images,
            loaders.fonts,
        ],
    },
    plugins: [
        plugins.Provide,
        plugins.MiniCssExtract,
        plugins.Copy,
        plugins.SVGSpritemap,
        ...plugins.HtmlPages()
    ],
    optimization,
    resolve,
}
