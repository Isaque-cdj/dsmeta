import logo from '../../assets/img/logo.svg'

import './styles.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por&nbsp; 
                    <a href="https://www.instagram.com/isaque_cdj/">@isaque_cdj</a>
                </p>
            </div>

        </header>
    )
}

export default Header
