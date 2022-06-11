import React, { useState } from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useDispatch } from 'react-redux';
import { logout } from '../actions/isLoggedAction';
import { NavLink } from 'react-router-dom';

const Container = styled.div`
height: 30px;
width: 100%;
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
    font-size: 18px;
cursor: pointer;
margin-left: 25px;
margin-right: 20px;
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
        <MenuItem onClick={listTitle} value='LIST'><NavLink to="/dishlist">LIST</NavLink></MenuItem>
        <MenuItem onClick={leaderTitle} value='LEADERBOARD'><NavLink to="/leaderboard">LEADERBOARD</NavLink></MenuItem>  
        <MenuItem onClick={homeTitle} value='HOME'><NavLink to="/">HOME</NavLink></MenuItem>  

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

export default Navbar
