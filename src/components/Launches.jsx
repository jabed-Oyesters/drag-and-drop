import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import MainModal from "./components/MainModal";
import { Backdrop, Fade } from "@material-ui/core";
import "./launch.css";
import { Folder } from "@mui/icons-material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export const fileType = (fileName) => {
  return (
    fileName.substring(fileName.lastIndexOf(".") + 1, fileName.length) ||
    fileName
  );
};

export default function Launches() {
  const projectSheetRef = useRef();
  const orgSheetRef = useRef();

  const excelFileInputClicked = (type) => {
    if (type === "project") projectSheetRef.current.click();
    if (type === "pdf") orgSheetRef.current.click();
  };
  const [projectSheet, setProjectSheet] = useState([]);
  const [pdfSheet, setPdfSheet] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragEnter = (e) => {
    e.preventDefault();
  };

  const dragLeave = (e) => {
    e.preventDefault();
  };
  const excelFileDrop = (e, type) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length) {
      let file = files[0];
      if (["pdf"]?.includes(fileType(file?.name))) {
        if (type === "pdf") setPdfSheet([file]);
      } else {
        alert("Please select correct file format.");
      }
    }
  };
  const excelFileSelected = (val, type) => {
    if (val) {
      let file = val[0];
      if (["pdf"]?.includes(fileType(file?.name))) {
        if (type === "pdf") setPdfSheet([file]);
      } else {
        alert("Please select correct file format.");
      }
    }
  };
  return (
    <div>
      <Button onClick={handleOpen}>Import Lunches</Button>
      <Modal
        open={open}
        className="modal"
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box>
          <div
            className="modal_paper"
            style={{
              width: "60vw",
            }}
          >
            <div className="modal_header_container">
              <div className="modal_header_center">
                <h3>Import Launch</h3>
                <section>
                  <button className="button_fill mr_5">Import</button>
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
            <section className="modal_body">
              {/* combine_input_section */}
              <section className="">
                {/* <section className="combine_input_section_input_group">
                  <label>
                    Upload Project Structure<sup className="mandatory">*</sup>
                  </label>
                  {projectSheet?.length === 0 ? (
                    <>
                      <section
                        className="file_upload_section"
                        onDragOver={dragOver}
                        onDragEnter={dragEnter}
                        onDragLeave={dragLeave}
                        onDrop={(e) => excelFileDrop(e, "project")}
                        onClick={() => excelFileInputClicked("project")}
                      >
                        <Folder
                          style={{
                            color: "#0CA6E8",
                            fontSize: "50px",
                          }}
                        />
                        <span>Drag and Drop your file here</span>
                        <input
                          ref={projectSheetRef}
                          style={{
                            display: "none",
                          }}
                          type="file"
                          accept=".xlsx, .xls"
                          multiple
                          onChange={() =>
                            excelFileSelected(
                              projectSheetRef.current.files,
                              "project"
                            )
                          }
                        />
                      </section>
                      <section
                        style={{ textAlign: "center", marginTop: "10px" }}
                      >
                        <p
                          onClick={(e) => excelFileInputClicked("project")}
                          className="link cp"
                        >
                          Browse file from device
                        </p>
                      </section>
                    </>
                  ) : (
                    <p style={{ marginTop: "20px" }}>
                      <span>{projectSheet[0]?.name}</span>
                      <span className="file-size">
                        ({fileSize(projectSheet[0]?.size)})
                      </span>
                      <span
                        className="file-remove cp"
                        onClick={() => {
                          setProjectSheet([]);
                        }}
                        style={{
                          color: "red",
                          marginLeft: "20px",
                        }}
                      >
                        X
                      </span>
                    </p>
                  )}
                </section> */}
                <section className="combine_input_section_input_group">
                  <label>
                    Upload pdf Project <sup className="mandatory">*</sup>
                  </label>
                  {pdfSheet?.length === 0 ? (
                    <>
                      <section
                        className="file_upload_section"
                        onDragOver={dragOver}
                        onDragEnter={dragEnter}
                        onDragLeave={dragLeave}
                        onDrop={(e) => excelFileDrop(e, "pdf")}
                        onClick={() => excelFileInputClicked("pdf")}
                      >
                        <Folder
                          style={{
                            color: "#0CA6E8",
                            fontSize: "50px",
                          }}
                        />
                        <span>Drag and Drop your pdf file here</span>
                        <input
                          ref={orgSheetRef}
                          style={{
                            display: "none",
                          }}
                          type="file"
                          accept=".pdf"
                          multiple
                          onChange={() =>
                            excelFileSelected(orgSheetRef.current.files, "pdf")
                          }
                        />
                      </section>
                      <section
                        style={{ textAlign: "center", marginTop: "10px" }}
                      >
                        <p
                          onClick={(e) => excelFileInputClicked("pdf")}
                          className="link cp"
                        >
                          Browse pdf file from device
                        </p>
                      </section>
                    </>
                  ) : (
                    <p style={{ marginTop: "20px" }}>
                      <span>{pdfSheet[0]?.name}</span>
                      <span className="file-size">
                        {/* ({fileSize(projectSheet[0]?.size)}) */}
                      </span>
                      <span
                        className="file-remove cp"
                        onClick={() => {
                          setPdfSheet([]);
                        }}
                        style={{
                          color: "red",
                          marginLeft: "20px",
                        }}
                      >
                        X
                      </span>
                    </p>
                  )}
                </section>
              </section>
            </section>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

{
  /* <div>
<Button onClick={handleOpen}>Open modal</Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="parent-modal-title"
  aria-describedby="parent-modal-description"
>
  <Box sx={{ ...style, width: 400 }}>
      
    <h2 id="parent-modal-title">Text in a modal</h2>
    <p id="parent-modal-description">
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    </p>
    <MainModal/>
  </Box>
</Modal>
</div> */
}

{
  /* <section className="combine_input_section_input_group">
                  <label>
                    Upload Project Structure<sup className="mandatory">*</sup>
                  </label>
                  <>
                    <section
                      className="file_upload_section"
                      onDragOver={dragOver}
                      onDragEnter={dragEnter}
                      onDragLeave={dragLeave}
                      onDrop={(e) => excelFileDrop(e, "project")}
                      onClick={() => excelFileInputClicked("project")}
                    >
                      <Folder
                        style={{
                          color: "#0CA6E8",
                          fontSize: "50px",
                        }}
                      />
                      <span>Drag and Drop your file here</span>
                      <input
                      ref={projectSheetRef}
                        style={{
                          display: "none",
                        }}
                        type="file"
                        accept=".xlsx, .xls"
                        multiple
                      />
                    </section>
                    <section style={{ textAlign: "center", marginTop: "10px" }}>
                      <p className="link cp">Browse file from device</p>
                    </section>
                  </>
                </section> */
}
