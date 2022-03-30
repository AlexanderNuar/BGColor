const button = document.querySelector('button');
const color = document.querySelector('span');



const hex = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'
];

button.addEventListener('click', () => {
    let hexColor = generateHex ();
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
    
});

function generateHex () {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNum ()];
    }
    return hexColor;
}

function getRandomNum () {
    return Math.floor(Math.random() * hex.length);
}

