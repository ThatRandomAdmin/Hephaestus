const { ipcRenderer } = require('electron');
const fs = require('fs');
const path = require('path');

/**
 * Retrieves the list of recently accessed projects from the config file.
 * @returns {Array<Object>} An array of recent projects.
 */
function getLastProjects() {
  const jsonPath = path.join(__dirname, '../config.json');
  const configJson = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  const recentProjects = configJson["lastProjects"];
    
  return recentProjects
}

/**
 * Checks whether a given file path exists in the file system.
 * @param {string} filePath - The path to the file to check.
 * @returns {boolean} `true` if the file exists, otherwise `false`.
 */
function fileExists(filePath){
  return fs.existsSync(filePath);
}

module.exports = {
  getLastProjects,
  fileExists
};