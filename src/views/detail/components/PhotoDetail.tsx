import styled from "styled-components";
import IPhoto from "../../../types/IPhoto";

interface PhotoDetailProps {
    photo: IPhoto;
}

const PhotoDetail = (props: PhotoDetailProps) => {
    return (
        <div>
            <ImgContainer>
                <Image src={props.photo.url} alt={props.photo.title}/>
            </ImgContainer>
            <h3>{props.photo.title}</h3>
            <p>{props.photo.explanation}</p>
            {props.photo.copyright && <span>&copy;{props.photo.copyright}</span>}
        </div>
    )
}

const ImgContainer = styled.div`
    width: 400px;
    height: 400px;
    overflow: hidden;
    position: relative;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;;
`;

export default PhotoDetail;