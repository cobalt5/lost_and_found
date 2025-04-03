import React from "react";
import Navbar from "../components/Navbar";

function BusLink() {
    return (
        <main id="buslink">
            <Navbar />
            <section>
                <h1 className="lfh1">Bus Information</h1>
                <div className="bus-content">
                    <p>If you lost something on the bus, and it isn't at the main office, please contact the bus company directly. Thank you!</p>
                    <a href="https://www.kcbh.com.hk/local_nonfranchised.php?lang=en" target="_blank" rel="noopener noreferrer" className="bus-link">
                        Visit Bus Service Website
                    </a>
                </div>
            </section>
        </main>
    );
}

export default BusLink; 