window.general.receiveFromMain('data-from-loader' , (event, data) => {
    onLoad(data);
});

function onLoad(data){
    let JSONOUTPUT = document.getElementById('JSONOUTPUT');
    let worldFileContent = window.api.loadWorldFile(data);
    JSONOUTPUT.textContent = JSON.stringify(worldFileContent);
}