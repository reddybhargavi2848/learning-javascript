

// // try catch

// try {

// } catch(err) {

// }

// //callbacks


// function myFun() {
//     console.log("Hello");
// }

// //setTimeout(myFun, 2000) //setTimeout is used to call only once 

// setInterval(myFun, 1000) //setInterval is used to call infinite times without stop



const fetchAPI = async () => {
    let imageURL = null;
    try {
        let res = await fetch("https://dog.ceo/api/breeds/image/random")
        let data = await res.json()
        imageURL = data.message
    } catch (err) {
        console.log(err);
    }

    let image = document.getElementById("image")
    image.src = imageURL

}

fetchAPI()