import Link from "next/link";
import Header from "../components/Header";
import Bio from "../components/Bio";
import Formation from "../components/Formation";
import Skills from "../components/Skills";
import Languages from "../components/Languagues";
import Experiences from "../components/Experiences";


export default function Resume(){
    return(
        <>
            <Header />
            <Bio />
            <Formation />
            <Skills />
            <Languages />
            <Experiences />
            <p><Link href="/">Back to the homepage</Link></p>
        </>
    );
}