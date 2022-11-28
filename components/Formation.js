export default function Formation() {
  return (
    <>
      <div className="mb-10">
        <h3 className="text-center my-20 underline underline-offset-8 ">
          <strong>Formations</strong>
        </h3>
        <div className="flex justify-center">
          <a
            href="https://openclassrooms.com/fr/"
            target="_blank"
            rel="noreferrer"
            className=""
          >
            <img
              src="https://www.anaf.fr/wp-content/uploads/2020/09/OpenClassroom_LOGO.png"
              alt="openclassrooms-logo"
              className="w-32 mb-5"
              id="logo"
            ></img>
          </a>
        </div>
        <p className="text-center">
          en alternance : Concepteur / Développeur d'applications web JavaScript
          / ReactJs
        </p>
        <div className="flex justify-center">
          <a
            href="https://www.lewagon.com/fr"
            target="_blank"
            rel="noreferrer"
            className=""
          >
            <img
              src="https://www.frenchtechbordeaux.com/wp-content/uploads/2019/01/le-wagon-color.png"
              alt="Le Wagon Logo"
              className="w-32 mt-10 mb-5"
              id="logo"
            />
          </a>
        </div>
        <p className="text-center">
          Paris (janvier - mars 2022) : Concepteur / Développeur d'applications
          web
        </p>
      </div>
    </>
  );
}
