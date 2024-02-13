import "../Styles/Mockups.css"

const Mockups = () => {
    

    return(
        <section className="mockups">

            <div className="mockup__title">
                <h2 className="mockup__title--text">Our Mockup Projects</h2>
            </div>

            <div className="mockup__display">
                <div className="bigball"></div>
                <div className="smalldude"></div>

                <div className="minorball"></div>
            </div>

            <div className="mockup__text">
               <p>Enjoy some of out recent mockups. We like to think outside the box and invole play and color into our work. Join us!</p>
               <button className="learn__button">Learn More</button>
            </div>


        </section>
    )
}


export default Mockups