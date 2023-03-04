

export default function Languages() {
  return (
    <div className="md:flex md:justify-evenly">
      <div className="text-center">
        <h3 className="my-20 underline underline-offset-8 text-center">
          <strong>Langues</strong>
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
      <div className="text-center">
        <h3 className="my-20 underline underline-offset-8 text-center"><strong>Hobbies</strong> 
        </h3>
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
