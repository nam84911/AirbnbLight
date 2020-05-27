export class Booking{
    constructor(
        public id:String,
        public placeId:String,
        public userId:String,
        public title:String,
        public guests:number,
        public first:string,
        public last:string,
        public photoURL:string,
        public from:Date,
        public to:Date){}
}