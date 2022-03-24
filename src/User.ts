import faker from 'faker';

export class User{
    name: string;
    //location is not automatically initialized 
    //it is our responsibility to do it in constructor before usage
    location:{
        lat:number;
        lng:number;
    };
    constructor(){
        this.name = faker.name.firstName();
        this.location = {
            lat : parseFloat(faker.address.latitude()),
            lng : parseFloat(faker.address.longitude())
        }
    }
}

