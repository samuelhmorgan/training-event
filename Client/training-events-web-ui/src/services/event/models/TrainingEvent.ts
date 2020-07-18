export interface TrainingEvent{
    id:string;
    title:string;
    startTimeAsUtc:Date;
    imageUrl:string;
    location:EventLocation;
    availableSeats:Array<AvailableSeat>;
    lastUpdated:Date;
    createdOn:Date;
}

export interface EventLocation{
    city:string;
    state:string;
    country:string;
    location:GeoLocation;
}

export interface AvailableSeat{
    seatId:string;
}


export interface GeoLocation
{
    latitude:number,
    longitude:number
}

