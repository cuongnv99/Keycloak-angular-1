export function blockSpecialChars() {
    
}

export function inputValidPhone(str: string) {
    var regex = new RegExp("^[0-9]+$");
    if (!(regex.test(str))) {
      return false;
    }
}