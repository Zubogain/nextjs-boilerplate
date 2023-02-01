export const createFormObjTemplate = (
  value = "",
  isValid = false,
  isError = false
) => {
  return { value, isValid, isError };
};

export const createFormObjPhone = (
  value = "",
  id = null,
  code = null,
  isValid = false,
  isError = false
) => {
  return { value, id, code, isValid, isError };
};

export const splitUrl = new RegExp(`^/(.*?)(/|$)`);
export const htmlStripTags = /<(.|\n)*?>/g;
export const htmlTrimRegex = /(<([^>]+)>)/gi;

export const ucFirst = (str) => {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
};

export const _isEmailValid = (email) => {
  const regExp =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regExp.test(email);
};

export const _isPasswordValid = (password) => {
  return password.length >= 8;
};

export const _isPositionValid = (position) => {
  return position.length > 0;
};

export const _isTextValid = (name) => {
  name = name.trim();
  return name.length > 5;
};

export const _isTextSearch = (text) => {
  text = text.trim();
  return text.length >= 1;
};

export const _isNameValid = (name) => {
  return name.length > 0;
};

export const _isSurnameValid = (surname) => {
  return surname.length > 0;
};

export const _isNameGroupValid = (name) => {
  return name.length > 0;
};

export const _isPatronymic = (patronymic) => {
  return patronymic.length > 0;
};

export const _isAdditionalValid = (additional) => {
  return additional.length > 0;
};

export const _isAdress = (surname) => {
  return surname.length > 0;
};

export const _isLinkValid = (link) => {
  const regExp =
    /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm;

  return regExp.test(link);
};

export const _cyrillicAlphabetBan = (val) => {
  const regExp = /^[\u0400-\u04FF]+$/;

  return !regExp.test(val);
};

export const _isLinkLength = (link) => {
  return link.length > 0;
};

export const _searchStrOfSubstr = (string, searchValues) => {
  if (searchValues.length) {
    for (const item of searchValues) {
      if (item && string.toLowerCase().includes(item.toLowerCase())) {
        return true;
      }
    }
  }
  return false;
};

export const _isLinkProtocolValid = (link) => {
  return new RegExp(/^(?:http(s)?:\/\/)/).test(link);
};

export const _isValidResolution = (height) => {
  return height >= 720 && height <= 1440;
};

export const _isLength = (str, length = 50) => {
  str = str.trim();
  return str.length > 0 && str.length <= length;
};

export const _maxWidth = (val, length = 100) => {
  val = val.trim();

  return val.length <= length;
};

export const _number = (number) => {
  const redExp = /^[0-9]+$/;

  return redExp.test(number);
};

export const _price = (price) => {
  return +price > 0;
};

export const _percent = (percent) => {
  return +percent >= 0 && +percent <= 100;
};

export const _validationPhone = (phone) => {
  if (phone !== undefined) {
    let ph = phone.replace(/\D/g, "");
    return ph.length >= 9 && ph.length <= 15;
  }
};

export const _validOrNotValid = (valid) => {
  for (let i = 0; i < valid.length; i++) {
    if (!valid[i]) return false;
  }

  return true;
};

export const _validOrValid = (value) => {
  for (let i = 0; i < value.length; i++) {
    if (!value[i]) return false;
  }

  return true;
};

export const _isValidationOfStrings = (strings) => {
  if (strings) {
    for (let i = 0; i < strings.length; i++) {
      if (strings[i]) {
        if (strings[i].length > 0) return true;
      }
    }
  }
  return false;
};

export const _checkingStringForNull = (string) => {
  return string ? string : "";
};

export const _conditionForValidity = (value, verifable) => {
  return String(value).includes(String(verifable));
};

export const _isValidItemsPhone = (phones) => {
  if (phones.length > 0) {
    for (let i = 0; i < phones.length; i++) {
      if (!phones[i].isValid) {
        return false;
      }
    }
  }

  return true;
};
