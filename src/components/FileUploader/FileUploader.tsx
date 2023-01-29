import { useRef } from "react";
import { Button } from "react-bootstrap";
import { ClickhandlerType, OnchangeInputType } from "../../@types/global";
interface IFileUpld {
  setFile: (file: any) => void;
}

const FileUploader = ({ setFile }: IFileUpld) => {
  // Create a reference to the hidden file input element
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick: ClickhandlerType = () => {
    hiddenFileInput.current?.click();
  };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file
  const handleChange: OnchangeInputType = (event) => {
    if (!event.target.files) {
      return;
    }
    setFile(event.target.files[0]);
  };
  return (
    <>
      <Button onClick={handleClick}>upload your json</Button>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: "none" }}
      />
    </>
  );
};
export default FileUploader;
