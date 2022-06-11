import React from 'react'
import styled from 'styled-components'
import dish from './dish.png'
import WorkspacePremiumTwoToneIcon from '@mui/icons-material/WorkspacePremiumTwoTone';
import LeaderboardTwoToneIcon from '@mui/icons-material/LeaderboardTwoTone';
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom';

const Div = styled.div`
    display: flex;
    padding: auto;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 20px auto;
    height: 100vh;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='571' height='571' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%235E8B7E' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23A7C4BC'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");

`;

const Container = styled.div`
    flex: 1;
margin: 5px;
width: 200px;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
background-color: transparent;
position: relative;
`;
const Image = styled.img`
height: 75%;
z-index: 2;
width: 300px;
height: 300px;
`;
const Info= styled.div`
opacity: 0;
width: 100%;
height: 100%;
padding: 0 0;
margin: 0 0;
position:absolute;
top:0;
left:0;
background-color: rgba(0,0,0,0.2);
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.7s ease;

&:hover{
    opacity: 100%;
}
`;
const Icon= styled.div`
width: 100px;
height: 100px;
border-radius:50%;
background-color:#e9f5f5 ;
    color: gray !important;
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
font-size: 100%;
transition: all 0.5s ease;
cursor: pointer;


&:hover{
  
    transform: scale(1.1);
}
`;

const MainContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`

const Title = styled.h1`
color: white;
opacity:0.8;
padding: 10px;
background-color: #2F5D62;
position: absolute;
z-index: 2;
`

const Home = () => {
    return (
        <MainContainer>
        <Div>
        <Container>
          <Image src={dish} />
          <Title>Rank Dishes</Title>
          <NavLink to="/dishlist" style={{textDecoration: "none"}}> <Info>
              <Icon>
              <WorkspacePremiumTwoToneIcon style={{width:"80px", height:"80px"}}/>
              </Icon>
          </Info>
          </NavLink>
        </Container>
        <Container>
      <Image src={"https://graphly.io/wp-content/uploads/leaderboards-podium-star.jpg"} />
      <Title>Leaderboard</Title>
      <NavLink to="/leaderboard" style={{textDecoration: "none"}}> <Info>
          <Icon>
          <LeaderboardTwoToneIcon style={{width:"80px", height:"80px"}}/>
          </Icon>
      </Info>
      </NavLink>

    </Container>
    </Div>
    </MainContainer>
    )
}

export default Home
