import moment from "moment";
import styled from "styled-components";
import useFetch from "../../hooks/useFetch";
import useQuery from "../../hooks/useQuery";
import PhotoDetail from "./components/PhotoDetail";


const API_KEY = process.env.REACT_APP_NASA_API_KEY;
 
const DetailView = () => {
    const queryParams = useQuery();
    const date = moment(queryParams.get('date'));

    console.log(API_KEY);
    const { data, loading, error } = useFetch(`https://api.nasa.gov/planetary/apod?api_key=YNGbbc2IQaKJacTmf4g2ZfFpV4NN3PhnXbdfwuCb&date=${moment(date).subtract(1, 'year').format('YYYY-MM-DD')}`)
    
    let content;
    if (loading) content = <div>Loading...</div>;
    else if (error) content = <div>{error}</div>;
    else if (data) content = <PhotoDetail photo={data} />;
    
    return ( 
        <DetailContainer>{content}</DetailContainer>
     );
};

const DetailContainer = styled.div`
    flex: 1;
    align-self: stretch;;
`;

export default DetailView;