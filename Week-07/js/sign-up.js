window.onload = function () {
  var nameInput = document.querySelector('input[name="name"]');
  var lastNameInput = document.querySelector('input[name="last-name"]');
  var dniInput = document.querySelector('input[name="dni"]');
  var birthdateInput = document.querySelector('input[name="birthdate"]');
  var phoneInput = document.querySelector('input[name="phone"]');
  var addressInput = document.querySelector('input[name="address"]');
  var localityInput = document.querySelector('input[name="locality"]');
  var postalCodeInput = document.querySelector('input[name="postal-Code"]');
  var emailInput = document.querySelector('input[name="email"]');
  var passwordInput = document.querySelector('input[name="password"]');
  var passwordRepeatInput = document.querySelector(
    'input[name="repeat-password"]'
  );
  var signInButton = document.getElementById('sign-up-button');
  var inputs = document.getElementsByTagName('input');
  var spans = document.getElementsByTagName('span');

  function failure(data) {
    var error = '';
    for (var i = 0; i < data.errors.length; i++) {
      error = error + data.errors[i].param + ': ' + data.errors[i].msg + ' ';
    }
    alert(error);
  }
  nameInput.value = localStorage.getItem('name');
  lastNameInput.value = localStorage.getItem('lastName');
  dniInput.value = localStorage.getItem('dni');
  birthdateInput.value = localStorage.getItem('dob');
  phoneInput.value = localStorage.getItem('phone');
  addressInput.value = localStorage.getItem('address');
  localityInput.value = localStorage.getItem('city');
  postalCodeInput.value = localStorage.getItem('zip');
  emailInput.value = localStorage.getItem('email');
  passwordInput.value = localStorage.getItem('password');
  passwordRepeatInput.value = localStorage.getItem('repassword');

  function validateName() {
    var nameCheck = nameInput.value;
    if (nameCheck.length === 0) {
      return 'Name is empty!';
    } else if (nameCheck.length < 3) {
      return 'The name must contain at least 3 letters!';
    }
    for (var x = 0; x < nameCheck.length; x++) {
      var result = nameCheck.charCodeAt(x);
      if (!(result >= 65 && result <= 90) && !(result >= 97 && result <= 122)) {
        return 'The name must contain only Letters!';
      }
    }
    return true;
  }

  function validateLastName() {
    var lastNameCheck = lastNameInput.value;
    if (lastNameCheck.length === 0) {
      return 'Last Name is empty!';
    } else if (lastNameCheck.length < 3) {
      return 'The Last name must contain at least 3 letters!';
    }
    for (var x = 0; x < lastNameCheck.length; x++) {
      var result = lastNameCheck.charCodeAt(x);
      if (!(result >= 65 && result <= 90) && !(result >= 97 && result <= 122)) {
        return 'The Last name must contain only Letters!';
      }
    }
    return true;
  }

  function validateDni() {
    var dniCheck = dniInput.value;
    if (dniCheck.length === 0) {
      return 'DNI is empty!';
    } else if (dniCheck.length < 8) {
      return 'DNI must contain at least 7 numbers!';
    } else if (dniCheck.substring(0, 1) === '0') {
      return 'DNI should not start with 0 ';
    }
    for (var x = 0; x < dniCheck.length; x++) {
      var result = dniCheck.charCodeAt(x);
      if (!(result >= 48 && result <= 57)) {
        return 'The DNI must contain only numbers!';
      }
    }
    return true;
  }

  function validateBirthDate() {
    var birthdate = birthdateInput.value;
    if (birthdate.length === 0) {
      return 'Birthdate is empty!';
    } else if (birthdate.charAt(2) !== '/' || birthdate.charAt(5) !== '/') {
      return 'Birthdate invalid! Please make sure to put "/" between days,months and years!';
    } else if (birthdate.length !== 10) {
      return 'Birthdate must contain at least 8 numbers! (mm/dd/aaaa)';
    } else if (
      birthdate.substring(0, 2) > 12 ||
      birthdate.substring(3, 5) > 31 ||
      birthdate.substring(6, 10) < 1930 ||
      birthdate.substring(6, 10) > 2005
    ) {
      return 'Birthdate invalid! Please make sure it is a valid date!';
    } else {
      for (var d = 0; d < birthdate.length; d++) {
        var result = birthdate.charCodeAt(d);
        if (!(result >= 47 && result <= 57)) {
          return 'The Birthdate must contain only numbers!';
        }
      }
    }
    return true;
  }

  function validatePhone() {
    var phoneNumber = phoneInput.value;
    if (phoneNumber.length === 0) {
      return 'Phone number is empty!';
    } else if (phoneNumber.length < 10) {
      return 'Phone number must contain at least 10 numbers!';
    }
    for (var x = 0; x < phoneNumber.length; x++) {
      var result = phoneNumber.charCodeAt(x);
      if (!(result >= 48 && result <= 57)) {
        return 'The Phone number must contain only numbers!';
      }
    }
    for (var i = 0; i < phoneNumber.length - 3; i++) {
      if (
        phoneNumber[i] === phoneNumber[i + 1] &&
        phoneNumber[i] === phoneNumber[i + 2] &&
        phoneNumber[i] === phoneNumber[i + 3]
      ) {
        return 'Phone number cannot have four repeated digits!';
      }
    }
    return true;
  }

  function validateAdress() {
    var address = addressInput.value;
    if (address.length === 0) {
      return 'Address is empty!';
    } else if (address.length < 5) {
      return 'Address must contain at least 5 characters!';
    }
    var addressArray = address.split(' ');
    if (addressArray.length < 2) {
      return 'Address must contain at least one espace between! ';
    }
    for (var i = 0; i < address.length; i++) {
      var result = address.charCodeAt(i);
      if (
        !(result >= 65 && result <= 90) &&
        !(result >= 97 && result <= 122) &&
        !(result >= 48 && result <= 57) &&
        !(result === 32)
      ) {
        return 'The address must contain only letters, numbers, and spaces!';
      }
    }
    return true;
  }

  function validateLocality() {
    var locality = localityInput.value;
    if (locality.length === 0) {
      return 'locality is empty!';
    } else if (locality.length < 5) {
      return 'locality must contain at least 5 characters!';
    }

    var letterCount = 0;
    for (var i = 0; i < locality.length; i++) {
      var result = locality.charCodeAt(i);
      if (
        !(
          (result >= 65 && result <= 90) ||
          (result >= 97 && result <= 122) ||
          (result >= 48 && result <= 57)
        )
      ) {
        return 'The locality must contain only letters and numbers!';
      } else if (
        (result >= 65 && result <= 90) ||
        (result >= 97 && result <= 122)
      ) {
        letterCount++;
      }
    }
    if (letterCount < 3) {
      return 'locality must contain at least 3 letters!';
    }

    return true;
  }

  function validatePostalCode() {
    var postalCode = postalCodeInput.value;
    if (postalCode.length === 0) {
      return 'The zip code is empty!';
    } else if (postalCode.length < 4 || postalCode.length > 5) {
      return 'The zip code must have between 4 and 5 numbers!';
    }
    for (var i = 0; i < postalCode.length; i++) {
      var result = postalCode.charCodeAt(i);
      if (!(result >= 48 && result <= 57)) {
        return 'The zip code must contain only numbers!';
      }
    }
    return true;
  }

  function validateEmail() {
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var valid = emailExpression.test(emailInput.value);
    var email = emailInput.value;
    if (email.length === 0) {
      return 'The email is empty!';
    } else if (!valid) {
      ('The email address is not valid.');
    }
    return true;
  }

  function validatePassword() {
    var pass = passwordInput.value;
    if (typeof pass !== 'string' || pass.length < 8) {
      return 'Password should have at least 8 characters!';
    }
    var hasNumber = false;
    var hasLetter = false;
    for (var i = 0; i < pass.length; i++) {
      var result = pass.charCodeAt(i);
      if (
        !(
          (result >= 48 && result <= 57) ||
          (result >= 65 && result <= 90) ||
          (result >= 97 && result <= 122)
        )
      ) {
        return 'The password must contain only letters and numbers.';
      }
      if (result >= 48 && result <= 57) {
        hasNumber = true;
      }
      if ((result >= 65 && result <= 90) || (result >= 97 && result <= 122)) {
        hasLetter = true;
      }
    }
    if (!hasNumber) {
      return 'The password must contain at least one number!';
    }
    if (!hasLetter) {
      return 'The password must contain at least one letter!';
    }
    return true;
  }

  function validateSecondPassword() {
    var pass = passwordInput.value;
    var secondPass = passwordRepeatInput.value;
    if (pass !== secondPass) {
      return 'Passwords do not match!';
    } else if (secondPass.length === 0) {
      return 'password empty!';
    }
    return true;
  }

  nameInput.addEventListener('blur', function () {
    if (!(typeof validateName() === 'boolean')) {
      spans[1].textContent = validateName();
      spans[1].classList.add('spans-valid');
      inputs[0].classList.add('red-border');
    } else {
      inputs[0].classList.remove('red-border');
      inputs[0].classList.add('green-border');
    }
  });

  lastNameInput.addEventListener('blur', function () {
    if (!(typeof validateLastName() === 'boolean')) {
      spans[2].textContent = validateLastName();
      spans[2].classList.add('spans-valid');
      inputs[1].classList.add('red-border');
    } else {
      inputs[1].classList.remove('red-border');
      inputs[1].classList.add('green-border');
    }
  });

  dniInput.addEventListener('blur', function () {
    if (!(typeof validateDni() === 'boolean')) {
      spans[3].textContent = validateDni();
      spans[3].classList.add('spans-valid');
      inputs[2].classList.add('red-border');
    } else {
      inputs[2].classList.remove('red-border');
      inputs[2].classList.add('green-border');
    }
  });

  birthdateInput.addEventListener('blur', function () {
    if (!(typeof validateBirthDate() === 'boolean')) {
      spans[4].textContent = validateBirthDate();
      spans[4].classList.add('spans-valid');
      inputs[3].classList.add('red-border');
    } else {
      inputs[3].classList.remove('red-border');
      inputs[3].classList.add('green-border');
    }
  });

  phoneInput.addEventListener('blur', function () {
    if (!(typeof validatePhone() === 'boolean')) {
      spans[5].textContent = validatePhone();
      spans[5].classList.add('spans-valid');
      inputs[4].classList.add('red-border');
    } else {
      inputs[4].classList.remove('red-border');
      inputs[4].classList.add('green-border');
    }
  });

  addressInput.addEventListener('blur', function () {
    if (!(typeof validateAdress() === 'boolean')) {
      spans[6].textContent = validateAdress();
      spans[6].classList.add('spans-valid');
      inputs[5].classList.add('red-border');
    } else {
      inputs[5].classList.remove('red-border');
      inputs[5].classList.add('green-border');
    }
  });

  localityInput.addEventListener('blur', function () {
    if (!(typeof validateLocality() === 'boolean')) {
      spans[7].textContent = validateLocality();
      spans[7].classList.add('spans-valid');
      inputs[6].classList.add('red-border');
    } else {
      inputs[6].classList.remove('red-border');
      inputs[6].classList.add('green-border');
    }
  });

  postalCodeInput.addEventListener('blur', function () {
    if (!(typeof validatePostalCode() === 'boolean')) {
      spans[8].textContent = validatePostalCode();
      spans[8].classList.add('spans-valid');
      inputs[7].classList.add('red-border');
    } else {
      inputs[7].classList.remove('red-border');
      inputs[7].classList.add('green-border');
    }
  });

  emailInput.addEventListener('blur', function () {
    if (!(typeof validateEmail() === 'boolean')) {
      spans[9].textContent = validateEmail();
      spans[9].classList.add('spans-valid');
      inputs[8].classList.add('red-border');
    } else {
      inputs[8].classList.remove('red-border');
      inputs[8].classList.add('green-border');
    }
  });

  passwordInput.addEventListener('blur', function () {
    if (!(typeof validatePassword() === 'boolean')) {
      spans[10].textContent = validatePassword();
      spans[10].classList.add('spans-valid');
      inputs[9].classList.add('red-border');
    } else {
      inputs[9].classList.remove('red-border');
      inputs[9].classList.add('green-border');
    }
  });

  passwordRepeatInput.addEventListener('blur', function () {
    if (!(typeof validateSecondPassword() === 'boolean')) {
      spans[11].textContent = validateSecondPassword();
      spans[11].classList.add('spans-valid');
      inputs[10].classList.add('red-border');
    } else {
      inputs[10].classList.remove('red-border');
      inputs[10].classList.add('green-border');
    }
  });

  nameInput.addEventListener('focus', function () {
    spans[1].textContent = '';
    spans[1].classList.remove('spans-valid');
    inputs[0].classList.remove('red-border');
    inputs[0].classList.remove('green-border');
  });

  lastNameInput.addEventListener('focus', function () {
    spans[2].textContent = '';
    spans[2].classList.remove('spans-valid');
    inputs[1].classList.remove('red-border');
    inputs[1].classList.remove('green-border');
  });

  dniInput.addEventListener('focus', function () {
    spans[3].textContent = '';
    spans[3].classList.remove('spans-valid');
    inputs[2].classList.remove('red-border');
    inputs[2].classList.remove('green-border');
  });

  birthdateInput.addEventListener('focus', function () {
    spans[4].textContent = '';
    spans[4].classList.remove('spans-valid');
    inputs[3].classList.remove('red-border');
    inputs[3].classList.remove('green-border');
  });

  phoneInput.addEventListener('focus', function () {
    spans[5].textContent = '';
    spans[5].classList.remove('spans-valid');
    inputs[4].classList.remove('red-border');
    inputs[4].classList.remove('green-border');
  });

  addressInput.addEventListener('focus', function () {
    spans[6].textContent = '';
    spans[6].classList.remove('spans-valid');
    inputs[5].classList.remove('red-border');
    inputs[5].classList.remove('green-border');
  });

  localityInput.addEventListener('focus', function () {
    spans[7].textContent = '';
    spans[7].classList.remove('spans-valid');
    inputs[6].classList.remove('red-border');
    inputs[6].classList.remove('green-border');
  });

  postalCodeInput.addEventListener('focus', function () {
    spans[8].textContent = '';
    spans[8].classList.remove('spans-valid');
    inputs[7].classList.remove('red-border');
    inputs[7].classList.remove('green-border');
  });

  emailInput.addEventListener('focus', function () {
    spans[9].textContent = '';
    spans[9].classList.remove('spans-valid');
    inputs[8].classList.remove('red-border');
    inputs[8].classList.remove('green-border');
  });

  passwordInput.addEventListener('focus', function () {
    spans[10].textContent = '';
    spans[10].classList.remove('spans-valid');
    inputs[9].classList.remove('red-border');
    inputs[9].classList.remove('green-border');
  });

  passwordRepeatInput.addEventListener('focus', function () {
    spans[11].textContent = '';
    spans[11].classList.remove('spans-valid');
    inputs[10].classList.remove('red-border');
    inputs[10].classList.remove('green-border');
  });

  signInButton.addEventListener('click', function (event) {
    event.preventDefault();
    var loginOk =
      validateName() &&
      validateLastName() &&
      validateDni() &&
      validateBirthDate() &&
      validatePhone() &&
      validateAdress() &&
      validateLocality() &&
      validatePostalCode() &&
      validateEmail() &&
      validatePassword() &&
      validateSecondPassword();
    var url = 'https://api-rest-server.vercel.app/signup';
    var words1 = `name=${nameInput.value}&lastName=${lastNameInput.value}&dni=${dniInput.value}&dob=${birthdateInput.value}`;
    var words2 = `&phone=${phoneInput.value}&address=${addressInput.value}&city=${localityInput.value}`;
    var words3 = `&zip=${postalCodeInput.value}&email=${emailInput.value}&password=${passwordInput.value}`;
    var words4 = `&repassword=${passwordRepeatInput.value}`;
    if (typeof loginOk === 'boolean') {
      fetch(`${url}?${words1}${words2}${words3}${words4}`)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          if (data.success) {
            alert('Sucessful Register!' + '\n' + data.msg);
            localStorage.setItem('name', nameInput.value);
            localStorage.setItem('lastName', lastNameInput.value);
            localStorage.setItem('dni', dniInput.value);
            localStorage.setItem('dob', birthdateInput.value);
            localStorage.setItem('phone', phoneInput.value);
            localStorage.setItem('address', addressInput.value);
            localStorage.setItem('city', localityInput.value);
            localStorage.setItem('zip', postalCodeInput.value);
            localStorage.setItem('email', emailInput.value);
            localStorage.setItem('password', passwordInput.value);
            localStorage.setItem('repassword', passwordRepeatInput.value);
          } else failure(data);
        })
        .catch(function (error) {
          throw new Error('Register error' + error.msg);
        });
    } else {
      return alert('Please correct the errors in the form ');
    }
  });
};
