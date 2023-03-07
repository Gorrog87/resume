export default function Formation() {
  return (
    <>
      <div className="mb-10">
        <h4 className="text-center my-20 text-3xl">
          <strong>Formations</strong>
        </h4>

        <div className="formation">
          <div className="flex justify-center">
            <a
              href="https://openclassrooms.com/fr/"
              target="_blank"
              rel="noreferrer"
              className="shadowed"
            >
              <img
                src="https://is4-ssl.mzstatic.com/image/thumb/Purple116/v4/a2/bd/f1/a2bdf1af-0d82-33b0-d5f1-8b7e452d21d3/AppIcon-1x_U007emarketing-0-6-0-85-220.png/1200x600wa.png"
                alt="openclassrooms-logo"
                className="w-32 mb-5 "
                id="logo"
              ></img>
            </a>
          </div>
          <p className="text-center">
            en alternance : Concepteur / Développeur d'applications web
            JavaScript / ReactJs
          </p>
        </div>

        <div className="formation">
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
            Paris (janvier - mars 2022) : Concepteur / Développeur
            d'applications web
          </p>
        </div>
      </div>
    </>
  );
}
