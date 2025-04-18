const { ipcRenderer } = require('electron');

/**
 * Sends data to the main process.
 * 
 * @param {string} event - The name of the event to send.
 * @param {*} data - The data to send to the main process.
 */ 
function sendToMain(event, data) {
  ipcRenderer.send(event, data);
}

/**
 * Listens for a specific event from the main process and executes a callback when the event is received.
 * 
 * @param {string} event - The name of the event to listen for.
 * @param {*} callback - The function to execute when the event is received.
 */ 
function receiveFromMain(event, callback){
  ipcRenderer.on(event, callback)
}

/**
 * Generates an HTML string for an error popup with a title and message.
 *
 * @param {string} title - The title of the error to be displayed.
 * @param {string} msg - The error message to be shown.
 * @returns {string} The HTML string for the error popup.
 */
function logError(title, msg) {
  let errorPopup = `<div id="errorPopup" class="error-popup hidden">
    <div class="error-popup-content">
      <span id="error-title">${title}</span>
      <p id="error-message">${msg}</p>
      <button id="closeError" class="close-error-btn">Dismiss</button>
    </div>
  </div>`
  return errorPopup;
}

module.exports = {
  sendToMain,
  receiveFromMain,
  logError
};