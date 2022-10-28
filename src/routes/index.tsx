import { Link } from "wouter-preact";
import MaleAvatar from "../assets/undraw_male_avatar_re_hguk.svg";
import "./index.scss";

export default function IndexPage() {
  return (
    <div className="page">
      <h1 class="center">Apika Luca</h1>

      <img class="page-avatar" src={MaleAvatar} />

      <p class="center">I'm Brayan, a boy who learns very quickly.</p>

      <p class="center">
        It's been 4 years since my first touch with web development and I
        learned how to make little complex web games.
      </p>

      <p class="center">
        After that, I make
        <Link href="/proyect/nasgar"> Nasgar Proyect </Link>
        web
      </p>
    </div>
  );
}
