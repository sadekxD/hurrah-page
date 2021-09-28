import React from "react";
import { Button, ButtonGroup } from "rsuite";

const ConfirmUpload = ({ setDraggable, pos, setImg }) => {
  const _confirm = () => {
    // here make the request
    setImg("");
    setDraggable(false);
  };

  const _cancel = () => {
    setImg("");
    setDraggable(false);
  };

  return (
    <div className="confirm-upload">
      <p>Drag the image for reposition</p>
      <div>
        <Button style={{ marginRight: 8 }} onClick={_cancel}>
          Cancel
        </Button>
        <Button appearance="primary" onClick={_confirm}>
          Confirm
        </Button>
      </div>
    </div>
  );
};

export default ConfirmUpload;
