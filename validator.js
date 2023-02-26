document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('form')
    const userName = document.getElementById('name')
    const lastName = document.getElementById('last-name')
    const age = document.getElementById('age')
    
    function shift() {
        let shifts = document.getElementsByName('shift')
        let shiftCheck = []
    
        shiftCheck = Array.from(shifts).filter(shift => shift.checked).map(shift => shift.value)
        return shiftCheck
    }  
    

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        checkInputs()
    })

    function checkInputs() {
        const nameValue = userName.value.trim()
        const lastNameValue = lastName.value.trim()
        const ageValue = age.value
        const shiftValue = shift()        

        // checagem dos valores

        if (nameValue === '') {
            errorValidation(userName, 'Preencha o campo')
        } else if(nameValue.length < 2){
            errorValidation(userName, 'Minimo 2 caracteres')
        } else {
            successValidation(userName)
        }

        if (lastNameValue === '') {
            errorValidation(lastName, 'Preencha o campo')
        } else if(lastNameValue.length < 2){
            errorValidation(lastName, 'Minimo 2 caracteres')
        } else {
            successValidation(lastName)
        }

        if(ageValue === '') {
            errorValidationSelect(age, 'Selecione uma opção')
        } else {
            successValidationSelect(age)
        }

        if(shiftValue.length === 0) {
            errorCheck('Uma ou mais opções deve ser marcadas')
        } else {
            successCheck()
        }
    }

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

    function successCheck () {
        const checkBox = document.querySelector('.checkbox')
        checkBox.className = 'checkbox success'
        
        const box = document.getElementsByClassName('shift')

        Array.from(box).forEach((element) => {
            element.classList.add('shift-success');
        });
    }

})
