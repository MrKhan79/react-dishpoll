import React, { useState } from 'react'
import styled from 'styled-components'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useDispatch } from 'react-redux';
import { logout } from '../actions/isLoggedAction';
import { NavLink } from 'react-router-dom';


const Navbar = () => {

  const dispatch = useDispatch();
  const [title, setTitle] = useState("HOME")

  const handleLogOut =()=>{
      dispatch(logout())
  };
const listTitle =() =>{
    setTitle("LIST")
};
const leaderTitle =() =>{
    setTitle("LEADERBOARD")
};
const homeTitle =() =>{
    setTitle("HOME")
};

  return (
    <Container>
        <Wrapper>
        <Left>
        <NavLink to="/dishlist" style={{textDecoration: "none"}} > <MenuItem onClick={listTitle} value='LIST'>LIST</MenuItem></NavLink>
        <NavLink to="/leaderboard" style={{textDecoration: "none"}}><MenuItem onClick={leaderTitle} value='LEADERBOARD'>LEADERBOARD</MenuItem></NavLink>  

        </Left>
        
        <Center>
            <Logo>
                {title}
            </Logo>
        </Center>

        <Right>
        <MenuItem onClick={handleLogOut}>LOGOUT<Span><PowerSettingsNewIcon /></Span></MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}



////////////////CSS////////////////


const Container = styled.div`
height: 30px;
width: 100vw;
color: white;
background-color: #5E8B7E;
`

const Wrapper =styled.div`
    padding: 0px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
background-color: #5E8B7E;

`

//////////Left/////////////

const Left = styled.div`
flex:1;
display: flex;
align-items: center;
padding-left: 20px;

`


//////////Center/////////////


const Center = styled.div`
flex:1;
text-align: center;
`
const Logo = styled.h1`
    font-weight: bolder;
    
`


//////////Right/////////////


const Right = styled.div`
flex:1;
display: flex;
justify-content: flex-end;
align-items: center;
padding-left: 30px;

`

const MenuItem =styled.div`
    font-size: 18px !important;
    color: white;
cursor: pointer !important;
margin-left: 25px !important;
margin-right: 20px !important;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease;
&:hover{
    transform: scale(1.1);
}

`

const Span = styled.span`
padding-left: 5px;
`


export default Navbar
