export const hotelValidation = (formValues) => {
  let isValid = true;
  for (const key in formValues) {
    if (Object.hasOwnProperty.call(formValues, key)) {
      const element = formValues[key];
      switch (key) {
        case "name":
          if (!element) isValid = false;
          break;
        case "address":
          if (!element) isValid = false;
          break;
        case "email":
          if (!element) isValid = false;
          break;
        case "country":
          if (!element) isValid = false;
          break;
        case "latitude":
          if (!element) isValid = false;
          break;
        case "longitude":
          if (!element) isValid = false;
          break;
        default:
          break;
      }
    }
  }
  return isValid;
};
