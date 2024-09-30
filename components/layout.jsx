export default function Layout({ children }) {
    return (
        <div className="container-main">
            <div className="border">
            </div>
            <div className="scrollable">
                <nav>
                    <button className="nav-btn" onClick={() => children.changeContent('portfolio')}>Portfolio</button>
                    <div>
                        <a href="CV-2024.pdf" download>
                            <button className="nav-btn">Download CV</button>
                        </a>
                        <button className="nav-btn" onClick={() => children.changeContent('about')}>About Me</button>
                        <button className="nav-btn" onClick={() => children.changeContent('contact')}>Contact Me</button>
                    </div>

                </nav>
                {children.content}
            </div>
        </div>
    );
};