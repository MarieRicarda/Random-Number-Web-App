numbers = [
 '1',
 '2',
 '3',
 '4',
 '5',
 '6',
 '7',
 '8',
 '9',
 '10'
]

function randomNumber() {
document.getElementById("textbox").value = numbers[Math.floor(Math.random() * numbers.length)];
}
