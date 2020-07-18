import {IAppAction} from "../../store";
import {TrainingEvent} from "./models/TrainingEvent";

export const eventActionConstants = {
    REQUEST_EVENTS: 'REQUEST_EVENTS',
    RECEIVE_EVENTS: 'REQUEST_EVENTS',
    RECEIVE_EVENTS_ERROR : 'RECEIVE_EVENTS_ERROR'
}

export class RequestEventAction implements IAppAction{
    constructor(public type: typeof eventActionConstants.REQUEST_EVENTS){
    }
}

export class ReceiveEventAction implements IAppAction{
    constructor(public type: typeof eventActionConstants.RECEIVE_EVENTS,
                public events:Array<TrainingEvent>){
    }
}

export class ReceiveEventErrorAction implements IAppAction{
    constructor(public type: typeof eventActionConstants.RECEIVE_EVENTS_ERROR,
                public error: string){
    }
}

export function requestEvents():RequestEventAction{
    return new  RequestEventAction(eventActionConstants.REQUEST_EVENTS);
}


export function receiveEvents(events:Array<TrainingEvent>):ReceiveEventAction{
    return new  ReceiveEventAction(eventActionConstants.RECEIVE_EVENTS,events);
}

export function receiveEventsError(error:string):ReceiveEventErrorAction{
    return new  ReceiveEventErrorAction(eventActionConstants.RECEIVE_EVENTS_ERROR,error);
}



