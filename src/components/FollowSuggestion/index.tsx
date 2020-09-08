import React from 'react';

import { 
    Container, 
    Avatar, 
    Info 
} from './styles';

interface Props {
    name: string;
    nickname: string;
}

const FollowSuggestion: React.FC<Props> = ({
    name, 
    nickname 
}) => {
  return (
      <Container>
          <div>
          <Avatar />
            <Info>
                <strong>{name}</strong>
                <span>{nickname}</span>
            </Info>
          </div>
      </Container>
  );
}

export default FollowSuggestion;