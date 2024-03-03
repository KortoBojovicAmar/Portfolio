import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoK from '../../assets/images/logo-Kondulé.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SidebarMobile = () => (
    <div className='nav-bar-mobile'>
        <nav>
            <Link className='logo' to='/'>
            <img src={LogoK} alt='logo'/>
            </Link>
            <ul>
                <NavLink exact='true' activeclassname='active' className='about-link' to='/a_propos'>
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
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