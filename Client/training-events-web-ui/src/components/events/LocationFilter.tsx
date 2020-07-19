import React, {Component, useState} from 'react';
import {TrainingEvent} from "../../services/event/models/TrainingEvent";
import {GoogleMap, LoadScript} from "@react-google-maps/api";

type LocationLatLon={
    lat:number;
    lng:number;
}

type LocationFilterProps = {
    events : Array<TrainingEvent>;
    center: LocationLatLon,
    zoom: number
}

const LocationComponent = ({ text }:any) => <div>{text}</div>;

const containerStyle = {
    width: '400px',
    height: '400px'
};

const LocationFilter: React.FC<LocationFilterProps> = (props:LocationFilterProps) =>{

    const [map, setMap] = useState(null)

    const onLoad = React.useCallback(function callback(map) {
       // const bounds = new window.google.maps.LatLngBounds();
        //map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    const {events} = props;

    return (
        <React.Fragment>
            <div style={{height: '100vh', width: '100%'}}>
                <LoadScript
                    googleMapsApiKey=''
                >
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={props.center}
                        zoom={props.zoom}
                        onLoad={onLoad}
                        onUnmount={onUnmount}
                    >
                        { /* Child components, such as markers, info windows, etc. */ }
                        <></>
                    </GoogleMap>
                </LoadScript>
            </div>

        </React.Fragment>
    );

}


export default LocationFilter;
