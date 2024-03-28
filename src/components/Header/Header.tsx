import { Link } from "react-router-dom";

import classesCss from "./header.module.scss";

import headerLogo from "../../assets/head-logo.svg";
import { headerVideo } from "../videosAssetsList";

// Video element background
const videoEl = (): JSX.Element => {
  return <video src={headerVideo} autoPlay muted loop />;
};

// Upper element header
const headerTop = (): JSX.Element => {
  return (
    <div className={classesCss.headerTop}>
      <div className={classesCss.headerLogo}>
        <img src={headerLogo} alt="header logo img" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="1">ЗАЛЫ</Link>
          </li>
          <li>
            <Link to="1">ОБОРУДОВАНИЕ</Link>
          </li>
          <li>
            <Link to="1">УСЛУГИ</Link>
          </li>
          <li>
            <Link to="1">О СТУДИИ</Link>
          </li>
          <li>
            <Link to="1">КОНТАКТЫ</Link>
          </li>
        </ul>
      </nav>
      <div className={classesCss.numberPhone}>
        <p>+7 (987) 394-58-31</p>
      </div>
    </div>
  );
};

export default function Header(): JSX.Element {
  return (
    <header>
      <div className={classesCss.headerBackground}>
        {videoEl()}
        {headerTop()}

        <div className={classesCss.headerBottom}>
          <div className={classesCss.headerBottomTitle}>
            <h5 className={classesCss.headerTitleLow}>-50% на первое посещение по промокоду «водолей»</h5>
            <h1 className={classesCss.headerTitleBig}>АРТ ФОТОСТУДИЯ</h1>
          </div>
          <div className={classesCss.headerButtonReserv}>
            <Link to="#!">ЗАБРОНИРОВАТЬ</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
