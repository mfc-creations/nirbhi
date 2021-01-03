import React, { useState } from "react";
import emailjs from "emailjs-com";
import TextField from "../textField/TextField";
import validator from "validator";
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState("");
  const [msg, setMsg] = useState("");
  const [errors, setErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMsg("");
    let er = {};
    if (
      validator.isEmpty(name) ||
      validator.isEmpty(email) ||
      validator.isEmpty(message)
    ) {
      alert("Fill necessary fileds");
      if (validator.isEmpty(name)) {
        er.name = "Enter the name";
      }
      if (validator.isEmpty(email)) {
        er.email = "Enter your email";
      }
      if (validator.isEmpty(message)) {
        er.message = "Type your message";
      }

      setErrors(er);
    } else if (!validator.isEmail(email)) {
      er.email = "Enter valid email id";
      setErrors(er);
    } else {
      setErrors({});
      setLoading(true);
      emailjs
        .sendForm(
          "service_jjj0pnk",
          "template_8mjmbxb",
          e.target,
          "user_G4KoaQL3Y11XE5D8T1Mnn"
        )
        .then(
          (result) => {
            setLoading(false);
            setMsg("Message sent successfully!!");
            setName("");
            setEmail("");
            setMessage("");
            console.log(result.text);
          },
          (error) => {
            console.log(error);
            setLoading(false);
            setMsg("Something went wrong");

            console.log(error.text);
          }
        );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Chat with us</h2>
      <TextField
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        name="name"
        error={errors.name}
      />
      <TextField
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        name="email"
        error={errors.email}
      />
      <TextField
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        type="text-area"
        name="message"
        error={errors.message}
      />
      {loading ? (
        "Sending..."
      ) : (
        <input type="submit" value="Send" className="send-btn" />
      )}
      {msg && msg}
    </form>
  );
};

export default Form;
