import React, { useState } from "react";
import "./style.scss";
import { ListItem } from "../List";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const Dropdown = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ListItem className="drpDwn">
      <ButtonDropdown id="dropped" isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>Sort By</DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={() => props.filteredIssues("resolved")}>Resolved</DropdownItem>
          <DropdownItem onClick={() => props.filteredIssues("unresolved")}>Unresolved</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    </ListItem>
  );
};

export default Dropdown;
