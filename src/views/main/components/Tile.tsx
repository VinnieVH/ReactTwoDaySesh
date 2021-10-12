import { Moment } from "moment";
import { Link } from "react-router-dom";
import styled from "styled-components";
import IPhoto from "../../../types/IPhoto";

interface TileProps {
    date: Moment | null;
    photo?: IPhoto;
}

const Tile = (props: TileProps) => {
if (!props.photo) return <StyledDiv />
    return (
        <StyledLink to={`/detail?date=${props.date?.format('YYYY-MM-DD')}`}>
            <StyledDiv>
                <StyledImage src={props.photo.url} alt={props.photo.title}/>
                <StyledSpan>{props.date?.date()}</StyledSpan>
            </StyledDiv>
        </StyledLink> 
    );
};

const StyledDiv = styled.div`
    width: 150px;
    height: 150px;
    color: black;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`;

const StyledImage = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    user-select: none;
`;

const StyledSpan = styled.span`
    align-self: flex-start;
    font-size: larger;
    font-weight: bolder;
    color: white;
    z-index: 100;
    user-select: none;
`;

export default Tile;