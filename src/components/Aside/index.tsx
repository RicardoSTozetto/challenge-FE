import React , {useMemo} from 'react'
import {MdChevronLeft,MdQueuePlayNext,MdReplay} from 'react-icons/md'
import {MdChevronRight} from 'react-icons/md'
//import logoImg from '../../assets/logo.svg'
import {Container, Header/*, LogImg*/, Title,  MenuContainer, MenuItemLink} from './styles';
import emojis from '../../utils/emojis';

const Aside: React.FC = () => {

    const emoji = useMemo( () => {
        //const indice = Math.floor(Math.random() * emojis.length);
        return emojis[3];
    },[]);
    return(
        <Container>
            <Header>
                
                
                <Title>Lançamentos SpaceX</Title>
            </Header>
            <MenuContainer>
                <MenuItemLink href='/list/next'>
                    <MdChevronRight/>
                    Próximo {emoji}
                </MenuItemLink>

                <MenuItemLink href='/list/last'>
                    <MdChevronLeft/>
                    Último {emoji}
                </MenuItemLink>

                <MenuItemLink href='/list/upcoming'>
                    <MdQueuePlayNext/>
                    Futuros {emoji}
                </MenuItemLink>

                <MenuItemLink href='/list/past'>
                    <MdReplay/>
                    Passados {emoji} 
                </MenuItemLink>

            </MenuContainer>
        </Container>
    );
}

export default Aside;