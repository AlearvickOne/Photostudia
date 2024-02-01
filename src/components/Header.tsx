import { Link } from 'react-router-dom';

import './header.scss';

import headerLogo from '../assets/head-logo.svg';
import headerVideo from '../assets/head-video.mp4';

// Video element background
const videoEl = (): JSX.Element => {
  return <video src={headerVideo} autoPlay muted loop />;
};

// Upper element header
const headerTop = (): JSX.Element => {
  return (
    <div className='header_top'>
      <div className='header_logo'>
        <img src={headerLogo} alt='header logo img' />
      </div>
      <nav>
        <ul>
          <li>
            <Link to='1'>ЗАЛЫ</Link>
          </li>
          <li>
            <Link to='1'>ОБОРУДОВАНИЕ</Link>
          </li>
          <li>
            <Link to='1'>УСЛУГИ</Link>
          </li>
          <li>
            <Link to='1'>О СТУДИИ</Link>
          </li>
          <li>
            <Link to='1'>КОНТАКТЫ</Link>
          </li>
        </ul>
      </nav>
      <div className='number_phone'>
        <p>+7 (987) 394-58-31</p>
      </div>
    </div>
  );
};

export default function Header(): JSX.Element {
  return (
    <header>
      <div className='header_background'>
        {videoEl()}
        {headerTop()}

        <div className='header_bottom'>
          <div className='header_bottom_title'>
            <h5 className='header_title_low'>-50% на первое посещение по промокоду «водолей»</h5>
            <h1 className='header_title_big'>АРТ ФОТОСТУДИЯ</h1>
          </div>
          <div className='header_button_reserv'>
            <Link to='#!'>ЗАБРОНИРОВАТЬ</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
