import { NavLink } from 'react-router-dom';
import { langUserInterFace } from '../../data/langUI';
import css from './Navigation.module.css';
import clsx from 'clsx';

const getNavlinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation({ pageLang }) {
  return (
    <nav className={css.nav}>
      <NavLink className={getNavlinkClass} to="/">
        {langUserInterFace[`${pageLang}`].navigate.homePage}
      </NavLink>
      <NavLink className={getNavlinkClass} to="/character-list">
        {langUserInterFace[`${pageLang}`].navigate.characterList}
      </NavLink>
    </nav>
  );
}
