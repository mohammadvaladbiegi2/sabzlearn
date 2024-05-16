export function validatePhoneNumber(phonNumber) {
  typeof phonNumber === "string" && (phonNumber = +phonNumber);
  const phoneRegex =
    /^(?:(?:(?:\+?|00)(98))|(0))?((?:90|91|92|93|99)[0-9]{8})$/;

  if (phoneRegex.test(phonNumber)) {
    return true;
  }
  return false;
}

export function validatusername(username) {
  typeof username !== "string" && (username = String(username));
  if (username.length >= 3) {
    return true;
  }

  return false;
}

export function validatPassword(password) {
  const passwordRegex =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
  if (passwordRegex.test(password)) {
    return true;
  }

  return false;
}
