function validate() {
    let error = false
    let firstNameInput = document.getElementById('first-name').value
    let lastNameInput = document.getElementById('last-name').value
    let emailInput = document.getElementById('email-id').value
    let phoneInput = document.getElementById('phone-number').value
    let batchInput = document.getElementById('batch-number').value
    let moduleInput = document.getElementById('current-module').value
    let tncInput = document.getElementById('tnc').checked
    console.log(tncInput)

    if (firstNameInput.length >= 3) {
        document.getElementById('first-name-invalid').style.display = 'none'
        document.getElementById('first-name-valid').style.display = 'block'
    } else {
        document.getElementById('first-name-invalid').style.display = 'block'
        document.getElementById('first-name-valid').style.display = 'none'
        error = true
    }

    if (lastNameInput.length >= 3) {
        document.getElementById('last-name-valid').style.display = 'block'
        document.getElementById('last-name-invalid').style.display = 'none'
    } else {
        document.getElementById('last-name-valid').style.display = 'none'
        document.getElementById('last-name-invalid').style.display = 'block'
        error = true
    }

    if (emailInput.length >= 1 &&
        emailInput.includes('@') &&
        emailInput.includes('.') &&
        emailInput.lastIndexOf('.') <= emailInput.length - 3 &&
        emailInput.indexOf('@') !== 0) {
        document.getElementById('email-valid').style.display = 'block'
        document.getElementById('email-invalid').style.display = 'none'
    } else {
        document.getElementById('email-valid').style.display = 'none'
        document.getElementById('email-invalid').style.display = 'block'
        error = true
    }

    if (phoneInput.length == 10 && parseInt(phoneInput)) {
        document.getElementById('phone-number-valid').style.display = 'block'
        document.getElementById('phone-number-invalid').style.display = 'none'
    } else {
        document.getElementById('phone-number-valid').style.display = 'none'
        document.getElementById('phone-number-invalid').style.display = 'block'
        error = true
    }

    if (batchInput !== 'None') {
        document.getElementById('batch-number-valid').style.display = 'block'
        document.getElementById('batch-number-invalid').style.display = 'none'
    } else {
        document.getElementById('batch-number-valid').style.display = 'none'
        document.getElementById('batch-number-invalid').style.display = 'block'
        error = true
    }

    if (moduleInput !== 'None') {
        document.getElementById('current-module-valid').style.display = 'block'
        document.getElementById('current-module-invalid').style.display = 'none'
    } else {
        document.getElementById('current-module-valid').style.display = 'none'
        document.getElementById('current-module-invalid').style.display = 'block'
        error = true
    }

    if (tncInput) {
        document.getElementById('tnc-invalid').style.display = 'none'
    } else {
        document.getElementById('tnc-invalid').style.display = 'block'
        error = true
    }
    if (!error) {
        alert('Your Details has been Saved Succesfully')

        document.getElementById('first-name').value = ''
        document.getElementById('last-name').value = ''
        document.getElementById('email-id').value = ''
        document.getElementById('phone-number').value = ''
        document.getElementById('batch-number').value = 'None'
        document.getElementById('current-module').value = 'None'
        document.getElementById('tnc').checked = false

        document.getElementById('first-name-valid').style.display = 'none'
        document.getElementById('last-name-valid').style.display = 'none'
        document.getElementById('email-valid').style.display = 'none'
        document.getElementById('phone-number-valid').style.display = 'none'
        document.getElementById('batch-number-valid').style.display = 'none'
        document.getElementById('current-module-valid').style.display = 'none'

    }

}