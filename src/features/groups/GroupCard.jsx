import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setCurrentLesson } from "../currentLesson/currentLesson";
import { setScreen } from "../screens/screenSlice";

const GroupCard = ({ group, groupIndex, completed }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Card className="mt-3">
        <Card.Header>{`Group ${groupIndex + 1}`}</Card.Header>
        <Card.Body>
          In this lesson you'll be learning{" "}
          <ListGroup>
            {group.map((i) => (
              <ListGroup.Item> {i.letter}</ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
        <Card.Footer>
          {completed && (
            <Button disabled className="btn-success">
              Lesson Completed
            </Button>
          )}
          {!completed && (
            <Button
              onClick={() => {
                dispatch(setCurrentLesson(groupIndex));
                dispatch(setScreen(3));
              }}
            >
              Start Lesson
            </Button>
          )}
        </Card.Footer>
      </Card>
    </>
  );
};

export default GroupCard;
