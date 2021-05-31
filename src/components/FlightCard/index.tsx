import React from 'react'

import {Container, Tag} from './styles';

//import {Route} from 'react-router-dom'






interface IFlightCardProps {
    //cardColor: string;
    flightNumber: number;
    flightName: string;
    flightDate: string;
    success: string;
    wikipedia: string;
}


const FlightCard: React.FC<IFlightCardProps> = ({
    flightNumber,
    flightName,
    flightDate,
    success,
    wikipedia,

}) => {

    function handleClick(){

        window.open(wikipedia, "CNN_WindowName");
    
    
    
    }
    return(
        <Container onClick={handleClick}>
           
            <Tag color={success}/>
            <div>
                <span>Missão {flightName}</span>
                <small>Dia {flightDate}</small>
            </div>

            <h3>Voo N˚ {flightNumber}</h3>

           
        </Container>
    );
}

export default FlightCard;