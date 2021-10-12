import moment from "moment";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Navigation from "../../components/Navigation";
import useQuery from "../../hooks/useQuery";
import DaysOfWeek from "./components/DaysOfWeek";
import TilesContainer from "./components/TilesContainer";

const MainView = () => {
    const history = useHistory();
    const queryParams = useQuery();
    const date = queryParams.get('date') ? moment(queryParams.get('date')) : null;

    useEffect(() => {
        if (!queryParams.get('date')) history.push(`?date=${moment().startOf('month').format('YYYY-MM-DD')}`)
    }, [queryParams, history])

    if(!date) return null;
    return (
        <Container>
            <Navigation type={"month"} date={date}/>
        <DaysOfWeek />
        <TilesContainer month={moment(date).month()} />
        </Container>
    );
};

const Container = styled.div`
  width: 1050px;
`;

export default MainView;