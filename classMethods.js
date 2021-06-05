class Size {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}

class Image {
    constructor(url, size) {
        this.url = url
        this.size = size
    }
    getUrl() {
        return this.url
    }
    setUrl(url) {
        this.url = url
    }
    setSize(width, height) {
        this.size.height = height
        this.size.width = width
    }
    getSize() {
        return this.size
    }
    cloneImage() {
        return new Image(this.url, new Size(this.size.width, this.size.height))
    }
}

const s = new Size(10, 20)
const i = new Image('abc.com/hello', s)
console.log(i)
console.log(i.getSize())
console.log(i.getUrl())

