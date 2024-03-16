let toStrong = (text) => text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
let toCode = (text) => text.replace(/`(.*?)`/g, '<code>$1</code>')

let elements = document.querySelectorAll('p,li')
for (let element of elements) {
  element.innerHTML = toCode(toStrong(element.innerHTML))
}
