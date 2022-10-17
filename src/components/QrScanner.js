import { useRef,useState, useEffect,useCallback } from "react"
import {Camera} from "react-camera-pro";
function QrScanner(){
    const camera = useRef(null);
  const [image, setImage] = useState(null);
  return (
    <div>
      <Camera ref={camera} facingMode='environment' aspectRatio={3}/>
      <button onClick={() => setImage(camera.current.takePhoto())}>Take photo</button>
      <img src={image} alt='Taken photo'/>
    </div>
  );
}

export default QrScanner;