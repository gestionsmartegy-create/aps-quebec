import { Route, Switch } from "wouter";
import APSHome from "./pages/APSHome";
import ServicesPage from "./pages/ServicesPage";
import PourQui from "./pages/PourQui";
import Technologie from "./pages/Technologie";
import DevenirAPS from "./pages/DevenirAPS";
import Partenaires from "./pages/Partenaires";
import APropos from "./pages/APropos";
import SoutienCommunautaire from "./pages/SoutienCommunautaire";
import Contact from "./pages/Contact";
import APSConnect from "./pages/APSConnect";
import DevenirPartenaire from "./pages/DevenirPartenaire";
import SanteMentale from "./pages/SanteMentale";

export default function App() {
  return (
    <Switch>
      <Route path="/" component={APSHome} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/pour-qui" component={PourQui} />
      <Route path="/soutien-communautaire" component={SoutienCommunautaire} />
      <Route path="/technologie" component={Technologie} />
      <Route path="/devenir-aps" component={DevenirAPS} />
      <Route path="/partenariats" component={Partenaires} />
      <Route path="/a-propos" component={APropos} />
      <Route path="/contact" component={Contact} />
      <Route path="/aps-connect" component={APSConnect} />
      {/* Legacy / secondary routes */}
      <Route path="/devenir-partenaire" component={DevenirPartenaire} />
      <Route path="/sante-mentale" component={SanteMentale} />
      {/* Fallback */}
      <Route component={APSHome} />
    </Switch>
  );
}
