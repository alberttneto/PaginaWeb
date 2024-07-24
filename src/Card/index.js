import DescriptionProject from "../DescriptionProject";
import "./Card.css"


const Card = ({name, description, image, type, link}) => {



    return (
        <a className="card" href={link} target="_blank">
            <h4>
                {name}
            </h4>
        </a>
    );

}


export default Card