const supportedFormats = ['image/png', 'image/jpeg', 'image/bpm']

function setupImages () {
  let contentBox = document.getElementsByClassName('content')[0]
  document.ondragover = () => false
  document.ondragend = () => false
  document.ondrop = (e) => {
    e.preventDefault()
    console.log(e.dataTransfer.files)
    if (e.dataTransfer.files.length) {
      const file = e.dataTransfer.files[0]
      if (supportedFormats.indexOf(file.type) !== -1) {
        const reader = new FileReader()
        reader.onload = (event) => {
          let newImage = document.createElement('img');
          newImage.src = event.target.result;
          contentBox.appendChild(newImage);
        }
        reader.readAsDataURL(file)
        return false
      }
    }
  }
}

export default setupImages