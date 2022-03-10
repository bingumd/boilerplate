import MobileDetect from 'mobile-detect'
import { dom } from '@/store'

export default new class {
    constructor() {
        this.md = new MobileDetect(window.navigator.userAgent)

        this.isDesktop = null
        this.isDevice = null
        this.isTablet = null
        this.isPhone = null
    }

    setValues() {
        this.isDevice = this.md.mobile() !== null
        this.isPhone = this.md.phone() !== null
        this.isTablet = this.isDevice && !this.isPhone
        this.isDesktop = !this.isDevice
    }

    setClasses() {
        this.isDesktop && dom.$html.classList.add('is-desktop')
        this.isDevice && dom.$html.classList.add('is-device')
        this.isTablet && dom.$html.classList.add('is-tablet')
        this.isPhone && dom.$html.classList.add('is-phone')
    }

    initialize() {
        this.setValues()
        this.setClasses()
    }
}
