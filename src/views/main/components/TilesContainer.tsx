import moment from "moment";
import { Moment } from "moment";
import styled from "styled-components";
import Loader from "../../../components/Loader";
import useFetch from "../../../hooks/useFetch";
import IPhoto from "../../../types/IPhoto";
import Tile from "./Tile";

interface TilesContainerProps {
    month: number;
}

const TilesContainer = (props: TilesContainerProps) => {

    const startDate = moment().month(props.month).subtract(1, 'year').startOf('month').format('YYYY-MM-DD');
    const endDate = moment().month(props.month).subtract(1, 'year').endOf('month').format('YYYY-MM-DD');
    const { data, loading, error } = useFetch(`https://api.nasa.gov/planetary/apod?api_key=YNGbbc2IQaKJacTmf4g2ZfFpV4NN3PhnXbdfwuCb&start_date=${startDate}&end_date=${endDate}`);

    const dates = () => {
        let arr = [];
        let date: Moment = moment().month(props.month).startOf('month');

        let firstDayOfMonth = moment(date).day();
        for(let i =0 ; i<firstDayOfMonth;i++){
        arr.push(null);
        };
        while(date.isBefore(moment().month(props.month).endOf('month'))){
        arr.push(date);
        date = moment(date).add(1,'day');
        };

        return arr;
    };
    if(loading) return <Loader />;
    if (error) return <div>{error}</div>;
    if (data) {
        return <StyledDiv>
            {
                dates().map((date, index) => <Tile
                    key={index}
                    date={date}
                    photo={date ? data.find((photo: IPhoto) => moment(date).subtract(1, 'year').isSame(photo.date, 'day')) : null}
                />)
            }
        </StyledDiv>
    }
    return null
};

const StyledDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 1100px;
`;

export default TilesContainer;