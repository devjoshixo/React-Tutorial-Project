import classes from './MainNavigation.module.css';
import { NavLink } from 'react-router-dom';

const MainNavigation = () => {
  return (
    <nav className={`${classes.header} ${classes.nav}`}>
      <h1 className={classes.logo}>Great Quotes</h1>
      <ul>
        <li>
          {/* <a href='/quotes'>All Quotes</a> */}
          <NavLink to='/quotes' activeClassName={classes.active}>
            All Quotes
          </NavLink>
        </li>
        <li>
          <a href='/new-quote'>Add a Quote</a>
          <NavLink to='/new-quote' activeClassName={classes.active}></NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
