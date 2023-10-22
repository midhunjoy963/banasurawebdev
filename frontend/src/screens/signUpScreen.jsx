import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/formContainer";
import Loading from "../components/loading";
import { useSignUpMutation } from "../slices/userApiSlice.js";
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
const SignUpScreen = () => {
  // const [email, setEmail] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isMatch, setMatch] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const togglePasswordVisibility1 = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [signup, { isLoading }] = useSignUpMutation();
  const { userInfo } = useSelector((state) => state.auth);
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, redirect, navigate]);

  const checkPassword = () => {
    if (password == confirmPassword) {
      setMatch(true);
    } else {
      setMatch(false);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    checkPassword();
    if (isMatch) {
      try {
        const res = await signup({ name, email, password }).unwrap();
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
    } else {
      toast.error("Password should match", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <div style={styles.container}>
      <FormContainer>
        <h1>Create account</h1>
        <h5>Register below with your details!</h5>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name" className="my-3">
            {/* <Form.Label>Email</Form.Label> */}
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
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
                onChange={(e) => {
                  setPassword(e.target.value);
                  checkPassword();
                }}
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
          <Form.Group controlId="password" className="my-3">
            <div className="input-group">
              <Form.Control
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Enter Confirm Password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  checkPassword();
                }}
              />
              <div className="input-group-append">
                <Button
                  variant="outline-secondary"
                  onClick={togglePasswordVisibility1}
                >
                  <FontAwesomeIcon
                    icon={showConfirmPassword ? faEye : faEyeSlash}
                  />
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
            SIGN UP
          </Button>
          {isLoading && <Loading />}
        </Form>
        <Row className="py-3">
          <Col>
            Already have an account?{" "}
            <Link to="/login" style={{ color: "#68b072" }}>
              Login
            </Link>
          </Col>
        </Row>
      </FormContainer>
    </div>
  );
};

export default SignUpScreen;
