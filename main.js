class Typewriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement
        this.words = words
        this.wait = wait
        this.wordIndex = 0
        this.txt = ''
        this.type()
        this.isDeleting = false
    }

    type() {
        let typeSpeed = 300
        const word = this.words[
            this.wordIndex % this.words.length]
        if (!this.isDeleting) {
            this.txt = word.
            substring(0, this.txt.length+1)
        } else {
            typeSpeed /= 2;
            this.txt = word.
            substring(0, this.txt.length-1)
        }
        this.txtElement.innerText = this.txt

        // typing complete or deletion complete
        if (this.txt == word) {
            this.isDeleting = true
            typeSpeed = this.wait
        }
        if (this.txt == '') {
            this.isDeleting = false
            typeSpeed = 500;
            this.wordIndex++
        }
        setTimeout(()=> this.type(), typeSpeed)
    }
}

document.addEventListener('DOMContentLoaded', init)

function init() {
    const txtElement = document.querySelector('.txt')
    const words = 
    JSON.parse(txtElement.getAttribute('data-words'))
    const wait = txtElement.getAttribute('data-wait')
    new Typewriter(txtElement, words, wait)
}