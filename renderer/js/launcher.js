function onLoad(){
    const files = window.api.getLastProjects();
    const container = document.getElementById('projectList');
    files.forEach(file => {
        const btn = document.createElement('button');
        btn.className = "project-btn"
        btn.textContent = file.name;
        btn.addEventListener('click', () => {
          openRecentFile(file.path);
        });
      container.appendChild(btn);
    });

}

function openRecentFile(filePath) {
  let exists = window.api.fileExists(filePath);
  if(exists){
    window.general.sendToMain('open-app-window', filePath);
  } else {
    let errorTitle = "Invalid project";
    let errorMsg = "Project no longer exists at the last accessed location";

    let errorHTML = window.general.logError(errorTitle, errorMsg);
    let tempContainer = document.createElement('div');
    tempContainer.innerHTML = errorHTML.trim();
    let errorBox = tempContainer.firstChild;
    document.body.appendChild(errorBox);

    const popup = document.getElementById('errorPopup');
    const closeBtn = document.getElementById('closeError');
    popup.classList.remove('hidden');
    setTimeout(() => {
      popup.classList.add('show');
    }, 10);
    closeBtn.addEventListener('click', () => {
      popup.classList.remove('show');
      setTimeout(() => {
        popup.classList.add('hidden');
      }, 400);
    });
  }
}

onLoad();