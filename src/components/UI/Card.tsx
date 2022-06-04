import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
import "./Card.css";

const Card = (props: { className: string; children: any; }) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
