import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import GroupCard from "../groups/GroupCard";

const ProgressPage = () => {
  const groups = useSelector((state) => state.groups);
  const progress = useSelector((state) => state.progress.progress);

  return (
    <>
      <Container>
        <h1 className="text-center">Progress Page</h1>
        <Row>
          {groups.groups.map((group, index) => (
            <Col xs={12} lg={6}>
              <GroupCard
                group={group}
                groupIndex={index}
                completed={progress.includes(index)}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ProgressPage;
