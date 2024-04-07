import "./Section.css";


const Section = ({title, backgroundcolor}) =>{


    return (
        <section className="section" style={{backgroundColor:backgroundcolor}}>
            <div className="title">
                <h2>{title}</h2>
                <hr/>
            </div>
        </section>
    );
}

export default Section;