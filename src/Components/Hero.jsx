import "../Styles/Hero.css"

import advis from "../assets/Advisory.svg"
import Check from "../assets/Check.svg"
import Dev from "../assets/Dev.svg"
import Strat from "../assets/Strat.svg"
const Hero = () => {




    return (
        <>
            <section className="hero--largescreen">
                <section className="hero">
                    <div className="hero__icons">
                        <div className="iconbox">
                            <div className="icon__logo">
                                <img src={advis} className="icon__img" alt="advislogo" />
                            </div>
                            <p className="icon__text">Advisory</p>
                        </div>
                        <div className="iconbox">
                            <div className="icon__logo">
                            <img src={Dev} className="icon__img" alt="advislogo" />
                            </div>                  
                            <p className="icon__text">Development</p>
                        </div>
                        <div className="iconbox">
                            <div className="icon__logo">
                                <img src={Check} className="icon__img" alt="advislogo" />
                                
                            </div>                  
                            <p className="icon__text">Planning</p>
                        </div>
                        <div className="iconbox">
                            <div className="icon__logo">
                                <img src={Strat} className="icon__img" alt="advislogo" />
                            </div>                  
                            <p className="icon__text">Strategy</p>
                        </div>
                    </div>
                </section>
            </section>
            <section className="hero--mediumscreen">
                <section className="hero">

                    <div className="iconbox">
                        <div className="icon__logo">
                        <img src={advis} className="icon__img" alt="advislogo" />
                        </div>
                        <p className="icon__text">Advisory</p>
                    </div>

                    <div className="iconbox">
                        <div className="icon__logo">
                            <img src={Dev} className="icon__img" alt="advislogo" />
                        </div>                  
                        <p className="icon__text">Development</p>
                    </div>

                </section>
                <section className="lower__icons--medium">
                    <div className="iconbox">
                        <div className="icon__logo">
                            <img src={Check} className="icon__img" alt="advislogo" />
                        </div>                  
                        <p className="icon__text">Planning</p>
                    </div>
                    <div className="iconbox">
                        <div className="icon__logo">
                            <img src={Strat} className="icon__img" alt="advislogo" />
                        </div>                  
                        <p className="icon__text">Strategy</p>
                    </div>

                </section>
            </section>
            <section className="hero--smallscreen">
                <section className="hero">

                    <div className="iconbox">
                        <div className="icon__logo">
                            <img src={advis} className="icon__img" alt="advislogo" />
                        </div>
                        <p className="icon__text">Advisory</p>
                    </div>

                </section>
                <section className="lower__icons--small">
                    <div className="iconbox">
                        <div className="icon__logo">
                            <img src={Dev} className="icon__img" alt="advislogo" />
                        </div>                  
                        <p className="icon__text">Development</p>
                    </div>

                    <div className="iconbox">
                        <div className="icon__logo">
                            <img src={Check} className="icon__img" alt="advislogo" />
                        </div>                  
                        <p className="icon__text">Planning</p>
                    </div>

                    <div className="iconbox">
                        <div className="icon__logo">
                            <img src={Strat} className="icon__img" alt="advislogo" />
                        </div>                  
                        <p className="icon__text">Strategy</p>
                    </div>

                </section>
            </section>
        </>
    )
    
}


export default Hero