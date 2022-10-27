import MaleAvatar from "../assets/undraw_male_avatar_re_hguk.svg";
import "./index.scss";

export default function IndexPage() {
  return (
    <div className="page">
      <h1 class="center">Apika Luca</h1>

      <img class="page-avatar" src={MaleAvatar} />
    </div>
  );
}
