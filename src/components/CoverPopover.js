import React, { useContext } from "react";
import { Whisper, Popover, Button, IconButton, Tooltip } from "rsuite";
import FileUploadIcon from "@rsuite/icons/FileUpload";
import DragableIcon from "@rsuite/icons/Dragable";
import { CoverContext } from "../App";

const CoverPopover = ({ children, setImg, setDraggable }) => {
  return (
    <Whisper
      placement="bottomEnd"
      trigger="hover"
      controlId="control-id-hover-enterable"
      speaker={
        <Popover>
          <IconButton icon={<FileUploadIcon />} block>
            <label style={{ cursor: "pointer" }}>
              Upload image
              <input
                type="file"
                name="cover_img"
                id="image"
                accept="*img"
                onChange={(e) => setImg(e.target.files[0])}
                style={{ display: "none" }}
              />
            </label>
          </IconButton>
          <IconButton
            icon={<DragableIcon />}
            block
            onClick={() => setDraggable(true)}
          >
            Reposition
          </IconButton>
        </Popover>
      }
      enterable
    >
      {children}
    </Whisper>
  );
};

export default CoverPopover;
