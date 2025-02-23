export const isValidatePassword = (str: string): boolean=>{
    return /^[a-zA-Z0-9]+$/.test(str) && str.length > 3;
}

export function isValidateEmail(value: string) {
    // eslint-disable-next-line
    const re = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return re.test(value);
  }

  export function isValidateName(value: string){
    return value.length > 2
  }

  export function isValidNumber(phoneNumber: string){
    const isValid =  /^(\+?\d{1,4}[\s-]?)?\(?\d{1,4}\)?[\s-]?\d{5,}$/;
    return isValid.test(phoneNumber)}

