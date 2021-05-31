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
                
                
                <Title>{emoji} Lançamentos SpaceX</Title>
            </Header>
            <MenuContainer>
                <MenuItemLink href='/list/next'>
                    <MdChevronRight/>
                    Próximo Lançamento
                </MenuItemLink>

                <MenuItemLink href='/list/last'>
                    <MdChevronLeft/>
                    Último Lançamento
                </MenuItemLink>

                <MenuItemLink href='/list/upcoming'>
                    <MdQueuePlayNext/>
                    Próximos Lançamentos
                </MenuItemLink>

                <MenuItemLink href='/list/past'>
                    <MdReplay/>
                    Lançamentos Passados
                </MenuItemLink>

            </MenuContainer>
        </Container>
    );
}

export default Aside;