import { debounce } from '@/utils'
import { dom, sizes } from '@/store'

export default new class {
    constructor() {
        this.callbacks = []
    }

    add(cb) {
        const index = this.callbacks.indexOf(cb)
        index === -1 && this.callbacks.push(cb)
    }

    remove(cb) {
        const index = this.callbacks.indexOf(cb)
        index !== -1 && this.callbacks.splice(index, 1)
    }

    #setSizes() {
        sizes.ww = window?.visualViewport?.width ?? window.innerWidth
        sizes.wh = window?.visualViewport?.height ?? window.innerHeight
    }

    #setVar() {
        dom.$html.style.setProperty('--vh', `${sizes.wh * 0.01}px`)
    }

    #onResize = () => {
        this.#setSizes()
        this.#setVar()

        // run all callbacks
        this.callbacks.forEach(cb => cb())
    }

    addEvents() {
        window.addEventListener('resize', debounce(150, this.#onResize))
    }

    initialize() {
        this.#setSizes()
        this.#setVar()
        this.addEvents()
    }
}
