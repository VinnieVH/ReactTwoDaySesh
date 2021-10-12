import moment, { Moment } from "moment";
import styled from "styled-components";
import DaysOfWeek from "./components/DaysOfWeek";
import TilesContainer from "./components/TilesContainer";

const MainView = () => {
     const dates = () => {
    let arr = [];
    let date: Moment = moment().startOf('month');

    let firstDayOfMonth = moment(date).day();
    for(let i =0 ; i<firstDayOfMonth;i++){
      arr.push(null);
    };
    while(date.isBefore(moment().endOf('month'))){
      arr.push(date);
      date = moment(date).add(1,'day');
    };

    return arr;
  }
  return (
    <Container>
      <DaysOfWeek />
      <TilesContainer dates={dates()} />
    </Container>
  );
};

const Container = styled.div`
  width: 1050px;
`;

export default MainView;