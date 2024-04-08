import "./Section.css";


const Section = ({title, backgroundcolor, id, Content}) =>{


    return (
        <section className="section" id={id} style={{backgroundColor:backgroundcolor}}>
            <div className="title">
                <h2>{title}</h2>
                <hr/>
            </div>
            {Content}
        </section>
    );
}

export default Section;