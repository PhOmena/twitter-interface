import React from 'react';

import { 
    Container, 
    Topside,
    MenuButton, 
    HomeIcon, 
    BellIcon, 
    EmailIcon, 
    FavoriteIcon, 
    ProfileIcon,
    BotSide,
    Avatar,
    ProfileData,
    ExitIcon
} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
        <Topside>
            <MenuButton>
                <HomeIcon />
                    <span>Página Inicial</span>    
            </MenuButton>

            <MenuButton>
                <BellIcon />
                    <span>Notificações</span>    
            </MenuButton>

            <MenuButton>
                <EmailIcon />
                    <span>Mensagens</span>    
            </MenuButton>

            <MenuButton>
                <FavoriteIcon />
                    <span>Favoritados</span>    
            </MenuButton>

            <MenuButton className="active"> 
                <ProfileIcon />
                    <span>Perfil</span>    
            </MenuButton>
        </Topside>
        <BotSide>
            <Avatar>
                <ProfileData>
                    <strong>Phelipe</strong>
                    <span>@phelipe_omena</span>
                </ProfileData>
                <ExitIcon />
            </Avatar>
        </BotSide>
    </Container>
  );
}
export default MenuBar;
