export const isValidatePassword = (str: string): boolean=>{
    return str.length > 4
}

export function isValidateEmail(value: string) {
    // eslint-disable-next-line
    const re = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return re.test(value);
  }

  export function isValidateName(value: string){
    return value.length > 2
  }