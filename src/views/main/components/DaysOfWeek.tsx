import styled from "styled-components";

const DaysOfWeek = () => {
    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ]

    return (
    <StyledContainer>
        {days.map(day => <StyledDay key={day}>{day}</StyledDay>)}
    </StyledContainer>
    );
};

const StyledContainer = styled.div`
    width: 1050px;
    height: 25px;
    display: flex;
    align-items: stretch;
`;

const StyledDay = styled.div`
    flex: 1 1 0;
    display: flex;
    align-items: center;
    outline: solid 1px black;
`;

export default DaysOfWeek;