import { Alert } from "react-bootstrap";

interface IAlert {
  text: string;
  type: string;
}

const AlertComponent = ({ text, type }: IAlert) => {
  return (
    <div className="animation">
      <Alert show={true} key={type} variant={type}>
        {text}
      </Alert>
    </div>
  );
};

export default AlertComponent;
