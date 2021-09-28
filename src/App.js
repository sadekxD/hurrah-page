import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  createContext,
} from "react";
import "rsuite/dist/styles/rsuite-default.css";
import "./app.scss";
import defaultImage from "./media/test.png";

//  Components from Rsuite
import { motion } from "framer-motion";

// Components
import CoverPopover from "./components/CoverPopover";
import { Button } from "rsuite";
import ConfirmUpload from "./components/ConfirmUpload";

export default function App() {
  const [contraints, setConstraints] = useState(0);
  const [pos, setPos] = useState(0);
  const [draggable, setDraggable] = useState(false);
  const [deafaultImg, setDefaultImg] = useState(defaultImage);
  const [img, setImg] = useState("");
  const boxRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    setConstraints(0);
  }, [img]);

  const _drag = (e) => {
    const { top } = boxRef.current.getBoundingClientRect();
    setPos(top);
  };

  const _load = useCallback(() => {
    const parentHeight = containerRef.current.offsetHeight;
    const childHeight = boxRef.current.offsetHeight;
    setConstraints(childHeight - parentHeight - 10);
  }, []);

  return (
    <div className="cover">
      <div ref={containerRef} className="drag-area">
        {draggable || img ? (
          <ConfirmUpload setDraggable={setDraggable} setImg={setImg} />
        ) : (
          ""
        )}
        <motion.div
          ref={boxRef}
          drag={draggable || img ? "y" : ""}
          onDrag={_drag}
          dragConstraints={{
            top: -contraints,
            bottom: 0,
          }}
          dragElastic={false}
          className="img-container"
        >
          <img
            src={img ? URL.createObjectURL(img) : defaultImage}
            className="box"
            onLoad={_load}
          />
        </motion.div>
        <CoverPopover
          setImg={setImg}
          draggable={draggable}
          setDraggable={setDraggable}
        >
          <Button className="cover-controls">Upload</Button>
        </CoverPopover>
      </div>
    </div>
  );
}
