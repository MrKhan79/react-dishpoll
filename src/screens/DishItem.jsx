import React, { useEffect, useState } from "react";
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

const DishItem = ({ item }) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.currentUser);
  const dishRank = useSelector((state) => state.dishRank);

  const [rank1, setRank1] = useState(false);
  const [rank2, setRank2] = useState(false);
  const [rank3, setRank3] = useState(false);

  useEffect(() => {
    var data = JSON.parse(localStorage.getItem("rank"));
    for (var i = 0; i <= data.length - 1; i++) {
      if (data[i].id == user.id) {
        data[i] = {
          id: user.id,
          rank1: dishRank[i].rank1,
          rank2: dishRank[i].rank2,
          rank3: dishRank[i].rank3,
        };
      }
    }
    localStorage.setItem("rank", JSON.stringify(data));
  }, [rank1, rank2, rank3, dishRank]);

  const handleRank1 = (e, value) => {
    setRank1(true);
    setRank2(false);
    setRank3(false);
    const dish = {
      id: user.id,
      rank1: item.id,
      rank2: "",
      rank3: "",
    };
    dispatch(setR1(dish));
  };
  const handleRank2 = (e) => {
    setRank1(false);
    setRank2(true);
    setRank3(false);
    const dish = {
      id: user.id,
      rank1: "",
      rank2: item.id,
      rank3: "",
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
      rank3: item.id,
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
              value={item.id}
              rank2={rank2}
              rank3={rank3}
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
              style={rank3 ? { color: "#CD7F32" } : {}}
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

//////////////CSS//////////////

const Container = styled.div`
  margin: 20px;
  background-color: #dfeeea;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.03);
  }
`;

const RankIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
`;

const Icon = styled.button`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border: 2px solid #0f5b5b;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  margin: 0 10px;
  flex-direction: row;
  width: 60px;
  height: 30px;
  font-size: 20px;
  color: #0f5b5b;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

export default DishItem;
