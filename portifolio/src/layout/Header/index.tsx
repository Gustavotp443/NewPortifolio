import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import * as S from "./header.style";

const Header = () => {
    const [clicked, setClicker] = React.useState<boolean>(false);

    const location = useLocation();

    useEffect(() => {
        setClicker(false);
    }, [location]);

    function handleClick() {
        setClicker(!clicked);
    }

    window.addEventListener("scroll", (e) => {
        setClicker(false);
    });

    return (
        <>
            <S.HeaderContainer>
                <S.HeaderWrapper>
                    <S.Typography>
                        <Link to="/">Gustavo Dev</Link>
                    </S.Typography>
                    <div onClick={handleClick}>
                        {clicked ? <S.closeMenu /> : <S.IconMenu />}
                    </div>
                    <S.Menu style={clicked ? { top: "0" } : { top: "-100vh" }}>
                        <div>
                            <div></div>
                            <Link to="/">Home</Link>
                        </div>
                        {/* <div>
            <div></div>
            <Link to="/projects">Projects</Link>
            </div>
            <div>
            <div></div>
               <Link to="/blog">Blog</Link>
            </div> */}
                    </S.Menu>
                </S.HeaderWrapper>
            </S.HeaderContainer>
        </>
    );
};

export default Header;
