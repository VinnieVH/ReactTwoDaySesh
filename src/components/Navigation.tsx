import moment from "moment";
import { Moment } from "moment";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface NavigationProps {
    type: 'day' | 'month';
    date: Moment;
}

const Navigation = (props: NavigationProps) => {
    const handleLink = (direction: 'prev' | 'next') => {
        let url = '';
        if(props.type === 'day') url += '/detail';
        url += `?date=${moment(props.date).add(direction === 'prev' ? -1 : 1, props.type).format('YYYY-MM-DD')}`;

        return url;
    };

    return (
        <StyledContainer>
            <StyledLink to={handleLink('prev')}>
                <NavigationButton>{"< Previous"}</NavigationButton>
            </StyledLink>
            <StyledLink to={handleLink('next')}>
                <NavigationButton>{"Next >"}</NavigationButton>
            </StyledLink>
        </StyledContainer>
    );
};

const StyledContainer = styled.div`
    flex: 1;
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;

const NavigationButton = styled.h4`
    cursor: pointer;
    user-select: none;
    color: black;
`;

export default Navigation;