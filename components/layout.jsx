export default function Layout({ children }) {
    return (
        <div className="container-main">
            <div className="border">
            </div>
            <div className="scrollable">
                <nav>
                    <button className="nav-btn" onClick={() => children.changeContent('portfolio')}>Portfolio</button>
                    <div>
                        <button className="nav-btn" onClick={() => children.changeContent('about')}>About Me</button>
                        <button className="nav-btn" onClick={() => children.changeContent('contact')}>Contact Me</button>
                    </div>

                </nav>
                {children.content}
            </div>
        </div>
    );
};