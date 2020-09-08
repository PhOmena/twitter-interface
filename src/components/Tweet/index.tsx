import React from 'react';

import { 
    Container, 
    Retweeted, 
    Body, 
    Avatar, 
    Content, 
    Header,
    Dot, 
    Description, 
    ImageContent, 
    Icons, 
    Status, 
    ComentIcon,
    LikeIcon 
} from './styles';

const Tweet: React.FC = () => {
  return (
      <Container>
          <Retweeted>
              Você retweetou
          </Retweeted>
            <Body>
                <Avatar />
                <Content>
                    <Header>
                        <strong>Phelipe Omena</strong>
                        <span>@phelipe_omena</span>
                        <Dot />
                        <time>05 de setembro</time>
                    </Header>
                    <Description>Twitter Interface</Description>
                    <ImageContent />
                    <Icons>
                        <Status>
                            <ComentIcon />
                            18
                        </Status>
                        <Status>
                            {/* <RetweetIcon /> */}
                            18
                        </Status>
                        <Status>
                            <LikeIcon />
                            999
                        </Status>
                    </Icons>
                </Content>
            </Body>
      </Container>
  );
}

export default Tweet;