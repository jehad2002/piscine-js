// export function generateLetters(){
//     let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//     for(let i=1;i<=120;i++){
//         let char = ''
//         char += possible.charAt(Math.floor(Math.random()*possible.length))
//         let elem = document.createElement('div')
//         elem.innerHTML = char
//         elem.style.fontSize = (i+10)+'px';
//         if (i <= 40 ){
//             elem.style.fontWeight = "300";
//         } else if (i <= 80) {
//             elem.style.fontWeight = "400";
//         } else {
//             elem.style.fontWeight = "600";
//         }
//         document.body.append(elem)
//         console.log(i)
//     }
// }

//===========================================================

function generateLetters() {
    for (let i = 0; i < 120; i++) {
        let letter = document.createElement("div");
        letter.style.fontSize = `${11 + i}px`;
        letter.textContent = String.fromCharCode(
            65 + Math.floor(Math.random() * 26)
        );
        if (i < 40) {
            letter.style.fontWeight = "300";
        } else if (i < 80) {
            letter.style.fontWeight = "400";
        } else {
            letter.style.fontWeight = "600";
        }
        document.getElementsByTagName("body")[0].appendChild(letter);
    }
}

export { generateLetters };