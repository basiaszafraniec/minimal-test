
export default function Portfolio() {

    return (

        <div>
            <div className="name-title">
                <div>
                    <h1>Basia <br />Szafraniec</h1>
                    <h3>Web Developer</h3>
                </div>

            </div>
            <div className="card-container">

                <div className="card">
                    <h1>Slidemania</h1>
                    <div className="card-inner">
                        <div className="portf-left">
                            <a href="https://suwmania.basiaszafraniec.dk" target="blank">
                                <video src="suwmania-480px.mov" autoPlay muted loop>
                                </video>
                            </a>
                            <div>
                                <a href="https://suwmania.basiaszafraniec.dk" target="blank">
                                    <button className="nav-btn">
                                        try to beat my score
                                    </button>
                                </a>
                                <a href="https://github.com/basiaszafraniec/suwmaniaB" target="blank">
                                    <img src="github-logo-long-white.png" className="logo"></img>
                                </a>

                            </div>

                        </div>

                        <div className="text-right">
                            <p>For my first JavaScript app I really wanted to try something fun. I wanted to make an inline version of a little toy I used to play with as a kid. I started with learning sme basic HTML and CSS as well as some simple JS functions. I quickly realised this was gonna be way more complicated than I expected, and in the end I had to learn some concepts that felt more advanced at the time, but I really did enjoy that process :)
                                I hope to revisit that project soon and see how I could improve it now with some extra knowledge. </p>
                            <h2>What I learned</h2>
                            <ul>
                                <li>HTML, PHP, JavaScript</li>
                                <li>PHP</li>
                                <li>Http requests</li>
                                <li>DOM manipulation</li>
                                <li>Asynchronous functions</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <h1>little three.js test room</h1>
                    <div className="card-inner">
                        <div className="portf-left">
                            <video src="3d-room.mov" autoPlay muted loop>
                            </video>
                            <div>
                                <a href="https://github.com/basiaszafraniec/33d_test" target="blank">
                                    <img src="github-logo-long-white.png" className="logo"></img>
                                </a>
                            </div>
                        </div>
                        <div className="text-right">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus corporis saepe dolore nobis quisquam quis enim, cumque odit ipsa magnam facilis culpa vel numquam nostrum voluptatibus repudiandae eaque minus a.</p>
                            <h2>What I learned</h2>
                            <ul>
                                <li>Three.js basics</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <h1>python space game</h1>
                    <div className="card-inner">
                        <div className="portf-left">
                            <video src="stars-game.mov" autoPlay muted loop>
                            </video>
                            <div>
                                <a href="https://github.com/basiaszafraniec/stars_game2" target="blank">
                                    <img src="github-logo-long-white.png" className="logo"></img>
                                </a>

                            </div>

                        </div>

                        <div className="text-right">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus corporis saepe dolore nobis quisquam quis enim, cumque odit ipsa magnam facilis culpa vel numquam nostrum voluptatibus repudiandae eaque minus a.</p>
                            <h2>What I learned</h2>
                            <ul>
                                <li>Python classes</li>
                                <li>PyGame</li>
                                <li>Animation Loops</li>
                                <li>Numpy</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* <div className="card"><h2>pixels</h2><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus corporis saepe dolore nobis quisquam quis enim, cumque odit ipsa magnam facilis culpa vel numquam nostrum voluptatibus repudiandae eaque minus a.</p></div>
                <div className="card"><h2>blender stuff</h2><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus corporis saepe dolore nobis quisquam quis enim, cumque odit ipsa magnam facilis culpa vel numquam nostrum voluptatibus repudiandae eaque minus a.</p></div>
                <div className="card"><h2>cube sim</h2></div> */}
                <a>
                    <h2>Reach out!</h2>
                </a>
            </div>

        </div>



    )
}
