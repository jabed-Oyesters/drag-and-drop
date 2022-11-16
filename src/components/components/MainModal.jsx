import { Button, Modal } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";


const MainModal = ({style}) => {
    function MainModal() {
        const [open, setOpen] = useState(false);
        const handleOpen = () => {
          setOpen(true);
        };
        const handleClose = () => {
          setOpen(false);
        };
    return (
      <React.Fragment>
        <Button onClick={handleOpen}>Open Child Modal</Button>
        <Modal
          hideBackdrop
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
            <div className="modal_header_container">
              <div className="modal_header_center">
                <h3>Import Launch</h3>
                <section>
                  <button
                    className="button_fill mr_5"
                   
                  >
                    Import
                  </button>
                  <button
                    className="button_outline"
                    onClick={() => {
                      handleClose();
                    }}
                  >
                    Cancel
                  </button>
                </section>
              </div>
            </div>
          <Box sx={{ ...style, width: 200 }}>
            <h2 id="child-modal-title">Text in a child modal</h2>
            <p id="child-modal-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <Button onClick={handleClose}>Close Child Modal</Button>
          </Box>
        </Modal>
      </React.Fragment>
    );
  }
};

export default MainModal;

{/* <React.Fragment>
        <Button onClick={handleOpen}>Open Child Modal</Button>
        <Modal
          hideBackdrop
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style, width: 200 }}>
            <h2 id="child-modal-title">Text in a child modal</h2>
            <p id="child-modal-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <Button onClick={handleClose}>Close Child Modal</Button>
          </Box>
        </Modal>
      </React.Fragment> */}