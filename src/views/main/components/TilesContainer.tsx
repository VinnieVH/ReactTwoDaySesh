import { Moment } from "moment";
import styled from "styled-components";
import Tile from "./Tile";

interface TilesContainerProps {
    dates: Array<Moment | null>;
}

const TilesContainer = (props: TilesContainerProps) => {
    return (
    <StyledDiv>
        {props.dates.map((date,index) => <Tile key={index} date={date}/>)}
    </StyledDiv>
    );
};

const StyledDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 1100px;
`;

export default TilesContainer;