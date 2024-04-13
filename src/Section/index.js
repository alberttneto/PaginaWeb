import "./Section.css";
import React, { useEffect, useRef } from 'react';


const Section = ({id, title, backgroundcolor, Content, active}) =>{
    
    const sectionRef = useRef(null);

    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    entry.target.classList.add('ativo');
                    active(id, true);
                }
                else {
                    entry.target.classList.remove('ativo');
                    active(id, false);
                }
            });
        },{threshold: 0.5});

        if(sectionRef.current){
            observer.observe(sectionRef.current);
        }

        const secRef = sectionRef.current;
        return () => {
            if(secRef){
                observer.unobserve(secRef);
            }
        } 

    }, []);

    return (
        <section className="section" ref={sectionRef} id={id} style={{backgroundColor:backgroundcolor}}>
            <div className="title">
                <h2>{title}</h2>
                <hr/>
            </div>
            {Content}
        </section>
    );
}

export default Section;