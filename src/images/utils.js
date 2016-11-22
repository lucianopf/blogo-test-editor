const supportedFormats = ['image/png', 'image/jpeg', 'image/bpm']

function setupImages () {
  let defaultContentPlaceholder = document.getElementsByClassName('content')[0]
  document.ondragover = () => false
  document.ondragend = () => false
  document.ondrop = (e) => {
    e.preventDefault()
    console.log(e)
    if (e.dataTransfer.files.length) {
      const file = e.dataTransfer.files[0]
      if (supportedFormats.indexOf(file.type) !== -1) {
        const reader = new FileReader()
        reader.onload = (event) => {
          let newImage = document.createElement('img')
          newImage.src = event.target.result
          if (e.target.isContentEditable) {
            e.target.appendChild(newImage)
          } else {
            defaultContentPlaceholder.appendChild(newImage)
          }
        }
        reader.readAsDataURL(file)
        return false
      }
    }
  }
}

export default setupImages
