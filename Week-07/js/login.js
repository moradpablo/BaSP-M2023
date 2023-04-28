var userName = document.querySelector('input[name="email"]');
var password = document.querySelector('input[name="password"]');
var loginButton = document.getElementById('login-button');

function validateEmail() {
  var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  var valid = emailExpression.test(userName.value);
  if (!valid) {
    alert('The email address is not valid.');
  }
  return valid;
}

function validatePassword() {
  var pass = password.value;
  if (typeof pass !== 'string' || pass.length < 8) {
    return alert('Password should have at least 8 characters!');
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
      return alert('The password must contain only letters and numbers.');
    }
    if (result >= 48 && result <= 57) {
      hasNumber = true;
    }
    if ((result >= 65 && result <= 90) || (result >= 97 && result <= 122)) {
      hasLetter = true;
    }
  }
  if (!hasNumber) {
    return alert('The password must contain at least one number!');
  }
  if (!hasLetter) {
    return alert('The password must contain at least one letter!');
  }
  return pass;
}

userName.addEventListener('blur', function blurEmail() {
  var div = document.getElementsByClassName('forms-input')[0];
  var p = document.createElement('p');
  var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  var valid = emailExpression.test(userName.value);
  div.appendChild(p);
  p.classList.add('input-p');
  userName.classList.add('red-border');
  if (!valid) {
    p.textContent = 'The email address is not valid.';
  } else {
    userName.classList.remove('red-border');
    userName.classList.add('green-border');
  }
});

password.addEventListener('blur', function blurPassword() {
  var div = document.getElementsByClassName('forms-input')[1];
  var p = document.createElement('p');
  var pass = password.value;
  div.appendChild(p);
  p.classList.add('input-p');
  password.classList.add('red-border');
  if (pass.length === 0) {
    p.textContent = 'The password is empty!';
  } else if (pass.length < 8) {
    p.textContent = 'Password should have at least 8 characters!';
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
      p.textContent = 'The password must contain only letters and numbers.';
    }
    if (result >= 48 && result <= 57) {
      hasNumber = true;
    }
    if ((result >= 65 && result <= 90) || (result >= 97 && result <= 122)) {
      hasLetter = true;
    }
  }
  if (!hasNumber) {
    p.textContent = 'The password must contain at least one number!';
  } else if (!hasLetter) {
    p.textContent = 'The password must contain at least one letter!';
  } else {
    password.classList.remove('red-border');
    password.classList.add('green-border');
  }
});

userName.addEventListener('focus', function focusEmail() {
  var div = document.getElementsByClassName('forms-input');
  var p = document.getElementsByClassName('input-p');
  if (!(p[0] === undefined)) {
    p[0].remove();
    userName.classList.remove('red-border');
  }
});

password.addEventListener('focus', function focusPass() {
  var div = document.getElementsByClassName('forms-input');
  var p = document.getElementsByClassName('input-p');
  if (!(p[0] === undefined)) {
    p[0].remove();
    password.classList.remove('red-border');
  }
});

loginButton.addEventListener('click', function (event) {
  var url = 'https://api-rest-server.vercel.app/login';
  event.preventDefault();
  var loginOk = validateEmail() && validatePassword();
  if (loginOk) {
    email = userName.value;
    pass = password.value;
    fetch(`${url}?email=${email}&password=${pass}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (data.sucess) {
          alert('Sucessful Login' + '\n' + data.msg);
        } else {
          alert(data.msg);
        }
        console.log(data);
      })
      .catch(function (error) {
        throw new Error('Login error' + error);
      });
  } else {
    return alert('Please correct the errors in the form ');
  }
});
