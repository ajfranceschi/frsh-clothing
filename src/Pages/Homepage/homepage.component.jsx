import React from 'react';
import './homepage.styles.sass'
import Directory from "../../Components/Directory/directory.component";
import {HomePageContainer} from './homepage.styles';

const HomePage = () => {
  return (
    <HomePageContainer>
      <Directory   />
    </HomePageContainer>
  )
};

export default HomePage;