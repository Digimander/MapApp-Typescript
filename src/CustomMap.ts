//If other classes want to be mappable with addMarker method, they need to derive from this 
//interface
export interface Mappable{
    location:{
        lat:number;
        lng:number
    };
    getText():string;
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
        const marker = new google.maps.Marker({
            map:this.googleMap,
            position:{
                lat:mappable.location.lat,
                lng:mappable.location.lng
            }
        });

        marker.addListener('click',()=>{
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.getText()
            })
            infoWindow.open(this.googleMap,marker);
        })
    }
}