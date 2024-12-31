import "./App.scss";
import Logo from "./components/Logo/Logo";
import Banner from "./components/Banner/Banner";
import Different from "./components/Different-section/Different";
import Benefit from "./components/Benefit-section/Benefit-section";
import Carousel from "./components/Carousel-section/Carousel";

function App() {
    return (
        <div className="wrapper">
            <div className="wrapper__container">
                <Logo />
                <Banner />
                <Different />
                <Benefit />
                <Carousel />
            </div>
        </div>
    );
}

export default App;
