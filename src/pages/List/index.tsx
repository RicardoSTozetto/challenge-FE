import React, { useMemo, useState, useEffect} from 'react'



import ContentHeader from '../../components/ContentHeader'
//import SelectInput from '../../components/SelectInput'
import FlightCard from '../../components/FlightCard'
import {Container, Content, Filters} from './style'

import Dados from '../../../src/dados'
import { MenuItemLink } from '../../components/Aside/styles'

import formatDate from '../../utils/formatDate'



interface IRouteParams {
    match: {
        params: {
            type: string;
        }
    }
}

interface IData {
    id: string;
    flight_number: number;
    name: string;
    date_local: string;
    success: string;
}


const List: React.FC<IRouteParams> = ({ match }) => {

    const[data, setData] = useState<IData[]>([]);
 
    const {type} = match.params;
    const title = useMemo(() => {
        
        if(type === 'next'){
            return ({
                text : 'Próximo Lançamento',
                lineColor:'#F7931B'
            });
        }
        else if(type === 'last'){
            return ({
                text : 'Último Lançamento',
                lineColor:'#F7931B'
            });       
        }
        else if(type === 'upcoming'){
            return ({
                text : 'Próximos Lançamentos',
                lineColor:'#F7931B'
            });
        }
        else if(type === 'past'){
            return ({
                text : 'Lançamentos Passados',
                lineColor:'#F7931B'
            });
        }
        else {
            return ({
                text : 'Lançamentos Passados',
                lineColor:'#F7931B'
            });
        }
    },[type]);

    

    useEffect(() => {
       const response =  Dados.map(item => {

            return {
                id: item.id,
                flight_number: item.flight_number,
                name: item.name,
                date_local: formatDate(item.date_local),
                success: item.success == true ? "#008000"   : "#800000"

            }
        })

        
        setData(response);
        

    },[]);

    return(
        <Container>
             <ContentHeader title={title.text} lineColor={title.lineColor}>               
            </ContentHeader> 
            <Content>

             {
                 data.map( item => (
                <FlightCard
                    key = {item.id}
                    flightNumber = {item.flight_number}
                    flightName = {item.name}
                    flightDate = {item.date_local}
                    success = {item.success}                                
                />
                 ))
             }  
                
                
            </Content>
        </Container>
    );
}

export default List;