import React from 'react'

import {Container, Tag} from './styles';


interface IFlightCardProps {
    //cardColor: string;
    flightNumber: number;
    flightName: string;
    flightDate: string;
    success: string;
}


const FlightCard: React.FC<IFlightCardProps> = ({
    flightNumber,
    flightName,
    flightDate,
    success

}) => {
    return(
        <Container>
            <Tag color={success}/>
            <div>
                <span>Missão {flightName}</span>
                <small>Data: {flightDate}</small>
            </div>

            <h3>Voo N˚ {flightNumber}</h3>

            
        </Container>
    );
}

export default FlightCard;