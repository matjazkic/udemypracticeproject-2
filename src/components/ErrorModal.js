import React from "react";
import classes from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.error} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.error}>okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop error={props.error} />,
        document.getElementById("backdrop-root")
      )}{" "}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          error={props.error}
        />, document.getElementById('overlay-root')
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
