import { Outlet } from "react-router-dom"; 
import { HeaderComponent } from "../Components/HeaderComponent"; 
import { FooterComponent } from "../Components/FooterComponent"; 
import { AppContext } from "../content/AppContext";
import { useState } from "react";
import { Cart } from "../Components/Cart";
 
export function Root() { 

    const [Modal, setModal] = useState(false)

    return ( 
        <> 
            <AppContext.Provider value={[Modal, setModal]}>
                <div className="wrapper"> 
                    {Modal ? <Cart/> : ''}
                    <HeaderComponent/> 
                    <main className="main"> 
                        <div className="container"> 
                            <Outlet/> 
                        </div> 
                    </main> 
                    <FooterComponent/> 
                </div> 
            </AppContext.Provider>
        </> 
    ) 
}