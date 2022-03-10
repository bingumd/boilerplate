/**
 * The file-loader resolves import/require()
 * on a file into a url and emits the file into
 * the output directory.
 *
 * @see https://webpack.js.org/loaders/file-loader
 *
 * @author bingumd <bingumd@gmail.com>
 * @since 0.1.0
 */

export const fonts = {
    test: /\.(woff(2)?|eot|ttf|otf)$/,
    loader: 'file-loader',
    options: {
        name: '[folder]/[name].[ext]',
        outputPath: 'assets/fonts',
        publicPath: '../fonts',
    },
}
