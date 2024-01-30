function setColor(set) {
        let changeColor = set;
        return () => {
            if (changeColor){
                let userColor = document.getElementById('color').value;
            document.getElementById('myPara').style.color = userColor;
            }
        }
        // here we return a closure, so instead of a static function, a live one returns which uses closure based on changeColor
}

window.onload = function() {
    let toggle = true;
    document.getElementById('btn').onclick = setColor(toggle);
}


//or 

// function setColor(set) {
//     let changeColor = set;
//     if (changeColor){
//         let userColor = document.getElementById('color').value;
//     document.getElementById('myPara').style.color = userColor;
//     }
//     // here we return a closure, so instead of a static function, a live one returns which uses closure based on changeColor
// }

// window.onload = function() {
// let toggle = true;
// document.getElementById('btn').onclick = () => setColor(toggle);
// }
// // this is also a closure