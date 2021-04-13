import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';



export default function Map(){
    const [viewport, setVeiwport] = useState({
        latitude: 20.963979324261572,
        longitude:  -89.58623678381008,
        width: "40vw",
        height: "50vh",
        zoom: 10,

    })

    return(
        <div className="col float-left mt-3 mb-5">
            <ReactMapGL {...viewport}
            mapboxApiAccessToken={"pk.eyJ1Ijoic2xpbWJpZ2d5IiwiYSI6ImNrbXFvcjd2azAwMDgybm50eXJocWR4cWsifQ.VzNz24swKwxCgnHWDoZGsw"}
            mapStyle="mapbox://styles/slimbiggy/ckmqoy7hp1bc217msoa7vcvso"
            onViewportChange={(viewport) => {setVeiwport(viewport)}}
            >
                <Marker latitude={20.9655141555656} longitude={-89.61908340213543}> 
                    <i class="fa fa-building" aria-hidden="true"></i>
                    <h4>The City Museum</h4>
                </Marker>
            </ReactMapGL>
        </div>
    )
} 