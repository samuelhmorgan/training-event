import {TrainingEvent} from "../../services/event/models/TrainingEvent";
import moment from "moment";

const events = [
    {
        id:"100001",
        title: "Place 1",
        description:"A good training example",
        startTimeAsUtc: moment.utc("2018-07-22T02:30:00.000Z").toDate(),
        imageUrl: "https://www.wiseowl.co.uk/images/fl_images/classroom.png",
        location: {
            city: "Brisbane",
            state: "Queensland",
            country: "Australia",
            location:{
                latitude:1111111,
                longitude:2222222
            }
        },
        availableSeats:[],
        lastUpdated: moment().toDate(),
        createdOn:moment().subtract(1,'month').toDate()
    },
    {
        id:"100002",
        title: "Place 2",
        description:"A good training example",
        startTimeAsUtc: moment.utc("2018-07-24T02:30:00.000Z").toDate(),
        imageUrl: "https://www.wiseowl.co.uk/images/fl_images/classroom.png",
        location: {
            city: "Cairns",
            state: "Queensland",
            country: "Australia",
            location:{
                latitude:1111111,
                longitude:2222222
            }
        },
        availableSeats: [
            {
                seatId: "W25"
            },
            {
                seatId: "B29"
            }
        ],
        lastUpdated: moment().toDate(),
        createdOn:moment().subtract(1,'month').toDate()
    },
    {
        id:"100003",
        title: "Place 3",
        description:"A good training example",
        startTimeAsUtc: moment.utc("2018-07-24T02:30:00.000Z").toDate(),
        imageUrl: "https://www.wiseowl.co.uk/images/fl_images/classroom.png",
        location: {
            city: "Gold Coast",
            state: "Queensland",
            country: "Australia",
            location:{
                latitude:1111111,
                longitude:2222222
            }
        },
        availableSeats: [
            {
                seatId: "W25"
            },
            {
                seatId: "B29"
            }
        ],
        lastUpdated: moment().toDate(),
        createdOn:moment().subtract(1,'month').toDate()
    },
    {
        id:"100004",
        title: "Place 4",
        description:"A good training example",
        startTimeAsUtc: moment.utc("2018-07-24T02:30:00.000Z").toDate(),
        imageUrl: "https://www.wiseowl.co.uk/images/fl_images/classroom.png",
        location: {
            city: "Gold Coast",
            state: "Queensland",
            country: "Australia",
            location:{
                latitude:1111111,
                longitude:2222222
            }
        },
        availableSeats: [
            {
                seatId: "W25"
            },
            {
                seatId: "B29"
            }
        ],
        lastUpdated: moment().toDate(),
        createdOn:moment().subtract(1,'month').toDate()
    },
    {
        id:"100005",
        title: "Place 5",
        description:"A good training example",
        startTimeAsUtc: moment.utc("2018-07-24T02:30:00.000Z").toDate(),
        imageUrl: "https://www.wiseowl.co.uk/images/fl_images/classroom.png",
        location: {
            city: "Gold Coast",
            state: "Queensland",
            country: "Australia",
            location:{
                latitude:1111111,
                longitude:2222222
            }
        },
        availableSeats: [
            {
                seatId: "W25"
            },
            {
                seatId: "B29"
            }
        ],
        lastUpdated: moment().toDate(),
        createdOn:moment().subtract(1,'month').toDate()
    },
    {
        id:"100006",
        title: "Place 6",
        description:"A good training example",
        startTimeAsUtc: moment.utc("2018-07-24T02:30:00.000Z").toDate(),
        imageUrl: "https://www.wiseowl.co.uk/images/fl_images/classroom.png",
        location: {
            city: "Gold Coast",
            state: "Queensland",
            country: "Australia",
            location:{
                latitude:1111111,
                longitude:2222222
            }
        },
        availableSeats: [
            {
                seatId: "W25"
            },
            {
                seatId: "B29"
            }
        ],
        lastUpdated: moment().toDate(),
        createdOn:moment().subtract(1,'month').toDate()
    },
    {
        id:"100007",
        title: "Place 7",
        description:"A good training example",
        startTimeAsUtc: moment.utc("2018-07-24T02:30:00.000Z").toDate(),
        imageUrl: "https://www.wiseowl.co.uk/images/fl_images/classroom.png",
        location: {
            city: "Gold Coast",
            state: "Queensland",
            country: "Australia",
            location:{
                latitude:1111111,
                longitude:2222222
            }
        },
        availableSeats: [
            {
                seatId: "W25"
            },
            {
                seatId: "B29"
            }
        ],
        lastUpdated: moment().toDate(),
        createdOn:moment().subtract(1,'month').toDate()
    },
    {
        id:"100008",
        title: "Place 8",
        description:"A good training example",
        startTimeAsUtc: moment.utc("2018-07-24T02:30:00.000Z").toDate(),
        imageUrl: "https://www.wiseowl.co.uk/images/fl_images/classroom.png",
        location: {
            city: "Gold Coast",
            state: "Queensland",
            country: "Australia",
            location:{
                latitude:1111111,
                longitude:2222222
            }
        },
        availableSeats: [
            {
                seatId: "W25"
            },
            {
                seatId: "B29"
            }
        ],
        lastUpdated: moment().toDate(),
        createdOn:moment().subtract(1,'month').toDate()
    },
];

export default events;
