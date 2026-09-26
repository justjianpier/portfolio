import { AboutMe } from "./components/about-me";
import { ContactMe } from "./components/contact";
import { Education } from "./components/education";
import { Experience } from "./components/experience";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Projects } from "./components/projects";
import { Skills } from "./components/skills";

export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <ContactMe />
      </main>
      <Footer />
    </>
  );
}
