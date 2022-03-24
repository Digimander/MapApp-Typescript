//If other classes want to be mappable with addMarker method, they need to derive from this 
//interface
interface Mappable{
    location:{
        lat:number;
        lng:number
    };
}

export class CustomMap{
    private googleMap: google.maps.Map; //our map will be instance of google map but private,we want to expose only part of it

    constructor(element:string,zoom:number,lat:number,lng:number){
        this.googleMap = new google.maps.Map(document.getElementById(element),{
            zoom:zoom,
            center:{
                lat:lat,
                lng:lng
            }
        });
    }
    addMarker(mappable:Mappable){
        new google.maps.Marker({
            map:this.googleMap,
            position:{
                lat:mappable.location.lat,
                lng:mappable.location.lng
            }
        })
    }
}