import Link from "next/link";
import Header from "../components/Header";
import Bio from "../components/Bio";
import Formation from "../components/Formation";
import Skills from "../components/Skills";
import Languages from "../components/Languagues";
import Experiences from "../components/Experiences";

export default function Resume() {
  return (
    <>
        <p className="text-right mr-5">
          <Link href="/">Back to homepage</Link>
        </p>
      <div className="background-resume m-5">
        <Header />
        <Bio />
        <Formation />
        <Skills />
        <Languages />
        <Experiences />
      </div>
        <p className="text-left ml-5">
          <Link href="/">Back to homepage</Link>
        </p>
    </>
  );
}
