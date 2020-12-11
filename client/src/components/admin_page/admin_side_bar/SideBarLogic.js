import React, { useEffect, useState } from "react";
import { SideBarContainer, SideBarButton } from '../../styles/styled_admin_bar';

export const AdminBarLogic = ({ width, height, children }) => {
    const [xPosition, setX] = useState(-width);

    const toggleMenu = () => {
        if (xPosition < 0) {
            setX(0);
        } else {
            setX(-width);
        }
    };

    useEffect(() => {
        setX(0);
    }, []);

    return (
        <>
            <SideBarContainer value={xPosition} pWidth={width} pHeight={height}>
                <SideBarButton
                    onClick={() => toggleMenu()}
                    pWidth={width}
                ><h1>boton</h1></SideBarButton>
                <div>{children}</div>
            </SideBarContainer>
        </>
    );
};