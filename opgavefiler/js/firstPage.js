/* Opgave 1*/
// din kode her

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const myDataFileUrl = "../../opgavefiler/data/story.json";
const myStoryElement = document.getElementById("theStory");
let dataStory
let dataStoryArray

function fetchStory() {
    fetch(myDataFileUrl)
    .then(respone => respone.json())
    .then(function (data) {
        dataStory = data
        dataStoryArray = Object.keys(dataStory)

    })
    .catch(error => console.log(error))
}

async function buttons() {
    await sleep(50)
    dataStoryArray.forEach((element) => {
        const createButton = document.createElement('button')
        createButton.innerText = element
        createButton.setAttribute('onclick', 'fetchStoryLang()')
        myStoryElement.appendChild(createButton)
    })
}

buttons()







function fetchStoryLang() {
    myStoryElement.innerHTML = '';
    dataStoryArray.forEach(async (element) => {
        const createButton = document.createElement('button')
        createButton.innerText = element
        createButton.setAttribute('onclick', 'fetchStoryLang()')
        myStoryElement.appendChild(createButton)
    })
    let lang = event.target.innerText
    console.log(dataStory[lang].headline)
    const createTitle = document.createElement('h3')
    createTitle.innerText = dataStory[lang].headline

    const createImg = document.createElement('img')
    createImg.src = '../../opgavefiler/img/felix.jpg'

    const createText = document.createElement('p')
    createText.innerText = dataStory[lang].text

    myStoryElement.appendChild(createTitle)
    myStoryElement.appendChild(createImg)
    myStoryElement.appendChild(createText)

}

fetchStory()


/* Opgave 2 - skriv videre på koden her: */
// const myDataFileUrl = "../../opgavefiler/data/story.json";
// const myStoryElement = document.getElementById("theStory");





/* Opgave 3*/
// din kode her
const userURI = "https://jsonplaceholder.typicode.com/users";
const myUserlistElement = document.getElementById("userList");

let userData
let userDataArray

fetch(userURI)
    .then(respone => respone.json())
    .then(function (data) {
        userData = data
        userDataArray = Object.keys(data)
    })
    .catch(error => console.log(error))



async function test() {
    await sleep(100);
    userDataArray.forEach((element) =>{
        const newUser = document.createElement('div')
        newUser.innerHTML = `<h2>${userData[element].name}</h2>
        <p>Adresse: ${userData[element].address.street}  ${userData[element].address.suite}</br>
           post nummer: ${userData[element].address.zipcode}</br>
           by: ${userData[element].address.city}</p>` 
        myUserlistElement.appendChild(newUser)
    })
}



test()


/* Opgave 4*/
// din kode her
