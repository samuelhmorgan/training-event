export class EventSearchCriteria{

    constructor(public keyword:string="",
                public startDate?:Date,
                public endDate?:Date,
                public southWestCorner?:GeoLocation,
                public NorthEastCorner?:GeoLocation) {
    }

    public static empty():EventSearchCriteria{
        return new EventSearchCriteria();
    }
}

export class GeoLocation
{
    constructor(
        public latitude:number,
        public longitude:number
    ) {}
}
