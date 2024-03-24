let loadButton = document.getElementById('load')
loadButton.onclick = async () => {
    let tempElement = document.getElementById('temp')  
    let res = await fetch('api/weather')
    let resJson = await res.json()
    tempElement.innerHTML = resJson.temp
}