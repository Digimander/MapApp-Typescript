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
}