
import {
    ReceiveEventErrorAction,
    ReceiveEventAction,
    eventActionConstants,
    SearchCriteriaUpdatedAction
} from "./actions";
import {TrainingEvent} from "./models/TrainingEvent";
import {EventSearchCriteria} from "./models/EventSearchCriteria";
import IAppAction from "../../store/iappaction";


type TrainingEventsState = {
    events:Array<TrainingEvent>;
    error:string;
    isLoadingEvents:boolean;
    hasLoadingError:boolean;
    searchCriteria:EventSearchCriteria
}

const initialState:TrainingEventsState = {
    events:[],
    error: "",
    isLoadingEvents:true,
    hasLoadingError:false,
    searchCriteria:new EventSearchCriteria()
};

export function eventsReducer(state:TrainingEventsState= initialState, action:IAppAction){
    switch(action.type){
        case (eventActionConstants.REQUEST_EVENTS):
            return {...state, isLoadingEvents:true, hasLoadingError:false };
        case (eventActionConstants.RECEIVE_EVENTS):
            return {...state, events:(action as ReceiveEventAction).events, isLoadingEvents:false, hasLoadingError:false};
        case (eventActionConstants.RECEIVE_EVENTS_ERROR):
            return {...state, error:(action as ReceiveEventErrorAction).error,isLoadingEvents:false, events:[], hasLoadingError:true};
        case (eventActionConstants.SEARCH_CRITERIA_UPDATED):
            return {...state, searchCriteria:(action as SearchCriteriaUpdatedAction).searchCriteria};
        default:
            return state;

    }
}
