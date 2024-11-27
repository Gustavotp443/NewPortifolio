import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../layout/Header";
import Home from "../pages/home";
import GlobalStyles from "../styles/global.styles";
import { ThemeProvider } from "styled-components";
import theme from "../themes/theme";
// import MainPage from "../pages/Projects";
import Footer from "../layout/Footer";
import Error from "../pages/error";

const Routering = () => {
    return (
        <div>
            <Router>
                <ThemeProvider theme={theme}>
                    <GlobalStyles />
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        {/* <Route path="/projects" element={<MainPage/>}/> */}
                        <Route path="*" element={<Error />} />
                    </Routes>
                    <Footer />
                </ThemeProvider>
            </Router>
        </div>
    );
};

export default Routering;
