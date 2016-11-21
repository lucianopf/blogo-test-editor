import setupKeys from './shortcuts/utils.js'
import setupImages from './images/utils.js'

const shortcutKeycodes = {
  B: { code: 66, action: 'bold' },
  I: { code: 73, action: 'italic' },
  U: { code: 85, action: 'underline' }
}

window.onload = () => {
  console.log('Setting things up')
  document.execCommand("styleWithCSS",false,false)
  if (navigator.vendor !== 'Google Inc.') {
    setupKeys(shortcutKeycodes)
  }
  setupImages()
}
