import React from 'react';

const Weather = (props) => {
    return (
        <div className="info">
            {
                props.temperature && <p className="info_key">Temperature :
           <span className="info_value">{props.temperature}</span> </p>
            }
            {
                props.city && <p className="info_key">City :
           <span>{props.city}</span> </p>
            }
            {
                props.country && <p className="info_key">Country :
                <span> {props.country}</span></p>
            }
            {
                props.humidity && <p className="info_key">Humidity :
                <span>{props.humidity}</span> </p>
            }
            {
                   props.description && <p className="info_key">Description :
                <span> {props.description}</span></p>
            }
            {
                props.error && <p className="info_key">Error :
                <span> {props.error}</span></p>
            }


        </div>
    )
}

export default Weather;
