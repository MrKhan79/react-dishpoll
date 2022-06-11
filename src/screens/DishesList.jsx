import React, { useState } from "react";
import { useSelector } from "react-redux";
import DishItem from "./DishItem";
import styled from "styled-components";
import Navbar from './Navbar';


const Container = styled.div`
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-around;
  display: flex;
`;

const Title = styled.h1`
display: flex;
align-items: center;
justify-content: center;
  background-color: #5E8B7E;
opacity: 0.8;
width: 60vh;

  margin: 20 auto;
  color: #DFEEEA;
  text-shadow: 0 1px 0 #ccc,
               0 2px 0 #c9c9c9,
               0 3px 0 #bbb,
               0 4px 0 #b9b9b9,
               0 5px 0 #aaa,
               0 6px 1px rgba(0,0,0,.1),
               0 0 5px rgba(0,0,0,.1),
               0 1px 3px rgba(0,0,0,.3),
               0 3px 5px rgba(0,0,0,.2),
               0 5px 10px rgba(0,0,0,.25),
               0 10px 10px rgba(0,0,0,.2),
               0 20px 20px rgba(0,0,0,.15);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 20px;
  border-radius: 50px;
`;

const Div = styled.div`
  display: flex;
  margin-top: 60px;

  flex-direction: column;
  justify-content: center;
  align-items: center;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='571' height='571' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%235E8B7E' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23A7C4BC'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
`;

const Desc = styled.div`
opacity: 0.8;

  background-color: #A7C4BC;
  color: white;
  padding: 0 20px;
  width: 60vh;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);


`
const Ul = styled.ul``;
const H = styled.h5`
color:red;
padding-left: 20px;
padding: 0 inherit;
margin-bottom: 5px;
`;

const Li = styled.li``;


const Dishes = () => {
  const dishes = useSelector((state) => state.dishes);

  return (
      <div>
      <Navbar title={"DISH LIST"} />

    <Div>
      <Title>Please Rank The Food</Title>
      <Desc><H>*NOTE*</H><Ul>
        <Li>Select 3 dishes from the List</Li>
        <Li>Each selection is given points based on the rank </Li>
        <Li>Rank 1 gets 30 points, Rank 2 gets 20, Rank 3 gets 10</Li>
        <Li>If there is another dish with the same rank the other dish will lose its rank</Li>
        </Ul></Desc>
      <Container>
        {dishes.map((item) => (
          <DishItem item={item} key={item.id} />
        ))}
      </Container>
    </Div>
    </div>
  );
};

export default Dishes;