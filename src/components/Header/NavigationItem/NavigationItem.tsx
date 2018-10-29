import * as React from "react";
import {NavLink} from "react-router-dom";
import classes from "./NavigationItem.scss";

interface Props {
  children: any;
  link: string;
  exact?: boolean;
}

const navigationItem = (props: Props) => {
  return (
    <li className={classes.navigationItem}>
      <NavLink
        to={props.link}
        exact={props.exact}
        activeClassName={classes.active}>
        {props.children}
      </NavLink>
    </li>
  );
};

export default navigationItem;
