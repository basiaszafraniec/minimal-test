import Background from "../components/background-wave.jsx";
import Portfolio from "./portfolio.js";
import Link from 'next/link';


export default function Index() {
    return (
        <div>
            <Background />
            <div className="container-main">

                <Portfolio/>
            </div>
        </div>


    )
}
