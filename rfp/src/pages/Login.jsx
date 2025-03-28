import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js";

const Login = () => {
  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertVariant, setAlertVariant] = useState("danger");
  const [alert, setAlert] = useState(null);

  const loginUrl = "https://realappdev.delhivery.com:8080/realapp/auth/login";

  const navigate = useNavigate();

  const encryptResponse = (password) => {
    const key = "QUtDTUVGWEhKTEtMTVlaUA==";
    const keyForCryptoJS = CryptoJS.enc.Base64.parse(key);
    const encryptedData = CryptoJS.AES.encrypt(password, keyForCryptoJS, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    });
    return encryptedData.toString();
  };

  const decryptResponse = (encryptedData) => {
    const key = "QUtDTUVGWEhKTEtMTVlaUA==";
    const keyForCryptoJS = CryptoJS.enc.Base64.parse(key);
    const decodeBase64 = CryptoJS.enc.Base64.parse(encryptedData);
    const decryptedData = CryptoJS.AES.decrypt(
      {
        ciphertext: decodeBase64,
      },
      keyForCryptoJS,
      {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
      }
    );
    return decryptedData.toString(CryptoJS.enc.Utf8);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "realapp@connaissant.com" && pass === "Realapp@1234") {
      const payload = {
        user_email: email,
        password: encryptResponse(pass),
      };
      try {
        const response = await fetch(loginUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error("Login failed! Check your credentials.");
        }

        const data = await response.json();
        if (data.accessToken) {
          sessionStorage.setItem("token", decryptResponse(data.accessToken));
          setShowAlert(true);
          setAlertVariant("success");
          setAlert("Login Successful");
          navigate("/home");
        }
      } catch (err) {
        setAlert("Some error occured");
        setShowAlert(true);
        setAlertVariant("danger");
      }
    } else {
      setAlert("Wrong Credentials");
      setShowAlert(true);
      setAlertVariant("danger");
    }
  };

  return (
    <div
      style={{
        width: "30%",
        margin: "auto",
        marginTop: "120px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        padding: "50px",
      }}
    >
      <Form
        breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
        minBreakpoint="xxs"
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Login
        </Button>
      </Form>
      {showAlert && (
        <Alert
          variant={alertVariant}
          onClose={() => setShowAlert(false)}
          dismissible
          className="mt-3"
        >
          {alert}
        </Alert>
      )}
    </div>
  );
};
export default Login;
