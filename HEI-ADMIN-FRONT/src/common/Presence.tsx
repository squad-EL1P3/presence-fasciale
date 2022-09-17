import { useRef } from "react";
import Webcam from "react-webcam";

export const WebCamDisplay = () => {
  const webcam = useRef<Webcam>(null);

  return (
    <>
      <Webcam audio={false} ref={webcam} />
    </>
  );
};

export default WebCamDisplay;