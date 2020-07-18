import {TrainingEvent} from "./models/TrainingEvent";
import {EventSearchCriteria} from "./models/EventSearchCriteria";
import IAppAction from "../../store/iappaction";

export const eventActionConstants = {
    REQUEST_EVENTS: 'REQUEST_EVENTS',
    RECEIVE_EVENTS: 'REQUEST_EVENTS',
    RECEIVE_EVENTS_ERROR : 'RECEIVE_EVENTS_ERROR',
    SEARCH_CRITERIA_UPDATED: 'SEARCH_CRITERIA_UPDATED'
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

export class SearchCriteriaUpdatedAction implements IAppAction{
    constructor(public type: typeof eventActionConstants.SEARCH_CRITERIA_UPDATED,
                public searchCriteria:EventSearchCriteria) {
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

export function searchCriteriaUpdated(searchCriteria:EventSearchCriteria){
    return new SearchCriteriaUpdatedAction(eventActionConstants.SEARCH_CRITERIA_UPDATED,searchCriteria);
}


