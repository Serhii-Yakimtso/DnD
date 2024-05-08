import { useState } from 'react';
import LangSelection from '../LangSelection/LangSelection';
import Navigation from '../Navigation/Navigation';

import css from './Header.module.css';

export default function Header({ children }) {
  const [lang, setLang] = useState('ua');

  const changeLang = newLang => {
    setLang(newLang);
  };

  return (
    <header className={css.header}>
      <Navigation className={css.navigation} pageLang={lang} />
      <LangSelection className={css.lang} changeLang={changeLang} />
      {children}
    </header>
  );
}
