
 export interface IUser {
     email: string;
     name?: string;
    }
  
  export interface IRegisterUser extends IUser {
    password: string;
  }