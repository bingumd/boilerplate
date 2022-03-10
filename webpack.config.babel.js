import merge from 'webpack-merge'
import { common, development, production } from './config/modes'
import { isDev } from './config/store'

export default () => merge(common, isDev ? development : production)
