export interface User{
    user_id?:number;
    username: string;
    email: string;
    password: string ;
    registration_date?: Date;
}