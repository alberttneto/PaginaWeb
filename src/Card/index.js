import DescriptionProject from "../DescriptionProject";
import "./Card.css"


const Card = ({name, description, image, type}) => {



    return (
        <div className="card">
            <h4>
                {name}
            </h4>
        </div>
    );

}


export default Card