import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import newLogo from '../../assets/images/nouveau_logo_portfolio.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SidebarMobile = () => (
    <div className='nav-bar-mobile'>
        <nav>
            <Link className='logo' to='/'>
            <img src={newLogo} alt='logo'/>
            </Link>
            <ul>
                <NavLink exact='true' activeclassname='active' className='about-link' to='/a_propos'>
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='projects-link' to='/mes_projets'>
                    <FontAwesomeIcon icon={faLaptopCode} color='#4d4d4e' />
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
                </NavLink>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/korto-bojovitch/'>
                        <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://github.com/KortoBojovicAmar'>
                        <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
);

export default SidebarMobile;