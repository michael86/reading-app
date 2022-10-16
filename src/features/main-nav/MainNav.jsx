import React from "react";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentLesson } from "../currentLesson/currentLesson";
import { setScreen } from "../screens/screenSlice";

const MainNav = () => {
  const groups = useSelector((state) => state.groups);
  const dispatch = useDispatch();

  return (
    <>
      <Nav className="main_nav">
        <Container>
          <Nav.Item>
            <Nav.Link
              className="nav_links"
              onClick={() => dispatch(setScreen(0))}
            >
              Home
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              className="nav_links"
              onClick={() => dispatch(setScreen(1))}
            >
              Progress
            </Nav.Link>
          </Nav.Item>

          <NavDropdown title="Lessons" id="lesson-dropdown">
            {groups.groups.map((group, index) => (
              <NavDropdown.Item
                data-lesson={index}
                onClick={() => {
                  dispatch(setScreen(2));
                  dispatch(setCurrentLesson(index));
                }}
                key={Math.random() * 10000000}
              >{`Lesson ${index + 1}`}</NavDropdown.Item>
            ))}
          </NavDropdown>

          <Nav.Item>
            <Nav.Link
              className="nav_links"
              onClick={() => dispatch(setScreen(3))}
            >
              Guessing Game
            </Nav.Link>
          </Nav.Item>
        </Container>
      </Nav>
    </>
  );
};

export default MainNav;
