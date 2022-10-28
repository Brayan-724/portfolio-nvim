import NasgarLogo from "~/assets/nasgar.png";
import "../index.scss";

export default function NasgarProyectPage() {
  return (
    <div class="page">
      <h1 class="center">Nasgar Network</h1>

      <img class="page-avatar" src={NasgarLogo} />

      <p class="center">
        After that, I did my first big web project, a web app for a minecraft
        server network. That web had a beautiful and consistent design (by me),
        a news page with markdown support, a shop system, also had a complete
        system to modify everything and connection to the minecraft server
        without custom plugin. The shop system had a cart, payments, offers, and
        coupons. The reason for not showing it is that I lost access to the
        repository and the boss overwrote my work.
      </p>
    </div>
  );
}
