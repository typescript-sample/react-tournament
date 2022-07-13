import React, { ButtonHTMLAttributes } from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";

const cx = classNames.bind(styles);
type ButtonTestProps = {
  // type: string;
};

export const ButtonTest = (props: ButtonTestProps) => {
  const [isClicked, setIsClicked] = React.useState(false);

  const classes = cx(
    styles.btn,
    isClicked ? cx(styles.red) : cx(styles.origin)
  );
  return (
    <button onClick={() => setIsClicked(true)} className={cx(classes)}>
      Click Me !
    </button>
  );
};
