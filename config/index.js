import merge from 'webpack-merge'
import { common, development, production } from './modes'
import { isDev } from './store'

export default () => merge(common, isDev ? development : production)
