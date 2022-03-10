import { resolve } from 'path'

// Get the development mode
export const isDev = process.env.NODE_ENV === 'development'

// Get the current working directory
export const cwd = process.cwd()

// Get the project paths
export const paths = {
    src       : resolve(cwd, 'src'),
    dist      : resolve(cwd, 'dist'),
    scripts   : resolve(cwd, 'src/scripts'),
    styles    : resolve(cwd, 'src/styles'),
    views     : resolve(cwd, 'src/views'),
    public    : resolve(cwd, 'src/public'),
    components: resolve(cwd, 'src/components'),
}

// Watch directory
export const watchFiles = [paths.scripts, paths.styles, paths.views, paths.components]
