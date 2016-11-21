const shortcutKeycodes = {
  B: { code: 66, action: 'bold' },
  I: { code: 73, action: 'italic' },
  U: { code: 85, action: 'underline' }
}

function dispatchTransform (transformName) {
  document.execCommand(transformName, false, null);
}

function preventAndDispatch (transformName, e) {
  e.preventDefault();
  e.stopPropagation();
  dispatchTransform(transformName)
}

function setupKeys () {
  document.onkeydown = (e) => {
    e = e || window.event
    if (e.ctrlKey) {
      let c = e.which || e.keyCode
      Object.keys(shortcutKeycodes).forEach((key) => {
        if (c === shortcutKeycodes[key].code) {
          preventAndDispatch(shortcutKeycodes[key].action, e)
        }
      })
    }
  }
}

window.onload = () => {
  console.log('Setting things up')
  document.execCommand("styleWithCSS",false,false)
  if (navigator.vendor !== 'Google Inc.') {
    setupKeys()
  }
}
