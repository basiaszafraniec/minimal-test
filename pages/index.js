import Background from "./background-wave.js";
import Portfolio from "./portfolio.js";

export default function Index() {
    return (
        <div>
            <Background />
            <div className="container-main">
                <div className="border">
                </div>
                <Portfolio/>
            </div>
        </div>


    )
}
