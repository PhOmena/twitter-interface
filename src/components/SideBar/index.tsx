import React from 'react';
import StickyBox from 'react-sticky-box';
import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import { 
    Container, 
    SearchWrapper, 
    SearchInput, 
    SearchIcon, 
    Body 
} from './styles';

const SideBar: React.FC = () => {
  return (
      <Container>
          <SearchWrapper>
              <SearchInput placeholder="Buscar no Twitter" />
              <SearchIcon />
          </SearchWrapper>
          <StickyBox>
          <Body>
           <List 
           title="Talvez você curta"
           elements={[
            <FollowSuggestion 
                name="Luiz Batanero"
                nickname="@luiz_batanero"
            />,
            <FollowSuggestion 
                name="Luke Morales"
                nickname="@luke_morales"
            />,
            <FollowSuggestion 
                name="Camila Magalhães"
                nickname="@camila_magalhaes"
            />,
           ]}/>

           <List 
           title="Talvez você curta"
           elements={[
              <News />,
              <News />,
              <News />]}/>

            <List 
           title="Talvez você curta"
           elements={[
              <News />,
              <News />,
              <News />]}/>

            <List 
           title="Talvez você curta"
           elements={[
              <News />,
              <News />,
              <News />]}/>
          </Body>
          </StickyBox>
      </Container>
  );
}

export default SideBar;