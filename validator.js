document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('form')
    const userName = document.getElementById('name')
    const lastName = document.getElementById('last-name')


    form.addEventListener('submit', (e) => {
        e.preventDefault()

        checkInputs()
    })

    function checkInputs() {
        const nameValue = userName.value.trim()
        const lastNameValue = lastName.value.trim()

        if (nameValue === '') {
            errorValidation(userName, 'Preencha o campo')

        } else if(nameValue.length < 2){
            errorValidation(userName, 'Minimo 2 caracteres')
        } else {
            successValiation(userName)
        }

        if (lastNameValue === '') {
            errorValidation(lastName, 'Preencha o campo')

        } else if(nameValue.length < 2){
            errorValidation(lastName, 'Minimo 2 caracteres')
        } else {
            successValiation(lastName)
        }
    }

    function errorValidation(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small')

        small.innerText = message

        formControl.className = 'form-control error'
    }

    function successValiation(input) {
        const formControl = input.parentElement;

        formControl.className = 'form-control success'
    }

})
