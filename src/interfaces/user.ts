
 export interface IUser {
     email: string;
     name?: string;
     avatar?: string
    }
  
  export interface IRegisterUser extends IUser {
    password: string;
  }