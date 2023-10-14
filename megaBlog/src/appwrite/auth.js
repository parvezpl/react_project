import conf from "../conf/conf";
import{ Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    Account;

    constructor(){
        this.client
            .setEndpoint(conf.appweiteUrl)
            .setProject(conf.appweiteProjectId);
        this.Account= new Account(this.client);
    }

    async createAccount({email,password,name}){
        try {
          const userAccount=  await this.Account.create(ID.unique() ,email,password,name);
            if (userAccount) {
               // call anothor method 
                return this.login(email,password);

            } else {
                return userAccount;
                
            }
   
   
        } catch (error) {
            throw error;
        }
    }

    async login ({email, password}){
        try {
          return await this.Account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            await this.Account.get();


        } catch (error) {
            console.log("getcurrent user:", error);
        }
        return null;
    }

    async logout() {
        try {
            await this.Account.deleteSessions();
        } catch (error) {
            console.log("logout:", error);
            
        }
    }


}


const authServie= new AuthService();

export default authServie