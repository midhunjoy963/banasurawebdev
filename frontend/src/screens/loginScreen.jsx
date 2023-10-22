import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/formContainer";
import Loading from "../components/loading";
import { useLoginMutation } from "../slices/userApiSlice.js";
import { toast } from "react-toastify";
import { setCredentials } from "../slices/authSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  },
};
const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();
  const { userInfo } = useSelector((state) => state.auth);
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, redirect, navigate]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate(redirect);
      toast("Logged In Successfully", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (e) {
      toast.error(e?.data?.message || e.error);
    }
  };
  return (
    <div style={styles.container}>
      <FormContainer>
        <h1>Login</h1>
        <h5>Welcome back, you've been missed!</h5>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="email" className="my-3">
            {/* <Form.Label>Email</Form.Label> */}
            <Form.Control
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="password" className="my-3">
            {/* <Form.Label>Password</Form.Label> */}
            <div className="input-group">
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="input-group-append">
                <Button
                  variant="outline-secondary"
                  onClick={togglePasswordVisibility}
                >
                  <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                </Button>
              </div>
            </div>
          </Form.Group>
          <Button
            type="submit"
            style={{
              backgroundColor: "#68b072",
              width: "100%",
              outline: "none",
              border: "none",
            }}
            variant="primary"
            className="mt-2"
            disabled={isLoading}
          >
            Login
          </Button>
          {isLoading && <Loading />}
        </Form>
        <Row className="py-3">
          <Col>
            Not a member?{" "}
            <Link to="/signup" style={{ color: "#68b072" }}>
              Register now!
            </Link>
          </Col>
        </Row>
      </FormContainer>
    </div>
  );
};

export default LoginScreen;
