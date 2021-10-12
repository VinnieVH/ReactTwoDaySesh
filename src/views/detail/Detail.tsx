import moment from "moment";
import styled from "styled-components";
import Loader from "../../components/Loader";
import Navigation from "../../components/Navigation";
import useFetch from "../../hooks/useFetch";
import useQuery from "../../hooks/useQuery";
import PhotoDetail from "./components/PhotoDetail";
 
const DetailView = () => {
    const queryParams = useQuery();
    const date = moment(queryParams.get('date'));

    const { data, loading, error } = useFetch(`https://api.nasa.gov/planetary/apod?api_key=YNGbbc2IQaKJacTmf4g2ZfFpV4NN3PhnXbdfwuCb&date=${moment(date).subtract(1, 'year').format('YYYY-MM-DD')}`)
    
    let content;
    if (loading) content = <Loader />;
    else if (error) content = <div>{error}</div>;
    else if (data) content = <PhotoDetail photo={data} />;
    
    return ( 
        <DetailContainer>
            <Navigation type={"day"} date={date}/>
            {content}
        </DetailContainer>
     );
};

const DetailContainer = styled.div`
    flex: 1;
    align-self: stretch;
`;

export default DetailView;