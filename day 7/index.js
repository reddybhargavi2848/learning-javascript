const changeColor = () => {
    let display =document.getElementById("display")
    let color = "#" //6
    let colorCodes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']

    for(let i = 0; i < 6; i++) {
        let randNo = Math.floor(Math.random() * 16) // floor is used to ignore values after the decimal(eg:0.1274654) here consider only 0
        color += colorCodes[randNo]
    }

    display.style.backgroundColor = color
}

changeColor()