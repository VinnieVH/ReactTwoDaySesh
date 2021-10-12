import moment from "moment";
import useQuery from "../../hooks/useQuery";
 
const DetailView = () => {
    let queryParams = useQuery();
    const date = moment(queryParams.get('date'));
    return ( 
        <div>{date.toISOString()}</div>
     );
};
 
export default DetailView;