import { NavbarComponent } from "../../components/navbarComponent/navbarComponent";
import { KpisComponent } from "../../components/kpisComponent/kpisComponent";
import { CardComponent } from "../../components/cardComponent/cardComponent";

export const DashboardPage = () => {
    return (
        <NavbarComponent>
            <KpisComponent />
            <CardComponent />
        </NavbarComponent>
    );
};
