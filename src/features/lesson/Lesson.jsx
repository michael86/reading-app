import React from "react";
import { Card, Container, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { levelCompleted } from "../progress/progressSlice";

const Lesson = () => {
  const currLesson = useSelector((state) => state.currentLesson.currentLesson);
  const groups = useSelector((state) => state.groups.groups);
  const lesson = groups[currLesson];
  const dispatch = useDispatch();

  return (
    <Container className="mt-4">
      <Row>
        {lesson.map((childLesson) => {
          return (
            <Col xs={12} lg={6}>
              <Card className="mt-3">
                <Card.Title className="text-center">
                  {childLesson.letter.toLowerCase()}
                </Card.Title>{" "}
                {/*If get time choose random word or something*/}
                <Card.Body className="d-flex flex-column align-content-center justify-content-center text-center">
                  {childLesson.words[0]}
                  <img
                    src={require(`../../assets/images/group${currLesson + 1}/${
                      childLesson.letter
                    }.gif`)}
                    alt="letter gif"
                    className="w-25"
                  />
                </Card.Body>
                <Card.Footer>
                  <Button
                    onClick={() => {
                      const audio = new Audio(
                        require(`../../assets/sound_files/group${
                          currLesson + 1
                        }/${childLesson.letter}.mp3`)
                      );
                      audio.play();
                    }}
                  >
                    Play Sound
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          );
        })}
      </Row>

      <Button onClick={() => dispatch(levelCompleted(currLesson))}>
        Mark Group Complete
      </Button>
    </Container>
  );
};

export default Lesson;
