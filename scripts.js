function saveName() {
    let name = document.getElementById("name").value
    event.preventDefault();
    console.log(name)
}

function saveLastName() {
    let lastName = document.getElementById("lastName").value
    event.preventDefault();
    console.log(lastName)
}

function age() {
    let age = document.getElementById("age").value
    console.log(age)
}

function gender() {
    let buttons = document.getElementsByName('gender')
    if(buttons[0].checked) {
        let gender = "Masculino"
        console.log(gender)
    } else {
        let gender = "Feminino"
        console.log(gender)
    }    
}

function shift() {
    let shifts = document.getElementsByName('shift')
    let shiftCheck = []

    shiftCheck = Array.from(shifts).filter(shift => shift.checked).map(shift => shift.value)
    console.log(shiftCheck)
}

function range() {
    let range =  document.getElementById("range").value
    console.log(range)
}

function comment() {
    let comment = document.getElementById("comment").value
    console.log(comment)
}

function email() {
    let email = document.getElementById("email").value
    console.log(email)
}

function phone() {
    let phone = document.getElementById("phone").value
    console.log(phone)
}

function send() {
    saveName()
    saveLastName()
    age()
    gender()
    shift()
    range()
    comment()
    email()
    phone()
}