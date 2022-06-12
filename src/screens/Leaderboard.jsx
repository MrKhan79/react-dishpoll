import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { NavLink } from "react-router-dom";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import axios from "axios";

const Leaderboard = () => {
  const [dishList, setDishList] = useState([]);
  const currentUser = useSelector((state) => state.currentUser);
  const dishRank = useSelector((state) => state.dishRank);

  const [points, setPoints] = useState(0);
  var data = localStorage.getItem("localDishesStore");
  data = JSON.parse(data);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json"
      )
      .then((res) => {
        setDishList(res.data);
      });
  }, []);

  const [dR, setDr] = useState([]);
  const sortedDishList = data
    .sort((a, b) => {
      return a.points - b.points;
    })
    .reverse();
  let filteredArr = [
    ...new Map(dishList.map((item) => [item.dishName, item])).values(),
  ];
  console.log(filteredArr);

  useEffect(() => {
    setDr(dishRank[currentUser.id - 1]);
  }, [dishRank]);

  return (
    <Div>
      <Container>
        <Title> LeaderBoard</Title>
        <Desc>
          <H>*NOTE*</H>
          <Ul>
            <Li>
              <Icon>
                <LooksOneIcon />
                <LooksTwoIcon />
                <Looks3Icon />
              </Icon>
              Denotes your ranked dish
            </Li>
          </Ul>
        </Desc>
        <NavLink to="/dishlist" style={{ textDecoration: "none" }}>
          <Button>
            RE-RANK THE DISHES <ModeEditOutlineOutlinedIcon />
          </Button>
        </NavLink>

        <Table>
          {sortedDishList.map((item, index) => (
            <Dish
              key={item.id}
              style={
                index == 0
                  ? { border: "4px solid gold", transform: "scale(1.2" }
                  : index == 1
                  ? { border: "4px solid white", transform: "scale(1.15" }
                  : index == 2
                  ? { border: "4px solid #CD7F32", transform: "scale(1.1" }
                  : {}
              }
            >
              <No>
                {index + 1}
                {index == 0 ? (
                  <EmojiEventsIcon style={{ color: "gold" }} />
                ) : (
                  <></>
                )}
                {index == 1 ? (
                  <EmojiEventsIcon style={{ color: "silver" }} />
                ) : (
                  <></>
                )}
                {index == 2 ? (
                  <EmojiEventsIcon style={{ color: "#CD7F32" }} />
                ) : (
                  <></>
                )}
              </No>
              <Name>
                {dishList.map((i) => (i.id == item.id ? i.dishName : ""))}
                {dishList.map((i) =>
                  i.id == item.id && dR.rank1 === i.id ? (
                    <Span>
                      <LooksOneIcon />
                    </Span>
                  ) : (
                    <></>
                  )
                )}
                {dishList.map((i) =>
                  i.id == item.id && dR.rank2 === i.id ? (
                    <Span>
                      <LooksTwoIcon />
                    </Span>
                  ) : (
                    <></>
                  )
                )}
                {dishList.map((i) =>
                  i.id == item.id && dR.rank3 === i.id ? (
                    <Span>
                      <Looks3Icon />
                    </Span>
                  ) : (
                    <></>
                  )
                )}
              </Name>
              <Points>
                {dishList.map((i) => (i.id == item.id ? item.points : ""))} pts
              </Points>
            </Dish>
          ))}
        </Table>
      </Container>
    </Div>
  );
};

//////////////CSS//////////////

const Container = styled.div`
  display: flex;
  margin-top: 60px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Table = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vh;
  margin-top: 40px;
`;

const Dish = styled.div`
  display: flex;
  flex-direction: row;
  height: 80px;
  align-items: center;
  border: 2px solid black;
  margin-bottom: 20px;
  border-radius: 20px;
  background-color: #2f5d62;
  color: white;
  opacity: 0.8;
  border: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const Div = styled.div`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='571' height='571' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%235E8B7E' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23A7C4BC'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const No = styled.h4`
  padding-right: 30px;
  flex: 0.2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
`;
const Name = styled.h4`
  flex: 0.6;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Points = styled.h4`
  flex: 0.2;
  padding-right: 20px;
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20 auto;
  width: 60vh;

  background-color: #5e8b7e;
  opacity: 0.8;
  color: #dfeeea;
  text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9,
    0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2),
    0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2),
    0 20px 20px rgba(0, 0, 0, 0.15);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 20px;
  border-radius: 50px;
`;

const Span = styled.span`
  padding-right: 20px;
  color: #dfeeea;
`;

const Desc = styled.div`
  opacity: 0.8;

  background-color: #a7c4bc;
  color: white;
  padding: 0 20px;
  width: 60vh;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
const Ul = styled.ul``;
const H = styled.h5`
  color: red;
  padding-left: 20px;
  margin: 20px auto;
  padding: 0 inherit;
  margin-bottom: 5px;
`;

const Icon = styled.span`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const Li = styled.li``;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  background-color: #2f5d62;
  color: white;
  padding: 1rem 2rem;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 0.4rem;
  font-size: 1rem;
  text-transform: uppercase;
  &:hover {
    background-color: #5e8b7e;
  }
`;

export default Leaderboard;
