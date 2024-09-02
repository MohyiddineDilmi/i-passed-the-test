import ReactLogo from '../assets/canada_symbol.svg'; // Import the image
import { useTranslation } from 'react-i18next';

function Header() {
  const { t, i18n } = useTranslation();

  return (
    <header className="app-header">
      <img src={ReactLogo} alt="Reactlogo" />
      <h1>{t('start_title')}</h1>
    </header>
  );
}

export default Header;
