export default function Skills() {
  return (
    <>
      <h2 className="text-center my-20 text-3xl">Hard Skills</h2>
      <div className="flex md:justify-center code-icon-wraper">
        <img src="./images/html-logo.png" alt="html-icon" className="code-icon"/>
      </div>
      <div className="flex md:justify-center">
        <img src="./images/css-logo.png" alt="css-icon" className="code-icon"/>
        <img src="./images/bootstrap-framework-logo.png" alt="html-icon" className="code-icon"/>
        <img src="./images/tailwind-css.png" alt="tailwind-icon" className="code-icon"/>
      </div>
      <div className="flex md:justify-center">
      <img src="./images/javascript-logo.png" alt="js-icon" className="code-icon"/>
        <img src="./images/react-native-logo.png" alt="react-icon" className="code-icon"/>
      </div>
      <div className="flex md:justify-center">
      </div>
      <div className="flex md:justify-center">
      <img src="./images/nextjs_icon_132160.png" alt="nextjs-icon" className="code-icon"/>
      </div>
      <div className="flex md:justify-center">
        <img src="./images/ruby-logo.png" alt="ruby-icon" className="code-icon"/>
      </div>
      <div className="flex md:justify-center">
        <img src="./images/github.png" alt="github-icon" className="code-icon"/>
      </div>
      <div className="flex md:justify-center">
        <img src="./images/server.png" alt="db-icon" className="code-icon"/>
      </div>

      <div>
        <h3 className="my-20 underline underline-offset-8 text-center">
          <strong>Soft Skills</strong>
        </h3>
        <div className="text-center mb-10">
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
    </>
  );
}
