import { PlaceLocation } from './placeLocation.model';

export class Place{
    constructor(
                public id:string,
                public description:string,
                public photoURL:string,
                public title:string,
                public price:number,
                public from:Date,
                public to:Date,
                public userId:String,
                public location:PlaceLocation
                ){}
}