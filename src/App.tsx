import "./App.scss";
import Logo from "./components/Logo/Logo";
import Banner from "./components/Banner/Banner";
import Different from "./components/Different-section/Different";

function App() {
    return (
        <div className="wrapper">
            <div className="wrapper__container">
                <Logo />
                <Banner />
                <Different />
            </div>
        </div>
    );
}

export default App;
