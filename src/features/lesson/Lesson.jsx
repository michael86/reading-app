import React from "react";
import { Card, Container, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { levelCompleted } from "../progress/progressSlice";

const Lesson = () => {
  const currLesson = useSelector((state) => state.currentLesson.currentLesson);
  const groups = useSelector((state) => state.groups.groups);
  const lesson = groups[currLesson];
  const dispatch = useDispatch();

  return (
    <Container>
      {lesson.map((childLesson) => {
        console.log(childLesson);
        return (
          <Card>
            <Card.Title>{childLesson.letter.toUpperCase()}</Card.Title>{" "}
            {/*If get time choose random word or something*/}
            <Card.Body>
              {childLesson.words[0]}
              <img
                src={require(`../../assets/images/group${currLesson + 1}/${
                  childLesson.letter
                }.gif`)}
                alt="letter gif"
              />
            </Card.Body>
            <Card.Footer>
              <Button
                onClick={() => {
                  const audio = new Audio(
                    require(`../../assets/sound_files/group${currLesson + 1}/${
                      childLesson.letter
                    }.mp3`)
                  );
                  audio.play();
                }}
              >
                Play Sound
              </Button>
            </Card.Footer>
          </Card>
        );
      })}

      <Button onClick={() => dispatch(levelCompleted(currLesson))}>
        Mark Group Complete
      </Button>
    </Container>
  );
};

export default Lesson;
