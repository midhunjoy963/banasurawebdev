import { Row, Col } from "react-bootstrap";
import { useGetCabsQuery } from "../slices/cabApiSlice.js";
import Cab from "./cab.jsx";
import Loading from "./loading.jsx";
import Message from "./message.jsx";

const Cabs = () => {
  const { data: cabs, isLoading, error } = useGetCabsQuery({});

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Message
          variant="danger"
          children={error?.data?.message || error.error}
        ></Message>
      ) : (
        <>
          <Row className="my-3">
            {cabs.map((cab, i) => (
              <Col className="my-3" key={cab._id} sm={12} md={6} lg={4} xl={3}>
                <Cab cab={cab}></Cab>
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default Cabs;
