

import "../Styles/About.css"
const About = () => {
    

    return(
        <section className="about">

            <div className="about__title">
                <h2 className="about__title--text">About Us</h2>

                <div className="quotebox">
                    <q>You can do anything you set your mind to.</q>
                    <h3 className="quotebox__author">-Benjamin Franklin</h3>
                </div>
            </div>

            <div className="about__grid">
                <div className="grid__item top">
                    <span className="grid__span top">About us</span>
                    <p className="grid__text top">Good content is everything. In a world that is oversaturated with content, you’ll learn from successful writers and bloggers how to create content that matters and resonates with your audience.</p>
                </div>
                <div className="grid__item imgtop">
                 
                </div>
                <div className="grid__item top">
                    <span className="grid__span top">Our Strategy</span>
                    <p className="grid__text top">Sometimes the hardest part is knowing what to say and when to say it. At Lines, you’ll get the downlow on how to craft retweetable messages, when to post content, and what platforms you should be using</p>
                </div>
                <div className="grid__item botimgone">
                </div>
                <div className="grid__item bot">
                    <span className="grid__span bot">Our Mission</span>
                    <p className="grid__text bot">Good content is everything. In a world that is oversaturated with content, you’ll learn from successful writers and bloggers how to create content that matters and resonates with your audience.</p>
                </div>
                <div className="grid__item botimg2">
                    
                </div>
            </div>
        </section>
    )
}

export default About