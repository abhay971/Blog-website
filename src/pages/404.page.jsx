import { Link } from "react-router-dom";
import lightPageNotFoundImg from "../imgs/404-light.png";
import darkPageNotFoundImg from "../imgs/404-dark.png";
import lightFullLogo from "../imgs/full-logo-light.png";
import darkFullLogo from "../imgs/full-logo-dark.png";
import { useContext } from "react";
import { ThemeContext } from "../App";

const PageNotFound = () => {

    let { theme } = useContext(ThemeContext);

    return(
        <section className="h-cover relative p-10 flex flex-col items-center gap-20 text-center">
            
            <img src={ theme == "dark" ? lightPageNotFoundImg : darkPageNotFoundImg } className="select-none   w-72 aspect-square object-cover rounded-full shadow-xl" />

            <h1 className="text-4xl font-gelasio leading-7">Oops, looks like the page is lost.</h1>
            <p className="text-dark-grey text-xl leading-7 -mt-8">This is not a fault, just an accident that was not intentional. Head back to the <Link to="/" className="text-black underline">Home page.</Link></p>

            <div className="mt-auto">
                <img src={theme == "dark" ? lightFullLogo : darkFullLogo} className="h-8 object-contain block mx-auto select-none"/>
                <p className="mt-5 text-dark-grey">Read millions of stories around the world!</p>
            </div>

        </section>
    )
}

export default PageNotFound;