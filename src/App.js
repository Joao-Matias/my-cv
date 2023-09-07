import Education from './components/education/education.component';
import Experience from './components/experience';
import Landing from './components/landing';
import Projects from './components/prjects';

function App() {
  return (
    <>
      <Landing />
      <main>
        <Projects />
        <Experience />
        <Education />
      </main>
    </>
  );
}

export default App;
