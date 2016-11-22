function dispatchTransform (transformName) {
  document.execCommand(transformName, false, null)
}

function preventAndDispatch (transformName, e) {
  e.preventDefault()
  e.stopPropagation()
  dispatchTransform(transformName)
}

function setupKeys (shortcutKeycodes) {
  document.onkeydown = (e) => {
    e = e || window.event
    if (e.ctrlKey || e.metaKey) {
      let c = e.which || e.keyCode
      Object.keys(shortcutKeycodes).forEach((key) => {
        if (c === shortcutKeycodes[key].code) {
          preventAndDispatch(shortcutKeycodes[key].action, e)
        }
      })
    }
  }
}

export default setupKeys
