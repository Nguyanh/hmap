import logo from '../logo.png';

function NavBar() {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <a className='navbar-brand' href='home'>
                <img
                    source={logo}
                    alt=''
                />
                HMAP
            </a>
            <button class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                <ul class='navbar-nav mr-auto'>
                    <li className='nav-item active'>
                        <a className='nav-link' href='home'>
                            Home
                            <span className='sr-only'></span>
                        </a>
                    </li>
                    
                </ul>

            </div>
        </nav>
    );
};

export default NavBar;