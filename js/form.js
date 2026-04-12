document.addEventListener('DOMContentLoaded', function () {
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

  function normalizePhoneForPayload(number) {
    if (!number) return '';
    let raw = number.trim();

    // remove +64 prefix if present, but do not remove +61
    if (raw.startsWith('+64')) {
      raw = raw.slice(3);
    }

    return raw;
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

    if (prevBtn) prevBtn.style.display = stepIndex === 0 ? 'none' : 'block';

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
        : `Next : ${['Move Date', 'Home Type', 'Additional Service', 'Contact Information'][stepIndex]}`;
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
    const moveDate = document.getElementById('move-date')?.value;
    const homeType = getRadioValue('homeType');
    const bedroom = document.querySelector('#bedroom-count button.selected')?.getAttribute('data-value');
    const aptSuite = document.getElementById('apt-suite')?.value.trim();
    const floorNo = document.getElementById('floor-no')?.value.trim();
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
        if (!moveDate) {
          showError('Please select your move date.');
          return false;
        }
        return true;
      case 3:
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
      case 4:
        return true;
      case 5:
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

        return true;
      default:
        return true;
    }
  }

  async function submitQuote() {
    const movingFrom = document.getElementById('move-from')?.value.trim();
    const movingTo = document.getElementById('move-to')?.value.trim();
    const moveDate = document.getElementById('move-date')?.value;
    const homeType = getRadioValue('homeType');
    const bedroom = document.querySelector('#bedroom-count button.selected')?.getAttribute('data-value');
    const aptSuite = document.getElementById('apt-suite')?.value.trim();
    const floorNo = document.getElementById('floor-no')?.value.trim();
    const services = getCheckboxValues('services');
    const firstName = document.getElementById('first-name')?.value.trim();
    const lastName = document.getElementById('last-name')?.value.trim();
    const email = document.getElementById('quote-email')?.value.trim();
    const phoneInput = document.getElementById('quote-phone');

    const fullName = [firstName, lastName].filter(Boolean).join(' ');
    const fullPhoneNumber = normalizePhoneForPayload(phoneIti ? phoneIti.getNumber() : normalizePhoneInput(phoneInput));

    let additionalInfo = '';

    if (aptSuite.length > 0) {
      additionalInfo += `Apt/Suite: ${aptSuite}`;
    }

    if (floorNo.length > 0) {
      additionalInfo += `, Floor No: ${floorNo}`;
    }

    const body = {
      name: fullName,
      email: email,
      phone: fullPhoneNumber,
      size: bedroom ? `${bedroom} Bedroom` : 'Not specified',
      date: moveDate,
      sizeDetails: homeType,
      special: services,
      additionalInfo,
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

    const moveDate = document.getElementById('move-date');
    const today = new Date().toISOString().split('T')[0];
    if (moveDate) moveDate.setAttribute('min', today);

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

  // ================= CONTACT FORM =================

  const contactFormBtn = document.getElementById('contact-submit');

  if (contactFormBtn && !contactFormBtn.dataset.bound) {
    contactFormBtn.dataset.bound = 'true';
    const contactPhoneIti = initIntlTelInput('phone');

    contactFormBtn.addEventListener('click', async function () {
      const name = document.getElementById('full-name')?.value.trim();
      const email = document.getElementById('email')?.value.trim();
      const phoneInput = document.getElementById('phone');
      const pickup = document.getElementById('move-from')?.value.trim();
      const delivery = document.getElementById('move-to')?.value.trim();
      const message = document.getElementById('message')?.value.trim();
      const service = document.getElementById('service')?.value;

      // ===== VALIDATION =====
      if (!name) {
        return showError('Please enter your full name.');
      }

      if (!email || !validateEmail(email)) {
        return showError('Please enter a valid email.');
      }

      if (!validatePhone(phoneInput, contactPhoneIti)) {
        return showError('Please enter a valid phone number.');
      }

      if (window.location.pathname.includes('products')) {
        if (!delivery) {
          return showError('Please enter address.');
        }

        if (!message) {
          return showError('Please enter your message.');
        }
      } else {
        if (!service || service === 'Select Service') {
          return showError('Please select a service.');
        }

        if (window.location.pathname.includes('contact') || window.location.pathname.includes('about')) {
          if (!pickup) {
            return showError('Please enter pickup address.');
          }

          if (!delivery) {
            return showError('Please enter delivery address.');
          }

          if (!message) {
            return showError('Please enter your message.');
          }
        }
      }

      // ===== BUILD PHONE =====
      const fullPhone = normalizePhoneForPayload(
        contactPhoneIti ? contactPhoneIti.getNumber() : normalizePhoneInput(phoneInput),
      );

      // ===== PAYLOAD =====
      const body = {
        name: name,
        email: email,
        phone: fullPhone,
        sizeDetails: service,
        size: service,
        date: '',
        additionalInfo: message || '',
        where: pickup ? buildAddressObject(pickup) : '',
        to: delivery ? buildAddressObject(delivery) : '',
      };

      // ===== LOADING STATE =====
      contactFormBtn.disabled = true;
      contactFormBtn.innerText = 'Sending...';

      try {
        console.log(body);
        const response = await fetch('https://comfortcare.co.nz/cm/api/create-order', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-tenant': 'cm',
          },
          body: JSON.stringify(body),
        });

        if (!response.ok) {
          showError('Something went wrong. Please try again.');
        } else {
          alert('Thank you! We will contact you shortly.');
          document.getElementById('full-name').value = '';
          document.getElementById('email').value = '';
          document.getElementById('phone').value = '';
          document.getElementById('service').selectedIndex = 0;
          if (window.location.pathname.includes('products')) {
            document.getElementById('move-to').value = '';
            document.getElementById('message').value = '';
          }
          if (window.location.pathname.includes('contact') || window.location.pathname.includes('about')) {
            document.getElementById('move-from').value = '';
            document.getElementById('move-to').value = '';
            document.getElementById('message').value = '';
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
          }
        }
      } catch (err) {
        console.error(err);
        showError('Network error. Please try again.');
      } finally {
        contactFormBtn.disabled = false;
        contactFormBtn.innerText = 'Book Quote';
      }
    });
  }

  // ================= CAREER FORM =================

  document.addEventListener('click', function (e) {
    if (e.target.classList.contains('main-button')) {
      const section = document.getElementById('contact-section');

      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  });

  const cvInput = document.getElementById('cv');
  const fileLabel = document.getElementById('file-label');

  if (cvInput) {
    cvInput.addEventListener('change', function () {
      fileLabel.innerText = this.files.length > 0 ? this.files[0].name : 'Upload your CV';
    });
  }

  const careerBtn = document.getElementById('career-submit');

  if (careerBtn && !careerBtn.dataset.bound) {
    careerBtn.dataset.bound = 'true';

    const careerPhoneIti = initIntlTelInput('phone');

    careerBtn.addEventListener('click', async function () {
      const name = document.getElementById('full-name')?.value.trim();
      const email = document.getElementById('email')?.value.trim();
      const phoneInput = document.getElementById('phone');
      const job = document.getElementById('job-profile')?.value.trim();
      const position = document.getElementById('position')?.value.trim();
      const experience = document.getElementById('experience')?.value.trim();
      const cover = document.getElementById('cover-letter')?.value.trim();
      const fileInput = document.getElementById('cv');

      // ===== VALIDATION =====
      if (!name) return showError('Enter full name');
      if (!email || !validateEmail(email)) return showError('Invalid email');
      if (!validatePhone(phoneInput, careerPhoneIti)) return showError('Invalid phone');
      if (!job) return showError('Enter job profile');

      const file = fileInput.files[0];

      // ===== FILE VALIDATION =====
      if (file) {
        const allowed = [
          'application/pdf',
          'application/msword',
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          'image/jpeg',
        ];

        if (!allowed.includes(file.type)) {
          return showError('Only PDF, DOC, DOCX, JPG allowed');
        }
      }

      const fullPhone = careerPhoneIti ? careerPhoneIti.getNumber() : normalizePhoneInput(phoneInput);

      // ===== FORM DATA (IMPORTANT for file upload) =====
      const formData = new FormData();

      formData.append('name', name);
      formData.append('email', email);
      formData.append('phone', fullPhone);
      formData.append('jobProfile', job);
      formData.append('position', position);
      formData.append('experience', experience);
      formData.append('coverLetter', cover);

      if (file) {
        formData.append('cv', file);
      }

      careerBtn.disabled = true;
      careerBtn.innerText = 'Submitting...';

      try {
        const response = await fetch('https://comfortcare.co.nz/cm/api/carrers', {
          method: 'POST',
          body: formData,
          headers: {
            'x-tenant': 'cm',
          },
        });

        if (!response.ok) {
          showError('Submission failed. Try again.');
        } else {
          alert('Profile submitted successfully!');
          document.getElementById('full-name').value = '';
          document.getElementById('email').value = '';
          document.getElementById('phone').value = '';
          document.getElementById('job-profile').value = '';
          document.getElementById('position').value = '';
          document.getElementById('experience').value = '';
          document.getElementById('cover-letter').value = '';
          document.getElementById('cv').value = '';
          document.getElementById('file-label').innerText = 'Upload your CV';
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        }
      } catch (err) {
        console.error(err);
        showError('Network error');
      } finally {
        careerBtn.disabled = false;
        careerBtn.innerText = 'Submit Profile';
      }
    });
  }
});
