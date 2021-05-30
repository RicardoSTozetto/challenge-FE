import React from 'react'

import {Container, Tag} from './styles';


interface IFlightCardProps {
    //cardColor: string;
    flightNumber: string;
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
                <span>{flightName}</span>
                <small>{flightDate}</small>
            </div>

            <h3>{flightNumber}</h3>

            
        </Container>
    );
}

export default FlightCard;