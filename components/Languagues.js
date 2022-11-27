// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; #TODO --> Adapt the icons & flags with Tailwind
// import { FR, GB, ES } from "country-flag-icons/react/3x2";

export default function Languages() {
  return (
    <div className="">
      <div className="">
        <h3 className="" id="">
          Langues
        </h3>
        <div className="">
          {/* <FR title="Fr" id="flag" className="" /> */}
          <p>Français : Natal</p>
        </div>
        <div className="">
          {/* <GB title="Gb" id="flag" className="" /> */}
          <p>Anglais : lu / parlé</p>
        </div>
        <div className="">
          {/* <ES title="Es" id="flag" className="" /> */}
          <p>Espagnol : B1</p>
        </div>
      </div>
      <div className="">
        <h3 className="">Hobbies</h3>
        <div className="">
          {/* <FontAwesomeIcon icon="fas fa-golf-ball" className="" /> */}
          <p>Golf : hcp 3</p>
        </div>
        <div className="">
          {/* <FontAwesomeIcon icon="fas fa-water" className="" /> */}
          <p>Plongée sous marine</p>
        </div>
        <div className="">
          {/* <FontAwesomeIcon icon="fas fa-running" className="" /> */}
          <p>Course à pied</p>
        </div>
        <div className="">
          {/* <FontAwesomeIcon icon="fas fa-biking" className="" /> */}
          <p>Vélo</p>
        </div>
      </div>
    </div>
  );
}
