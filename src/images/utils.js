function setupImages () {
  let spanText = document.querySelectorAll('span')[0]
  document.ondragover = () => false
  document.ondragend = () => false
  document.ondrop = (e) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    const reader = new FileReader()
    reader.onload = (event) => spanText.innerHTML += `<img src="${event.target.result}"></img>`
    reader.readAsDataURL(file)
    return false
  }
}

export default setupImages