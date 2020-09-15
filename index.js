

function writeCards(nameArray, event) {
    let names = []
    for (let i = 0; i < nameArray.length; i++) {
    names.push(`Thank you, ${nameArray[i]}, for the wonderful ${event} gift!`);

}
return names
}

function countDown() {
    let countNumber = 10
    while (countNumber >= 0) {
        console.log(countNumber--)
    }

}