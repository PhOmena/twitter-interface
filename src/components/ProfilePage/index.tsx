import React from 'react';
import Feed from '../Feed';
import { 
    Container, 
    Banner, 
    Avatar, 
    ProfileData, 
    LocationIcon,
    CakeIcon,
    Followage
    // EditButton
    } from './styles';

const ProfilePage: React.FC = () => {
  return (
      <Container>
          <Banner>
              <Avatar />
            </Banner>

              <ProfileData>
                {/* <EditButton outlined>Editar Perfil</EditButton> */}

                  <h1>Phelipe Omena</h1>
                  <h2>@phelipe_omena</h2>
                  <p>
                      Web Developer <a href="https://github.com/PhOmena">@GitHub</a>
                  </p>
                
                    <ul>
                        <li>
                            <LocationIcon />
                            São Paulo, Brasil
                        </li>
                        <li>
                            <CakeIcon />
                            Nascido(a) em 11 de Fevereiro de 2003
                        </li>
                    </ul>
                    <Followage>
                        <span>
                            Seguindo <strong>110</strong>
                        </span>
                        <span>
                            <strong>672 </strong>Seguidores
                        </span>
                    </Followage>
              </ProfileData>

              <Feed />
      </Container>
  );
}

export default ProfilePage;