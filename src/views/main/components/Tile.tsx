import { Moment } from "moment";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface TileProps {
    date: Moment | null;
}

const Tile = (props: TileProps) => {
if (!props.date) return <StyledDiv />
    return (
        <StyledLink to={`/detail?date=${props.date.format('YYYY-MM-DD')}`}>
            <StyledDiv>{props.date.date()}</StyledDiv>
        </StyledLink> 
    );
};

const StyledDiv = styled.div`
    width: 150px;
    height: 150px;
    border: solid black 1px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`;

export default Tile;