const supportedFormats = ['image/png', 'image/jpeg', 'image/bpm', '.jpg', '.png', '.bmp']

function appendOnTargetOrDefault (e, imgSrc, defaultContainer) {
  let newImage = document.createElement('img')
  newImage.src = imgSrc
  if (e.target.isContentEditable) {
    e.target.appendChild(newImage)
  } else {
    defaultContainer.appendChild(newImage)
  }
}

function setupImages () {
  let defaultContentPlaceholder = document.getElementsByClassName('content')[0]
  document.ondragover = () => false
  document.ondragend = () => false
  document.ondrop = (e) => {
    e.preventDefault()
    if (e.dataTransfer.files.length) {
      const file = e.dataTransfer.files[0]
      if (supportedFormats.indexOf(file.type) !== -1) {
        const reader = new FileReader()
        reader.onload = (event) => appendOnTargetOrDefault(e, event.target.result, defaultContentPlaceholder)
        reader.readAsDataURL(file)
        return false
      }
    } else if (e.dataTransfer.getData('Text').length) {
      const srcFromWeb = e.dataTransfer.getData('Text')
      if (supportedFormats.indexOf(srcFromWeb.slice(-4)) !== -1) {
        appendOnTargetOrDefault(e, srcFromWeb, defaultContentPlaceholder)
      }
      return false
    }
  }
}

export default setupImages
