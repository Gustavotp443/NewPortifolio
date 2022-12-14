import React from "react";
import * as S from "./home.styles";
import HomeBottom from "./homeComponents/HomeBottom";
import InfoHome from "./homeComponents/Info";
import RecentProjects from "./homeComponents/projects";

const Home = () => {
  return (
    <S.HomeContainer>
      <S.HomeWrapper>
        <InfoHome/>
        <RecentProjects/>
        <HomeBottom/>
      </S.HomeWrapper>
    </S.HomeContainer>
  );
};

export default Home;
