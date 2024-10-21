const placement = document.querySelector('#output')
let fullUrl

const element = document.querySelector('#click-button')
element.addEventListener('click', async () => {
    let variable = document.querySelector('#inputField').value
    fullUrl = `https://www.swapi.tech/api/people/?name=${variable}`

    await getApi()

    document.querySelector('#inputField').value = ''
})

async function getApi() {
    await fetch (fullUrl)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let s = `Height: ${data.result[0].properties.height} cm, Hair color: ${data.result[0].properties.hair_color}, Mass: ${data.result[0].properties.mass} kg, Gender: ${data.result[0].properties.gender}`
            placement.value = s
        })
        .catch(err => console.log(err))
}