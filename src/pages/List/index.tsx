import React, { useMemo } from 'react'



import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'
import HistoryFinanceCard from '../../components/HistoryFinanceCard'
import {Container, Content, Filters} from './style'

interface IRouteParams {
    match: {
        params: {
            type: string;
        }
    }
}


const List: React.FC<IRouteParams> = ({ match }) => {

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

    const months = [
        {value: 7, label: 'Julho'},
        {value: 8, label: 'Agosto'},
        {value: 9, label: 'Setembro'}
    ];

    const years = [
        {value: 2018, label: 2018},
        {value: 2019, label: 2019},
        {value: 2020, label: 2020}
    ];

    return(
        <Container>
             <ContentHeader title={title.text} lineColor={title.lineColor}>
               
            </ContentHeader>

           

            <Content>
                <HistoryFinanceCard
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subtitle="29/05/2021"
                    amount="R$ 20,00"                
                />
                
            </Content>
        </Container>
    );
}

export default List;