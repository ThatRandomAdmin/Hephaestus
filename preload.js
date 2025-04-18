const { contextBridge } = require('electron');
const generalAPI = require('./api/general.js');
const launcherPageAPI = require('./api/launcher.js');
const appPageAPI = require('./api/app.js');

// Check the current page (based on the URL path)
const currentPath = window.location.pathname;

contextBridge.exposeInMainWorld('general', generalAPI);

console.log(currentPath);

if (currentPath.endsWith('launcher.html')) {
  contextBridge.exposeInMainWorld('api', launcherPageAPI);
} 
else if (currentPath.endsWith('app.html')) {
  contextBridge.exposeInMainWorld('api', appPageAPI);
}