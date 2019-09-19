import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    <Menu {...props}>
      <a className="menu-item" href="/queue">
        Queue
      </a>

      <a className="menu-item" href="/share">
        Share
      </a>

      <a className="menu-item" href="/exitparty">
        Exit Party
      </a>
    </Menu>
  );
};
