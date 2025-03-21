import Navbar from "../components/Navbar"
import About from "../components/About";
import ParticlesBackground from "../components/Particle";
function Home(){
    return (
      <main>
        <Navbar />
        <div className="particle-container">
        <ParticlesBackground />
        </div>
        <div className="hero">
          <h1>HKIS Lost and Found App</h1>
          <a href="/find">
            <button>Click here to find an item</button>
          </a>
        </div>
        <About />
      </main>
    );
} 
export default Home; 