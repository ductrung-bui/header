import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'
import logo from './assets/mysql-logo.svg'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

function App() {

  return (
    <div>
      <header className='header'>
        <div className='header-first'>
          <div className='container-logo'>
            <img src={logo} className='logo' />
          </div>
          <div style={{ width: '80%' }} >
            <div className='text' style={{ display: "flex" }}>
              <div style={{ opacity: "0.5" }} >The world's most divopular open source database</div>
              <div className='search-icon'>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
              <div className='contact'>
                <a className='contact-a contact-a-first' href='#'>
                  Contact MySQL
                </a>
                <a className='contact-a' href='#'>
                  Login
                </a>
                <a className='contact-a' href='#'>
                  Register
                </a>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div>
                <ul className='ul-list'>
                  <li className='li-list li-list-first'>MYSQL.COM</li>
                  <li className='li-list'>DOWNLOADS</li>
                  <li className='li-list'>DOCUMENTATION</li>
                  <li className='li-list'>DEVELOPER ZONE</li>
                </ul>
              </div>
              <div className='logo-dev'>
                <div className='icon-dev'><FontAwesomeIcon icon={faFacebookF} /></div>
                <div className='icon-dev'><FontAwesomeIcon icon={faTwitter} /></div>
                <div className='icon-dev'><FontAwesomeIcon icon={faLinkedinIn} /></div>
                <div className='icon-dev'><FontAwesomeIcon icon={faYoutube} /></div>
              </div>
            </div>
          </div>
        </div>

      </header>
      <div className='header-second'>
        <div>
          <ul className='header-second-ul'>
            <li className='header-second-li'>Products</li>
            <li className='header-second-li'>Cloud</li>
            <li className='header-second-li'>Services</li>
            <li className='header-second-li'>Partners</li>
            <li className='header-second-li'>Customers</li>
            <li className='header-second-li'>Why MySQL?</li>
            <li className='header-second-li'>News & Events</li>
            <li className='header-second-li'>How To Buy</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
