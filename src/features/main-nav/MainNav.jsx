import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getLengthGroups } from "../groups/groupsSlice";

const MainNav = () => {
  const groups = useSelector((state) => state.groups);

  return (
    <>
      <Nav>
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>

        <NavDropdown title="Lessons" id="lesson-dropdown">
          {groups.groups.map((group, index) => (
            <NavDropdown.Item data-lesson={index}>{`Lesson ${
              index + 1
            }`}</NavDropdown.Item>
          ))}
        </NavDropdown>
      </Nav>
    </>
  );
};

export default MainNav;
