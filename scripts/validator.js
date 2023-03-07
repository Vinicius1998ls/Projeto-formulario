document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('form')
    const userName = document.getElementById('name')
    const lastName = document.getElementById('last-name')
    const age = document.getElementById('age')
    const email = document.getElementById('email')
    const phone = document.getElementById('phone')

    function shift() {
        let shifts = document.getElementsByName('shift')
        let shiftCheck = []

        shiftCheck = Array.from(shifts).filter(shift => shift.checked).map(shift => shift.value)
        return shiftCheck
    }


    //Checagem em tempo real

    userName.addEventListener('blur', () => {
        const name = userName.value.trim()

        if (name === '') {
            errorValidation(userName, 'Preencha o campo')
        } else if (name.length < 2) {
            errorValidation(userName, 'Minimo 2 caracteres')
        } else {
            successValidation(userName)
        }
    })

    lastName.addEventListener('blur', () => {
        const lastNameValue = lastName.value.trim()

        if (lastNameValue === '') {
            errorValidation(lastName, 'Preencha o campo')
        } else if (lastNameValue.length < 2) {
            errorValidation(lastName, 'Minimo 2 caracteres')
        } else {
            successValidation(lastName)
        }
    })

    email.addEventListener('blur', () => {
        const emailValue = email.value
        const mailRegex = /^[\w._-]+@[\w_.-]+\.[\w]/gi

        if (emailValue === '') {
            errorValidationInput(email, 'Digite seu email')
        } else if (!mailRegex.test(emailValue)) {
            errorValidationInput(email, 'Digite um email valido, com "@" e "."')
        } else {
            successValidationInput(email)
        }
    })

    phone.addEventListener('blur', () => {
        const phoneValue = phone.value.trim()

        if (phoneValue === '') {
            errorValidationInput(phone, 'Digite seu numero')
        } else if (phoneValue.length < 14) {
            errorValidationInput(phone, 'Digite um numero valido')
        } else {
            successValidationInput(phone)
        }
    })


    // checagem ao clicar em enviar

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        checkInputs()        
    })

    function checkInputs() {
                
        const nameValue = userName.value.trim()
        const lastNameValue = lastName.value.trim()
        const ageValue = age.value
        const shiftValue = shift()
        const emailValue = email.value
        const phoneValue = phone.value.trim()

        const mailRegex = /^[\w._-]+@[\w_.-]+\.[\w]/gi
 
        let checkList = Array(6).fill('');        

        // checagem dos valores

        if (nameValue === '') {
            checkList[0] = ''
            errorValidation(userName, 'Preencha o campo')
        } else if (nameValue.length < 2) {
            checkList[0] = ''
            errorValidation(userName, 'Minimo 2 caracteres')
        } else {
            checkList[0] = 'ok'
            successValidation(userName)
        }

        if (lastNameValue === '') {
            checkList[1] = ''
            errorValidation(lastName, 'Preencha o campo')
        } else if (lastNameValue.length < 2) {
            checkList[1] = ''
            errorValidation(lastName, 'Minimo 2 caracteres')
        } else {
            checkList[1] = 'ok'
            successValidation(lastName)
        }

        if (ageValue === '') {
            checkList[2] = ''
            errorValidationSelect(age, 'Selecione uma opção')
        } else {
            checkList[2] = 'ok'
            successValidationSelect(age)
        }

        if (shiftValue.length === 0) {
            checkList[3] = ''
            errorCheck('Uma ou mais opções devem ser marcadas')
        } else {
            checkList[3] = 'ok'
            successCheck()
        }

        if (emailValue === '') {
            checkList[4] = ''
            errorValidationInput(email, 'Digite seu email')
        } else if (!mailRegex.test(emailValue)) {
            checkList[4] = ''
            errorValidationInput(email, 'Digite um email valido, com "@" e "."')
        } else {
            checkList[4] = 'ok'
            successValidationInput(email)
        }

        if (phoneValue === '') {
            checkList[5] = ''
            errorValidationInput(phone, 'Digite seu numero')
        } else if (phoneValue.length < 14) {
            checkList[5] = ''
            errorValidationInput(phone, 'Digite um numero valido')
        } else {
            checkList[5] = 'ok'
            successValidationInput(phone)
        }

        const allOk = checkList.filter((check => check === 'ok'))

        if(allOk.length == 6) {
            location.replace("pages/thanks.html")
        }
    }

    //checagem após mudar valor

    age.addEventListener('change', () => {
        if (age.className === 'age-error') {
            successValidationSelect(age)
        }
    })

    function shiftClass() {
        let shifts = document.getElementsByName('shift')
        let shiftClass = []

        shiftClass = Array.from(shifts).filter(shift => shift.className)
        return shiftClass
    }

    const box = shiftClass()
    box[0].addEventListener('change', () => {
        if (box[0].className === 'shift shift-error') {
            successCheck()
        }
    })
    box[1].addEventListener('change', () => {
        if (box[1].className === 'shift shift-error') {
            successCheck()
        }
    })
    box[2].addEventListener('change', () => {
        if (box[2].className === 'shift shift-error') {
            successCheck()
        }
    })


    // Validadores

    // Validação de input text

    function errorValidation(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small')

        small.innerText = message

        formControl.className = 'form-control error'
    }

    function successValidation(input) {
        const formControl = input.parentElement;

        formControl.className = 'form-control success'
    }

    function errorValidationInput(input, message) {

        if (input.type === 'email') {
            const email = input.parentElement;
            const small = email.querySelector('small')
            small.innerText = message

            email.className = 'email email-error'
            input.className = 'large-input-error'
        } else {
            const phone = input.parentElement;
            const small = phone.querySelector('small')
            small.innerText = message

            phone.className = 'phone phone-error'
            input.className = 'large-input-error'
        }
    }

    function successValidationInput(input, message) {

        if (input.type === 'email') {
            const email = input.parentElement;
            const small = email.querySelector('small')
            small.innerText = message

            email.className = 'email email-success'
            input.className = 'large-input-success'
        } else {
            const phone = input.parentElement;
            const small = phone.querySelector('small')
            small.innerText = message

            phone.className = 'phone phone-success'
            input.className = 'large-input-success'
        }
    }

    //Validador para select

    function errorValidationSelect(select, message) {
        const formControl = select.parentElement;
        const small = formControl.querySelector('small')

        small.innerText = message
        formControl.className = 'select error'

        select.className = 'age-error'
    }

    function successValidationSelect(select) {
        const formControl = select.parentElement;

        formControl.className = 'select success'
        select.className = 'age-success'
    }

    //Validador para checkbox    

    function errorCheck(message) {

        const checkBox = document.querySelector('.checkbox')
        checkBox.className = 'checkbox error'

        const small = checkBox.querySelector('small')
        small.innerText = message


        const box = document.getElementsByClassName('shift')

        Array.from(box).forEach((element) => {
            element.classList.remove('shift-success');
            element.classList.add('shift-error');
        });        
    }

    function successCheck() {
        const checkBox = document.querySelector('.checkbox')
        checkBox.className = 'checkbox success'

        const box = document.getElementsByClassName('shift')

        Array.from(box).forEach((element) => {
            element.classList.add('shift-success');
            element.classList.remove('shift-error')
        });        
    }
})