// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; #TODO --> import some fontawesome icons or others icons with tailwind acceptance

export default function Skills() {
  return (
    <>
      <div className="">
        <div className="">
          <h3 className="">Hard Skills</h3>

          <div className="">
            {/* <FontAwesomeIcon
            icon="fa-brands fa-html5"
            id="html"
            className="iconHover"
          /> */}
            <p>HTML</p>
          </div>

          <div className="">
            {/* <FontAwesomeIcon
              icon="fa-brands fa-css3-alt"
              id="css"
              className="iconHover"
            /> */}
            <p>CSS</p>
          </div>

          <div className="">
            {/* <FontAwesomeIcon
              icon="fa-brands fa-js-square"
              id="js"
              className="iconHover"
            /> */}
            <p>JavaScript</p>
          </div>

          <div className="">
            {/* <FontAwesomeIcon
              icon="fa-solid fa-gem"
              id="ruby"
              className="iconHover"
            /> */}
            <p>Ruby / Rails</p>
          </div>

          <div className="">
            {/* <FontAwesomeIcon
              icon="fa-brands fa-react"
              id="react"
              className="iconHover"
            /> */}
            <p>React</p>
          </div>

          <div className="">
            {/* <FontAwesomeIcon
              icon="fa-brands fa-git-square"
              id="git"
              className=""
            /> */}
            <p>Git / Github</p>
          </div>

          <div className="">
            {/* <FontAwesomeIcon
              icon="fa-solid fa-database"
              id="sql"
              className=""
            /> */}
            <p>SQL</p>
          </div>

          <div className="">
            {/* <FontAwesomeIcon
              icon="fa-solid fa-server"
              id="heroku"
              className=""
            /> */}
            <p>Heroku</p>
          </div>
        </div>
        <div>
          <h3 className="">Soft Skills</h3>
          <div className="">
            <div className="">
              {/* <FontAwesomeIcon icon="fas fa-bullseye" className="iconHover" /> */}
              <p>Cibler les demandes client</p>
            </div>
            <div className="">
              {/* <FontAwesomeIcon
                icon="fa-solid fa-palette"
                className="iconHover"
              /> */}
              <p>UI / UX</p>
            </div>
            <div className="">
              {/* <FontAwesomeIcon icon="fas fa-handshake" className="iconHover" /> */}
              <p>Resolution des conflits</p>
            </div>
            <div className="">
              {/* <FontAwesomeIcon icon="fas fa-comments" className="iconHover" /> */}
              <p>Bonne communication</p>
            </div>
            <div className="">
              {/* <FontAwesomeIcon
                icon="fas fa-assistive-listening-systems"
                className="iconHover"
              /> */}
              <p>Empathique</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
