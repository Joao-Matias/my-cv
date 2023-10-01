import Contact from "./components/contact";
import Education from "./components/education";
import Experience from "./components/experience";
import Landing from "./components/landing";
import Projects from "./components/prjects";

function App() {
  return (
    <>
      <Landing />
      <main>
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
    </>
  );
}

export default App;
