import "../Styles/Focus.css"
const Focus = () => {
    

    return (
        <section className="focus">

            <div className="focusbox">

                <div className="box__logo"></div>


                <div className="box__text">

                    <div id="topbox" className="box__text--title">
                        <h2 className="box__text--title--text">FOCUSED DESIGN</h2>
                    </div>
                    <p className="box__text--desc">Dui ut ornare lectus sit amet. Sollicitudin nibh sit amet commodo nulla. Tristique risus nec feugiat in fermentum. Sit amet venenatis urna cursus eget nunc scelerisque. Aliquet lectus proin nibh nisl.</p>
                </div>

                <div className="box__text">

                    <div id="bottombox" className="box__text--title">
                        <h2 className="box__text--title--text">WEBSITE DESIGN</h2>
                    </div>
                    <p className="box__text--desc">Dui ut ornare lectus sit amet. Sollicitudin nibh sit amet commodo nulla. Tristique risus nec feugiat in fermentum. Sit amet venenatis urna cursus eget nunc scelerisque. Aliquet lectus proin nibh nisl.</p>
                </div>

                <button className="learn__button">Learn More</button>
            </div>
        </section>
    )
}


export default Focus