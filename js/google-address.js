window.orderAddresses = {
  where: null,
  to: null,
};

function getFormattedAddress(place) {
  const location = {
    formatted_address: '',
    locality: '',
    street_number: '',
    admin_area_l1: '',
    route: '',
    country: '',
    sublocality: '',
    postal_code: '',
  };

  if (!place || !place.address_components) {
    return location;
  }

  location.formatted_address = place.formatted_address || place.name || '';

  place.address_components.forEach((item) => {
    const types = item.types || [];

    if (types.indexOf('locality') > -1) {
      location.locality = item.long_name;
    } else if (types.indexOf('administrative_area_level_1') > -1) {
      location.admin_area_l1 = item.short_name;
    } else if (types.indexOf('street_number') > -1) {
      location.street_number = item.short_name;
    } else if (types.indexOf('route') > -1) {
      location.route = item.long_name;
    } else if (types.indexOf('country') > -1) {
      location.country = item.long_name;
    } else if (types.indexOf('postal_code') > -1) {
      location.postal_code = item.short_name;
    } else if (types.indexOf('sublocality') > -1) {
      location.sublocality = item.short_name;
    }
  });

  return location;
}

function attachAutocomplete(inputId, type) {
  const input = document.getElementById(inputId);
  if (!input || !window.google || !google.maps || !google.maps.places) return;

  const options = {
    componentRestrictions: { country: 'nz' },
    fields: ['address_components', 'geometry', 'icon', 'name', 'formatted_address'],
  };

  const autocomplete = new google.maps.places.Autocomplete(input, options);

  google.maps.event.addListener(autocomplete, 'place_changed', () => {
    const place = autocomplete.getPlace();
    const addr = getFormattedAddress(place);

    if (addr.formatted_address) {
      input.value = addr.formatted_address;
    }

    const mapped = {
      special: addr.formatted_address,
      line1: addr.street_number,
      line2: addr.route,
      suburb: addr.sublocality,
      country: addr.country,
      state: addr.admin_area_l1,
      city: addr.locality,
      pinCode: addr.postal_code,
      district: '',
      floor: '',
      isParkingAway: false,
      isElevator: false,
      vehicleAccess: '',
      accessToHome: '',
    };

    if (type === 'where') {
      window.orderAddresses.where = mapped;
    } else if (type === 'to') {
      window.orderAddresses.to = mapped;
    }
  });
}

function initAddressAutocomplete() {
  attachAutocomplete('pickup-address', 'where');
  attachAutocomplete('delivery-address', 'to');
}
