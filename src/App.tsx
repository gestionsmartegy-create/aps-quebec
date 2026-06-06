import { Route, Switch } from "wouter";
import APSHome from "./pages/APSHome";
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
      <Route path="/services/livraison" component={APSLivraison} />
      <Route path="/services/accompagnement" component={APSAccompagnement} />
      <Route path="/services/sortie-hopital" component={APSSortieHopital} />
      <Route path="/services/residences" component={APSResidences} />
      <Route path="/services/sante-mentale" component={APSSanteMentale} />
      <Route path="/services/iot" component={APSIoT} />
      {/* Fallback */}
      <Route component={APSHome} />
    </Switch>
  );
}
