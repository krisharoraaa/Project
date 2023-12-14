function validateForm() {
    var emailInput = document.getElementById('email');
    var reEnterEmailInput = document.getElementById('reEnterEmail');
    var phoneInput = document.getElementById('phoneNumber');
    var addressInput = document.getElementById('address');
    var countryInput = document.getElementById('country'); 
    var emailError = document.getElementById('emailError');
    var phoneError = document.getElementById('phoneError');
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phoneRegex = /^\d{10}$/; 
  
    if (!emailRegex.test(emailInput.value)) {
      emailError.innerHTML = 'Invalid email address';
      return; 
    } else {
      emailError.innerHTML = '';
    }
    
    if (emailInput.value !== reEnterEmailInput.value) {
      emailError.innerHTML = 'Emails do not match';
      return; 
    } else {
      emailError.innerHTML = '';
    }
  
    
    if (!phoneRegex.test(phoneInput.value)) {
      phoneError.innerHTML = 'Invalid phone number';
      return; 
    } else {
      phoneError.innerHTML = '';
    }
  
    if (addressInput.value.trim() === '') {
      alert('Please enter your address.');
      return; 
    }
  
    if (countryInput.value.trim() === '') {
      alert('Please enter your country.');
      return; 
    }
  
    alert('Form submitted successfully!');
  }
  
  function checkOtherOption() {
    var howHeardSelect = document.getElementById('howHeard');
    var otherOptionDiv = document.getElementById('otherOption');
    var otherDetailsInput = document.getElementById('otherDetails');
  
    if (howHeardSelect.value === 'other') {
      otherOptionDiv.classList.remove('hidden');
      otherDetailsInput.required = true;
    } else {
      otherOptionDiv.classList.add('hidden');
      otherDetailsInput.required = false;
    }
  }
  
  