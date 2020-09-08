import React from 'react';
import ProfilePage from '../ProfilePage';
import { Container, 
    Header, 
    BackIcon, 
    ProfileInfo, 
    BottomMenu, 
    HomeIcon, 
    SearchIcon, 
    BelliIcon, 
    EmailIcon 
    } from './styles';

const Main: React.FC = () => {
  return(
      <Container>
        <Header>
            <button>
                <BackIcon />
            </button>

            <ProfileInfo>
                <strong>Phelipe Omena</strong>
                <span>612 Tweets</span>
            </ProfileInfo>
        </Header>

        <ProfilePage />
        <BottomMenu>
            <HomeIcon className="active" />
            <SearchIcon />
            <BelliIcon />
            <EmailIcon />
        </BottomMenu>
      </Container>
  );
}

export default Main;