function LocalHandle(item) {
    this.get = () => {
        return localStorage.getItem(item) ? JSON.parse(localStorage.getItem(item)) : ''
    }
    this.set = (obj) => {
        return localStorage.setItem(item, JSON.stringify(obj))
    }
    this.clear = () => {
        return localStorage.removeItem(item)
    }
}

export const theme_local = new LocalHandle('jumao')