import React, { useState } from 'react';

function PhoneNumberInput() {
  const [value, setValue] = useState('');

  const handleInput = e => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setValue(formattedPhoneNumber);
  };

  return <input onChange={e => handleInput(e)} value={value} />;
}

function formatPhoneNumber(value) {
  if (!value) return value;
  const phoneNumber = value.replace(/[^\d]/g, '');
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength < 4) return phoneNumber;
  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
}

export { PhoneNumberInput };
