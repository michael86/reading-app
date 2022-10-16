import React from "react";
import { Nav, NavDropdown, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getLengthGroups } from "../groups/groupsSlice";

const MainNav = () => {
  const groups = useSelector((state) => state.groups);

  return (
    <>
      <Nav className="main_nav">
        <Container>
          <Nav.Item>
            <Nav.Link className="nav_links" href="/">
              Home
            </Nav.Link>
          </Nav.Item>

          <NavDropdown title="Lessons" id="lesson-dropdown">
            {groups.groups.map((group, index) => (
              <NavDropdown.Item data-lesson={index}>{`Lesson ${
                index + 1
              }`}</NavDropdown.Item>
            ))}
          </NavDropdown>
        </Container>
      </Nav>
    </>
  );
};

export default MainNav;
