import React, { useState } from "react";
import "./style.scss";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { ListItem } from "../List";

const Dropdown = props => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ListItem className="drpDwn">
      <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>Sort By</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Resolved</DropdownItem>
          <DropdownItem>Unresolved</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    </ListItem>
  );
};

export default Dropdown;
