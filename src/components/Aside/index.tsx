import React , {useMemo} from 'react'
import {MdDashboard,MdArrowDownward,MdArrowUpward,MdExitToApp} from 'react-icons/md'
//import logoImg from '../../assets/logo.svg'
import {Container, Header/*, LogImg*/, Title,  MenuContainer, MenuItemLink} from './styles';
import emojis from '../../utils/emojis';

const Aside: React.FC = () => {

    const emoji = useMemo( () => {
        const indice = Math.floor(Math.random() * emojis.length);
        return emojis[indice];
    },[]);
    return(
        <Container>
            <Header>
                
                
                <Title>{emoji} Desafio Técnico</Title>
            </Header>
            <MenuContainer>
                <MenuItemLink href='/dashboard'>
                    <MdDashboard/>
                    Dashboard
                </MenuItemLink>

                <MenuItemLink href='/list/entry-balance'>
                    <MdArrowUpward/>
                    Entradas
                </MenuItemLink>

                <MenuItemLink href='/list/exit-balance'>
                    <MdArrowDownward/>
                    Saídas
                </MenuItemLink>

                <MenuItemLink href='#'>
                    <MdExitToApp/>
                    Sair
                </MenuItemLink>

            </MenuContainer>
        </Container>
    );
}

export default Aside;