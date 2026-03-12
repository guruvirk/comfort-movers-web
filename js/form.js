document.addEventListener('DOMContentLoaded', function () {
  const submitBtn = document.getElementById('contact-submit');
  const quoteWizard = document.querySelector('.quote-step-form');

  let phoneIti = null;

  function showError(msg) {
    alert(msg);
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function normalizePhoneInput(inputEl) {
    if (!inputEl) return '';
    return inputEl.value.trim();
  }

  function validatePhone(phoneInput, itiInstance) {
    const raw = normalizePhoneInput(phoneInput);
    if (!raw) return false;

    if (itiInstance) {
      return itiInstance.isValidNumber();
    }

    const digits = raw.replace(/\D/g, '');
    return digits.length >= 7;
  }

  function buildAddressObject(addressText) {
    const trimmed = (addressText || '').trim();
    return {
      special: trimmed,
      line1: trimmed,
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
  }

  function getRadioValue(name) {
    const input = document.querySelector(`input[name="${name}"]:checked`);
    return input ? input.value : '';
  }

  function getCheckboxValues(name) {
    const checked = Array.from(document.querySelectorAll(`input[name="${name}"]:checked`));
    return checked.map((c) => c.value);
  }

  function attachRadioCardHandlers() {
    const radios = document.querySelectorAll('.option-card input[type="radio"]');
    radios.forEach((radio) => {
      radio.addEventListener('change', () => {
        const groupName = radio.name;
        const siblings = document.querySelectorAll(`.option-card input[name="${groupName}"]`);
        siblings.forEach((sibling) => {
          const parent = sibling.closest('.option-card');
          if (parent) parent.classList.toggle('selected', sibling.checked);
        });
      });
    });
  }

  function attachCheckboxCardHandlers() {
    const checkboxes = document.querySelectorAll('.option-card input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', () => {
        const parent = checkbox.closest('.option-card');
        if (parent) parent.classList.toggle('selected', checkbox.checked);
      });
    });
  }

  function setupBedroomCount() {
    const buttons = Array.from(document.querySelectorAll('#bedroom-count button'));
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        buttons.forEach((b) => b.classList.remove('selected'));
        button.classList.add('selected');
      });
    });
  }

  function setupHomeTypeToggle() {
    const homeTypeRadios = document.querySelectorAll('input[name="homeType"]');
    const apartmentDetails = document.getElementById('apartment-details');

    const toggle = () => {
      const homeType = getRadioValue('homeType');
      if (homeType === 'Apartment') {
        apartmentDetails.classList.add('active');
      } else {
        apartmentDetails.classList.remove('active');
      }
    };

    homeTypeRadios.forEach((radio) => radio.addEventListener('change', toggle));
    toggle();
  }

  function initIntlTelInput(inputId) {
    const input = document.getElementById(inputId);
    if (!input || !window.intlTelInput) return null;

    const iti = window.intlTelInput(input, {
      initialCountry: 'nz',
      onlyCountries: ['nz', 'au'],
      separateDialCode: true,
      nationalMode: false,
      showFlags: false,
      utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js',
    });

    input.addEventListener('input', function () {
      this.value = this.value.replace(/[^\d\s()+-]/g, '');
    });

    return iti;
  }

  function showStep(stepIndex) {
    const steps = Array.from(document.querySelectorAll('.quote-step'));
    const progress = Array.from(document.querySelectorAll('.quote-progress-segment'));
    const total = steps.length;
    if (stepIndex < 0 || stepIndex >= total) return;

    steps.forEach((step, index) => {
      step.classList.toggle('active', index === stepIndex);
    });

    progress.forEach((seg, index) => {
      seg.classList.toggle('active', index === stepIndex);
      seg.classList.toggle('completed', index < stepIndex);
    });

    const prevBtn = document.getElementById('prev-step');
    const nextBtn = document.getElementById('next-step');

    if (prevBtn) prevBtn.style.visibility = stepIndex === 0 ? 'hidden' : 'visible';

    if (nextBtn) {
      const isLast = stepIndex === total - 1;
      const communicsationConsent = document.getElementById('communicsation-consent');
      const communicsationConsentMobile = document.getElementById('communicsation-consent-mobile');
      if (isLast) {
        communicsationConsent.classList.add('active');
        communicsationConsentMobile.classList.add('active');
      } else {
        communicsationConsent.classList.remove('active');
        communicsationConsentMobile.classList.remove('active');
      }
      if (quoteWizard && typeof quoteWizard.scrollIntoView === 'function') {
        quoteWizard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      nextBtn.textContent = isLast
        ? 'Get My Quote'
        : `Next : ${['Move Date', 'Experience', 'Home Type', 'Move Info', 'Additional Service', 'Contact Information'][stepIndex]}`;
    }

    currentStepIndex = stepIndex;
    try {
      localStorage.setItem('quoteStepIndex', String(stepIndex));
    } catch (e) {}
  }

  function validateCurrentStep() {
    const step = currentStepIndex + 1;

    const movingFrom = document.getElementById('move-from')?.value.trim();
    const movingTo = document.getElementById('move-to')?.value.trim();
    const earliest = document.getElementById('date-earliest')?.value;
    const latest = document.getElementById('date-latest')?.value;
    const experience = getRadioValue('experience');
    const homeType = getRadioValue('homeType');
    const bedroom = document.querySelector('#bedroom-count button.selected')?.getAttribute('data-value');
    const aptSuite = document.getElementById('apt-suite')?.value.trim();
    const floorNo = document.getElementById('floor-no')?.value.trim();
    const moveSize = getRadioValue('moveSize');
    const services = getCheckboxValues('services');
    const firstName = document.getElementById('first-name')?.value.trim();
    const lastName = document.getElementById('last-name')?.value.trim();
    const email = document.getElementById('quote-email')?.value.trim();
    const phoneInput = document.getElementById('quote-phone');

    switch (step) {
      case 1:
        if (!movingFrom) {
          showError('Please enter your moving from address.');
          return false;
        }
        if (!movingTo) {
          showError('Please enter your moving to address.');
          return false;
        }
        return true;
      case 2:
        if (!earliest) {
          showError('Please select your earliest move date.');
          return false;
        }
        if (!latest) {
          showError('Please select your latest move date.');
          return false;
        }
        if (earliest > latest) {
          showError('Earliest date cannot be after latest date.');
          return false;
        }
        return true;
      case 3:
        if (!experience) {
          showError('Please select your moving experience.');
          return false;
        }
        return true;
      case 4:
        if (!homeType) {
          showError('Please select the type of home.');
          return false;
        }
        if (!bedroom) {
          showError('Please select how many bedrooms.');
          return false;
        }
        if (homeType === 'Apartment' && !aptSuite) {
          showError('Please enter your apartment suite.');
          return false;
        }
        if (homeType === 'Apartment' && !floorNo) {
          showError('Please enter your apartment floor number.');
          return false;
        }
        return true;
      case 5:
        if (!moveSize) {
          showError('Please select how much stuff is moving.');
          return false;
        }
        return true;
      case 6:
        return true;
      case 7:
        if (!firstName) {
          showError('Please enter your first name.');
          return false;
        }
        if (!lastName) {
          showError('Please enter your last name.');
          return false;
        }
        if (!email || !validateEmail(email)) {
          showError('Please enter a valid email address.');
          return false;
        }
        if (!validatePhone(phoneInput, phoneIti)) {
          showError('Please enter a valid phone number.');
          return false;
        }

        const consentChecked = !!document.querySelector('input[name="consent"]:checked');
        if (!consentChecked) {
          showError('Please agree to receive communications from Comfort Movers.');
          return false;
        }

        return false;
      default:
        return true;
    }
  }

  async function submitQuote() {
    const movingFrom = document.getElementById('move-from')?.value.trim();
    const movingTo = document.getElementById('move-to')?.value.trim();
    const earliest = document.getElementById('date-earliest')?.value;
    const latest = document.getElementById('date-latest')?.value;
    const experience = getRadioValue('experience');
    const homeType = getRadioValue('homeType');
    const bedroom = document.querySelector('#bedroom-count button.selected')?.getAttribute('data-value');
    const aptSuite = document.getElementById('apt-suite')?.value.trim();
    const floorNo = document.getElementById('floor-no')?.value.trim();
    const moveSize = getRadioValue('moveSize');
    const services = getCheckboxValues('services');
    const servicesText = services.join(', ');
    const firstName = document.getElementById('first-name')?.value.trim();
    const lastName = document.getElementById('last-name')?.value.trim();
    const email = document.getElementById('quote-email')?.value.trim();
    const phoneInput = document.getElementById('quote-phone');

    const fullName = [firstName, lastName].filter(Boolean).join(' ');
    const fullPhoneNumber = phoneIti ? phoneIti.getNumber() : normalizePhoneInput(phoneInput);

    const body = {
      name: fullName,
      email: email,
      phone: fullPhoneNumber,
      sizeDetails: moveSize,
      size: servicesText,
      date: earliest,
      additionalInfo: JSON.stringify({
        movingFrom,
        movingTo,
        earliest,
        latest,
        experience,
        homeType,
        bedroom,
        aptSuite,
        floorNo,
      }),
      where: buildAddressObject(movingFrom),
      to: buildAddressObject(movingTo),
    };

    const nextBtn = document.getElementById('next-step');
    if (nextBtn) {
      nextBtn.disabled = true;
      nextBtn.textContent = 'Sending...';
    }

    try {
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
        try {
          localStorage.removeItem('quoteStepIndex');
        } catch (e) {}
        window.location.href = '/';
      }
    } catch (err) {
      console.error(err);
      showError('Network error while submitting the form. Please try again.');
    } finally {
      if (nextBtn) {
        nextBtn.disabled = false;
        nextBtn.textContent = 'Get My Quote';
      }
    }
  }

  if (quoteWizard) {
    attachRadioCardHandlers();
    attachCheckboxCardHandlers();
    setupBedroomCount();
    setupHomeTypeToggle();

    phoneIti = initIntlTelInput('quote-phone');

    const dateEarliest = document.getElementById('date-earliest');
    const dateLatest = document.getElementById('date-latest');
    const today = new Date().toISOString().split('T')[0];
    if (dateEarliest) dateEarliest.setAttribute('min', today);
    if (dateLatest) dateLatest.setAttribute('min', today);

    window.goToPrevStep = () => {
      const steps = Array.from(document.querySelectorAll('.quote-step'));
      const activeIndex = steps.findIndex((step) => step.classList.contains('active'));
      const currentIndex = activeIndex === -1 ? 0 : activeIndex;
      showStep(currentIndex - 1);
    };

    window.goToNextStep = async () => {
      if (!validateCurrentStep()) return;
      const steps = Array.from(document.querySelectorAll('.quote-step'));
      const activeIndex = steps.findIndex((step) => step.classList.contains('active'));
      const currentIndex = activeIndex === -1 ? 0 : activeIndex;
      const totalSteps = steps.length;

      if (currentIndex === totalSteps - 1) {
        await submitQuote();
      } else {
        showStep(currentIndex + 1);
      }
    };

    let currentStepIndex = 0;
    try {
      localStorage.removeItem('quoteStepIndex');
    } catch (e) {}

    showStep(currentStepIndex);
  }

  const quoteSubmitBtn = document.getElementById('quote-submit');
  if (submitBtn) {
    submitBtn.addEventListener('click', () => clickFunction('contact'));
  }
  if (quoteSubmitBtn) {
    quoteSubmitBtn.addEventListener('click', () => clickFunction('quote'));
  }
});
