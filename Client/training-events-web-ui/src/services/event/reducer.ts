import {IAppAction} from "../../store";
import {ReceiveEventErrorAction, RequestEventAction, ReceiveEventAction, eventActionConstants} from "./actions";
import {TrainingEvent} from "./models/TrainingEvent";


type TrainingEventsState = {
    events:Array<TrainingEvent>;
    error:string;
    isLoadingEvents:boolean;
}

const initialState:TrainingEventsState = {
    events:[],
    error: "",
    isLoadingEvents:true
};

export function eventsReducer(state:TrainingEventsState= initialState, action:IAppAction){
    switch(action.type){
        case (eventActionConstants.REQUEST_EVENTS):
            return {...state, isLoadingEvents:true };
        case (eventActionConstants.RECEIVE_EVENTS):
            return {...state, events:(action as ReceiveEventAction).events, isLoadingEvents:false};
        case (eventActionConstants.RECEIVE_EVENTS_ERROR):
            return {...state, error:(action as ReceiveEventErrorAction).error,isLoadingEvents:false, events:[]};
    }
}
