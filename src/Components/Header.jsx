import "../Styles/Header.css"

const Header = () => {


    return(
        <header className="pageheader">

            <div className="titlebox">
                <h1 className="pageheader__title">Project Yellow</h1>
            </div>

            <div className="buttons">
                <button className="header__button">Projects</button>
                <button className="header__button">Design</button>
                <button className="header__button">Contact</button>
            </div>
        </header>
    )
    
}

export default Header