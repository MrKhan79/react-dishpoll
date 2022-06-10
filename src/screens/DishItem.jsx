import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";
import { setR1, setR2, setR3 } from "../actions/dishRank";

const Container = styled.div`
  margin: 20px;
  background-color: #dfeeea;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const RankIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
`;

const Icon = styled.button`
  cursor: pointer;
  display: flex;
  margin: 0 10px;
  flex-direction: row;
  width: 60px;
  height: 30px;
  font-size: 20px;
  color: #0f5b5b;
`;

const DishItem = ({ item }) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.currentUser);
  const dishRank = useSelector((state) => state.dishesRank);

  const [rank1, setRank1] = useState(false);
  const [rank2, setRank2] = useState(false);
  const [rank3, setRank3] = useState(false);

  const handleRank1 = (e) => {
    console.log(item.dishName);
    setRank1(true);
    setRank2(false);
    setRank3(false);
    const dish = {
      id: user.id,
      rank1: item.dishName,
      rank2: "Idli",
      rank3: "dosa",
    };
    dispatch(setR1(dish));
  };
  const handleRank2 = (e) => {
    setRank1(false);
    setRank2(true);
    setRank3(false);
    const dish = {
      id: user.id,
      rank1: "sdas",
      rank2: item.dishName,
      rank3: "asda",
    };
    dispatch(setR2(dish));
  };
  const handleRank3 = (e) => {
    setRank1(false);
    setRank2(false);
    setRank3(true);
    const dish = {
      id: user.id,
      rank1: "",
      rank2: "",
      rank3: item.dishName,
    };
    dispatch(setR3(dish));
  };

  return (
    <div>
      <Container>
        <Card style={{ backgroundColor: "#DFEEEA" }} sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={item.image}
            alt="dish"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.dishName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
          </CardContent>

          <RankIcon>
            <Icon
              style={rank1 ? { color: "gold" } : {}}
              onClick={handleRank1}
              value={item.dishName}
            >
              <WorkspacePremiumIcon />
              <LooksOneIcon />
            </Icon>
            <Icon
              style={rank2 ? { color: "silver" } : {}}
              onClick={handleRank2}
              value={rank2}
            >
              <WorkspacePremiumIcon />
              <LooksTwoIcon />
            </Icon>
            <Icon
              style={rank3 ? { color: "brown" } : {}}
              onClick={handleRank3}
              value={rank3}
            >
              <WorkspacePremiumIcon />
              <Looks3Icon />
            </Icon>
          </RankIcon>
        </Card>
      </Container>
    </div>
  );
};

export default DishItem;
