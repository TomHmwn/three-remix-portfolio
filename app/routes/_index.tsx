import type { MetaFunction } from "@remix-run/node";
import About from "~/components/About";
import Contact from "~/components/Contact";
import Splash from "~/components/Splash";
import Projects from "~/components/Projects";
import Skills from "~/components/Skills";
import Work from "~/components/Work";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="">
      <Splash />
      <About />
      <Work />
      <Projects />
      <Contact />
      <Skills />
    </div>
  );
}
