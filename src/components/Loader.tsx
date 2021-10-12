import styled, { keyframes } from "styled-components";

const Loader = () => {
    return (
        <StyledContainer>
            <Loading />
        </StyledContainer>
    );
};

const StyledContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const spinAnimation = keyframes`
    0% {
    transform: rotate(0deg);
    filter: blur(0px);
    }

    50% {
    filter: blur(2px);
  } 

    100% {
    transform: rotate(359deg);
    filter: blur(0px);
  }
`;

const Loading = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border-top: 8px solid black;
    border-right: 8px solid transparent;
    border-left: 8px solid transparent;
    border-bottom: 8px solid rgba(255,255,255,0.03);
    animation: ${spinAnimation} 1s ease infinite;
`;

export default Loader;