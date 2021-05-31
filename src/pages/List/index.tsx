import React, { useMemo, useState, useEffect} from 'react'

import { Link } from 'react-router-dom';

import ContentHeader from '../../components/ContentHeader'
//import SelectInput from '../../components/SelectInput'
import FlightCard from '../../components/FlightCard'
import {Container, Content} from './style'

//import Dados from '../../../src/dados'
//import { MenuItemLink } from '../../components/Aside/styles'

import formatDate from '../../utils/formatDate'

import Api from '../../utils/api'





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
    date_utc: string;
    success: boolean;
    links: {
        wikipedia: string;
    }
}

interface IData1 {
    id: string;
    flight_number: number;
    name: string;
    date_utc: string;
    success: string;
    wikipedia: string;
}


const List: React.FC<IRouteParams> = ({ match }) => {

   
    
    const[data, setData] = useState<IData1[]>([]);

    const [items, setItems] = useState<IData[]>([]);
 
    const {type} = match.params;
    const title = useMemo(() => {
        
        if(type === 'next'){
            return ({
                text : 'Próximo Lançamento',
                lineColor:'#F7931B',
                url: '/next'
            });
        }
        else if(type === 'last'){
            return ({
                text : 'Último Lançamento',
                lineColor:'#F7931B',
                url: '/latest'
            });       
        }
        else if(type === 'upcoming'){
            return ({
                text : 'Próximos Lançamentos',
                lineColor:'#F7931B',
                url: '/upcoming'
            });
        }
        else if(type === 'past'){
            return ({
                text : 'Lançamentos Passados',
                lineColor:'#F7931B',
                url: '/past'
            });
        }
        else {
            return ({
                text : 'Lançamentos Passados',
                lineColor:'#F7931B',
                url: '/past'
            });
        }
    },[type]);

    
    // com Async Await
    useEffect(() => {
        async function getItems() {
        try {
            const {data} = await Api.get(title.url);
            if(Array.isArray(data)){
                console.log(data);
                await setItems(data); 
            }
            else {
                var Arr = [];
                Arr.push(data);
                await setItems(Arr); 
                await console.log(Arr);
            }
               
    
            
           
        } catch (error) {
            alert("Ocorreu um erro ao buscar os items");
        }
        }
        getItems();
    }, []);


    useEffect(() => {

        
        const response =  items.map(item => {

            return {
                id: item.id,
                flight_number: item.flight_number,
                name: item.name,
                date_utc: formatDate(item.date_utc),
                success: item.success == true ? "#008000"   : "#800000",
                wikipedia: item.links.wikipedia != null ? item.links.wikipedia : "https://www.spacex.com"

            }
        })

        
        setData(response);
        

    },[items]);

    

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
                        flightDate = {item.date_utc}
                        success = {item.success}     
                        wikipedia = {item.wikipedia}                           
                    />
                
                 ))
             }  
                
                
            </Content>
        </Container>
    );
}

export default List;