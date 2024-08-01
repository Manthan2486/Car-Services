import "./Userhome.css";
import Usernav from "./Usernav";

export default function Userhome() {

    return (
        <>
            <Usernav></Usernav>
            <div className="userhome">
                <h1>Welcome!</h1>
                <h2>Your car maintenance service is just a click away.</h2>
            </div>
            <hr />
            <div className="userhome">
                <h1>Our Services!</h1>
            </div>
            <div className="row">
                <div className="column">
                    <div class="card">
                        <img className="cimg" src="servicecard7.jpg" alt="" />
                        <p className="carddesc">Car wash:</p><br />
                        <p>Our car wash service is designed to provide your vehicle with a comprehensive,
                            high-quality cleaning experience. We offer a range of packages to suit different needs and budgets,
                            ensuring your car looks its best inside and out.
                        </p>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <img className="cimg" src="servicecard1.jpg" alt="" />
                        <p className="carddesc">Genral Service:</p><br />
                        <p>General car service involves routine maintenance and inspections
                            to ensure your vehicle remains in good working condition. </p>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img className="cimg" src="servicecard2.jpg" alt="" />
                        <p className="carddesc">Engine oil change:</p><br />
                        <p>
                            Changing the engine oil in your car is a crucial maintenance task that
                            keeps the engine running smoothly and extends its lifespan.</p>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img className="cimg" src="servicecard3.jpg" alt="" />
                        <p className="carddesc">Breake pad change:</p><br />
                        <p>To safely and efficiently replace the brake pads on a vehicle to ensure
                            optimal braking performance and safety.</p>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img className="cimg" src="servicecard4.jpg" alt="" />
                        <p className="carddesc">Breake fluid change:</p><br />
                        <p>A brake fluid change is a crucial maintenance task that ensures the braking system
                            operates efficiently and safely. Over time, brake fluid can absorb moisture,
                            leading to reduced braking performance and potential brake failure.
                            This procedure involves draining the old brake fluid, cleaning the system,
                            and refilling it with new, high-quality brake fluid.</p>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <img className="cimg" src="servicecard5.jpg" alt="" />
                        <p className="carddesc">Air Filter change:</p><br />
                        <p>The air filter is a crucial component in a vehicle’s engine system.
                            It prevents harmful particles such as dust, dirt, and debris from
                            entering the engine’s combustion chamber. By ensuring that only clean
                            air enters the engine, the air filter helps maintain optimal engine performance,
                            fuel efficiency, and longevity.</p>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <img className="cimg" src="servicecard6.jpg" alt="" />
                        <p className="carddesc">Engine tunning:</p><br />
                        <p>Engine tuning refers to the process of modifying and optimizing an 
                            engine's performance parameters to achieve desired outcomes such as increased power, 
                            improved fuel efficiency, or enhanced drivability. </p>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <img className="cimg" src="servicecard8.jpg" alt="" />
                        <p className="carddesc">Spark plug change:</p><br />
                        <p>To ensure optimal engine performance, fuel efficiency, 
                            and emission control by replacing old or worn spark plugs with new ones.</p>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <img className="cimg" src="servicecard9.jpg" alt="" />
                        <p className="carddesc">Windscreen wiper change:</p><br />
                        <p>The Windscreen Wiper Change service involves the removal and replacement of 
                            worn or damaged windscreen wipers to ensure optimal visibility and driving safety. 
                            This service is crucial for maintaining effective windshield cleaning, 
                            especially in adverse weather conditions.</p>
                    </div>
                </div>
            </div>
        </>
    );
}