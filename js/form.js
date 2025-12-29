document.addEventListener('DOMContentLoaded', function () {
  const submitBtn = document.getElementById('contact-submit');

  const quoteSubmitBtn = document.getElementById('quote-submit');
  if (!quoteSubmitBtn && !submitBtn) return;

  const fullNameInput = document.getElementById('full-name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const pickupAddressInput = document.getElementById('pickup-address');
  const deliveryAddressInput = document.getElementById('delivery-address');
  const moveSizeInput = document.getElementById('move-size');
  const moveDateInput = document.getElementById('move-date');
  const messageInput = document.getElementById('message');

  function updateMoveSizeStyle() {
    if (!moveSizeInput) return;
    moveSizeInput.classList.toggle('has-value', !!moveSizeInput.value);
  }

  if (moveSizeInput) {
    updateMoveSizeStyle();
    moveSizeInput.addEventListener('change', updateMoveSizeStyle);
  }

  function updateDateColor() {
    if (moveDateInput.value) {
      moveDateInput.classList.add('has-value');
    } else {
      moveDateInput.classList.remove('has-value');
    }
  }

  if (moveDateInput) {
    updateDateColor();
    moveDateInput.addEventListener('change', updateDateColor);
    const today = new Date().toISOString().split('T')[0];
    moveDateInput.setAttribute('min', today);
  }

  if (moveDateInput && moveDateInput.showPicker) {
    moveDateInput.addEventListener('click', () => {
      moveDateInput.showPicker();
    });
    moveDateInput.addEventListener('focus', () => {
      moveDateInput.showPicker();
    });
  }

  let iti = null;
  if (phoneInput && window.intlTelInput) {
    iti = window.intlTelInput(phoneInput, {
      initialCountry: 'nz',
      onlyCountries: ['nz', 'au'],
      separateDialCode: true,
      nationalMode: false,
      utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js',
    });

    phoneInput.addEventListener('input', function () {
      this.value = this.value.replace(/[^\d\s()+-]/g, '');
    });
  }

  const serviceCheckboxContainer = document.getElementById('service-checkboxes');
  const serviceCheckboxes = serviceCheckboxContainer
    ? serviceCheckboxContainer.querySelectorAll("input[type='checkbox']")
    : [];

  function showError(msg) {
    alert(msg);
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validatePhone() {
    const raw = phoneInput.value.trim();

    if (iti) {
      return iti.isValidNumber();
    }

    const digits = raw.replace(/\D/g, '');
    return digits.length >= 7;
  }

  function getSelectedServices() {
    const selected = [];
    serviceCheckboxes.forEach((cb) => {
      if (cb.checked) {
        const label = cb.parentElement.querySelector('p');
        if (label) selected.push(label.textContent.trim());
      }
    });
    return selected.toString() || '';
  }

  function clearForm() {
    [
      fullNameInput,
      emailInput,
      phoneInput,
      pickupAddressInput,
      deliveryAddressInput,
      moveSizeInput,
      moveDateInput,
      ,
      messageInput,
    ].forEach((i) => {
      if (i) i.value = '';
    });
    serviceCheckboxes.forEach((cb) => (cb.checked = false));
  }

  let clickFunction = async function (type = 'contact') {
    const name = fullNameInput?.value.trim() || '';
    const email = emailInput?.value.trim() || '';
    const phoneRaw = phoneInput.value.trim();
    const pickup = pickupAddressInput?.value.trim() || '';
    const delivery = deliveryAddressInput?.value.trim() || '';

    const moveSize = moveSizeInput?.value.trim() || '';
    const moveDate = moveDateInput?.value || '';

    const message = messageInput?.value.trim() || '';
    const services = getSelectedServices();

    if (!name) {
      return showError('Please enter your full name.');
    }
    if (!email || !validateEmail(email)) {
      return showError('Please enter a valid email address.');
    }
    if (!phoneRaw) return alert('Please enter your phone number.');
    if (!validatePhone()) return alert('Please enter a valid NZ or AU phone number.');
    if (!pickup) {
      return showError('Please enter a pickup address.');
    }
    if (!delivery) {
      return showError('Please enter a delivery address.');
    }

    if (type === 'quote') {
      if (!moveSize) {
        return showError('Please select the size of move.');
      }
      if (!moveDate) {
        return showError('Please select a date for your move.');
      }
    }

    if (!message) {
      return showError('Please enter a message about the work.');
    }

    if (type === 'contact' && services.length === 0) {
      return showError('Please select at least one service.');
    }

    const fullPhoneNumber = iti ? iti.getNumber() : phoneRaw;

    const pickupInput = document.getElementById('pickup-address');
    const deliveryInput = document.getElementById('delivery-address');

    const pickupText = pickupInput.value.trim();
    const deliveryText = deliveryInput.value.trim();

    const where = (window.orderAddresses && window.orderAddresses.where) || {
      special: pickupText,
      line1: pickupText,
      line2: '',
      district: '',
      suburb: '',
      city: '',
      state: '',
      pinCode: '',
      country: '',
      floor: '',
      isParkingAway: false,
      isElevator: false,
      vehicleAccess: '',
      accessToHome: '',
    };

    const to = (window.orderAddresses && window.orderAddresses.to) || {
      special: deliveryText,
      line1: deliveryText,
      line2: '',
      district: '',
      suburb: '',
      city: '',
      state: '',
      pinCode: '',
      country: '',
      floor: '',
      isParkingAway: false,
      isElevator: false,
      vehicleAccess: '',
      accessToHome: '',
    };

    const body =
      type === 'quote'
        ? {
            name: name,
            email: email,
            phone: fullPhoneNumber,
            sizeDetails: moveSize,
            size: services,
            date: moveDate,
            additionalInfo: message,
            where,
            to,
          }
        : {
            name: name,
            email: email,
            phone: fullPhoneNumber,
            size: services,
            additionalInfo: message,
            where,
            to,
          };

    try {
      if (type === 'quote') {
        quoteSubmitBtn.disabled = true;
        quoteSubmitBtn.textContent = 'Sending...';
      } else {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
      }

      console.log('Form submission body:', JSON.stringify(body));

      const response = await fetch('https://comfortcare.co.nz/cm/api/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-tenant': 'cm',
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        console.error('API error', await response.text());
        showError('Something went wrong while submitting your request. Please try again.');
      } else {
        alert('Thank you! Your request has been submitted. We’ll contact you soon.');
        clearForm();
        window.location.href = '/';
      }
    } catch (err) {
      console.error(err);
      showError('Network error while submitting the form. Please try again.');
    } finally {
      if (type === 'quote') {
        quoteSubmitBtn.disabled = false;
        quoteSubmitBtn.textContent = 'Send Message';
      } else {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
      }
    }
  };

  if (submitBtn) {
    submitBtn.addEventListener('click', () => clickFunction('contact'));
  }
  if (quoteSubmitBtn) {
    quoteSubmitBtn.addEventListener('click', () => clickFunction('quote'));
  }
});
