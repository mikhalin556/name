import { Outlet } from "react-router-dom";
import { HeaderComponent } from "../Components/HeaderComponent";
import { FooterComponent } from "../Components/FooterComponent";

export function Root() {

    return (
        <>
            <div className="wrapper">
                <HeaderComponent/>
                <main className="main">
                    <div className="container">
                        <Outlet/>
                    </div>
                </main>
                <FooterComponent/>
            </div>
        </>
    )
}