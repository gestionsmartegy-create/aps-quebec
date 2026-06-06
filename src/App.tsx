import { Route, Switch } from "wouter";
import APSHome from "./pages/APSHome";
import DevenirPartenaire from "./pages/DevenirPartenaire";
import APropos from "./pages/APropos";
import ServicesPage from "./pages/ServicesPage";
import SanteMentale from "./pages/SanteMentale";
import Technologie from "./pages/Technologie";
import Partenaires from "./pages/Partenaires";
import {
  APSLivraison,
  APSAccompagnement,
  APSSortieHopital,
  APSResidences,
  APSSanteMentale,
  APSIoT,
} from "./pages/APSServices";

export default function App() {
  return (
    <Switch>
      <Route path="/" component={APSHome} />
      <Route path="/a-propos" component={APropos} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/sante-mentale" component={SanteMentale} />
      <Route path="/technologie" component={Technologie} />
      <Route path="/partenaires" component={Partenaires} />
      <Route path="/services/livraison" component={APSLivraison} />
      <Route path="/services/accompagnement" component={APSAccompagnement} />
      <Route path="/services/sortie-hopital" component={APSSortieHopital} />
      <Route path="/services/residences" component={APSResidences} />
      <Route path="/services/sante-mentale" component={APSSanteMentale} />
      <Route path="/services/iot" component={APSIoT} />
      <Route path="/devenir-partenaire" component={DevenirPartenaire} />
      {/* Fallback */}
      <Route component={APSHome} />
    </Switch>
  );
}
