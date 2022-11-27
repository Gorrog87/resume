import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Header() {
  return (
    <>
      <div className="text-center my-5 md:flex md:items-center md:justify-center pt-5">
        <div className="flex justify-center">
          <img
            className="rounded"
            id="picture"
            src="https://avatars.githubusercontent.com/u/88392395?v=4"
            alt="Maxime Gourgues"
            width="180"
            height="180"
          />
        </div>

        <div className="">
          <h1>Maxime Gourgues</h1>
          <h4 className="md:ml-4">Développeur frontend junior</h4>
          <div className="">
            <a
              href="https://github.com/Gorrog87"
              rel="noreferrer"
              target="_blank"
              className=""
              id=""
            ><FontAwesomeIcon icon="fab fa-github-square" /></a>
            <a
              href="https://www.linkedin.com/in/maxime-gourgues/"
              rel="noreferrer"
              target="_blank"
              className=""
              id=""
            ></a>
            <a
              href="https://troopl.com/gourguesmaxime"
              rel="noreferrer"
              target="_blank"
              className=""
              id=""
            ></a>
          </div>
        </div>
      </div>
    </>
  );
}
