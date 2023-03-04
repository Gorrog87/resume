import Link from "next/link";
import Header from "../components/Header";
import Bio from "../components/Bio";
import Formation from "../components/Formation";
import Skills from "../components/Skills";
import Languages from "../components/Languagues";
import Experiences from "../components/Experiences";


export default function Resume() {
  // const button = document.getElementById("runaway-btn");

  // const animateMove = (element, prop, pixels) => {
  //   anime({
  //     targets: element,
  //     [prop]: `${pixels}px`,
  //     easing: "easeOutCirc",
  //   });
  // };

  // ["mouseover", "click"].forEach(function (el) {
  //   button.addEventListener(el, function (event) {
  //     const top = getRandomNumber(window.innerHeight - this.offsetHeight);
  //     const left = getRandomNumber(window.innerWidth - this.offsetWidth);

  //     animateMove(this, "left", left).play();
  //     animateMove(this, "top", top).play();
  //   });
  // });

  // const getRandomNumber = (num) => {
  //   return Math.floor(Math.random() * (num + 1));
  // };

  return (
    <>
      <p className="text-right mr-5 mt-5 homepage-link">
        <Link href="/" id="runaway-btn">
          Back to homepage
        </Link>
      </p>
      <div className="background-resume m-5">
        <Header />
        <Bio />
        <Formation />
        <Skills />
        <Languages />
        <Experiences />
      </div>
      <p className="text-left ml-5 mb-5">
        <Link href="/">Back to homepage</Link>
      </p>
    </>
  );
}
