export class User{
    constructor(public id:string,
                public email:string,
                private _token:string,
                private expiration:Date){}
    get token(){
        if(!this.expiration||this.expiration<new Date()){
            return null
        }
        return this._token
    }
}