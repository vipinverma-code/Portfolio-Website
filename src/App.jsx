import Navbar from "./layout/Navbar";
// ye relative import hai
import Hero from "@/sections/Hero"; 
// alias ki help se import hai ye
 import About from "./sections/About";
 import Projects from "./sections/Projects";
 import Experience from './sections/Experience';
 import Testimonials from './sections/Testimonials';
 import Contact from './sections/Contact'

function App(){
    return(
        <>
        <div className="min-h-screen overflow-x-hidden">
            <Navbar/>
            <main>
                <Hero/>
                <About/>
                <Projects/>
                <Experience/>
                <Testimonials/>
                <Contact/>
            </main>

        </div>

        </>
    )
}

export default App;