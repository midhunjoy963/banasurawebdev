import { Row, Col, ListGroup } from "react-bootstrap";
import { useGetUsersByIdsQuery } from "../slices/userApiSlice";
import Loading from "./loading";
import Rating from "./rating";

const ReviewDetails = ({ reviews }) => {
  let userIds = reviews.map((rev) => rev.user);
  const { data: users, isLoading: isUsersLoading } =
    useGetUsersByIdsQuery(userIds);
  console.log("users", users);
  let usersMap;
  if (!isUsersLoading) {
    usersMap = new Map(users.map((user) => [user._id, user]));
    console.log("usermap...", usersMap);
  }

  return (
    <>
      {isUsersLoading ? (
        <Loading />
      ) : (
        reviews.map((rev) => (
          <Row key={rev._id}>
            <Col as="div" sm={12} md={6} lg={4} xl={4}>
              <ListGroup>
                {/* <Col
                as="div"
                style={{
                  height: "60px",
                  maxWidth: "60px",
                  borderRadius: "50%",
                  backgroundColor: "#68b072",
                  display: "inline-block",
                }}
              >
                <div style={{marginTop:'15px',marginLeft:'10px'}}>{(usersMap.get(rev.user).name).substring(0, 2)}</div>
              </Col> */}
                <ListGroup.Item>
                  <div className="d-flex justify-content-between align-items-center">
                    <span style={{ fontSize: "1.1rem", fontWeight: "bold" }}>
                      {usersMap.get(rev.user).name}
                    </span>
                    <Rating rating={rev.rating}></Rating>
                  </div>
                  <p>{rev.comment}</p>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        ))
      )}
    </>
  );
};

export default ReviewDetails;
