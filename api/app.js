const { ipcRenderer } = require('electron');
const fs = require('fs');
const path = require('path');

/**
 * Loads a world file from the specified path and parses it as JSON.
 *
 * @param {string} worldPath - The path to the world file to be loaded.
 * @returns {Object} - The parsed JSON object representing the world data.
 */
function loadWorldFile(worldPath) {
  const worldJSON = JSON.parse(fs.readFileSync(worldPath, 'utf8'));
  return worldJSON;
}

module.exports = {
  loadWorldFile
};