import Navbar from "../components/Navbar"
import About from "../components/About";
import './Home.css'; // Create this file for your styles

function Home(){
    return (
      <>
        <section className="hero-section">
          <h1 className="main-heading">HKIS Lost and Found</h1>
        </section>
        <section className="scroll-section">
          <div className="section-content">
            <h2 className="section-heading">Find Lost Items</h2>
            <p>Lost something? Look through our database of found items to locate your lost belongings.</p>
            <a href="/find">
              <button className="primary-button">Search Items</button>
            </a>
          </div>
        </section>
        <section className="scroll-section">
          <div className="section-content">
            <h2 className="section-heading">Report Found Items</h2>
            <p>Found something? Help others by submitting items you've found on campus.</p>
            <a href="/post">
              <button className="primary-button">Report Item</button>
            </a>
          </div>
        </section>
        <section className="content-section">
          <Navbar />
          <div className="hero">
            <h1>HKIS Lost and Found App</h1>
            <a href="/find">
              <button>Click here to find an item</button>
            </a>
          </div>
          <About />
        </section>
      </>
    );
} 
export default Home; 