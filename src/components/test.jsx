<div>
      <Button onClick={handleOpen}>Import Lunches</Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="parent-modal-title"
  aria-describedby="parent-modal-description"
>
        <Box >
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
            <section className="modal_body">
              <section className="combine_input_section">
                <section className="combine_input_section_input_group">
                  <label >
                    Upload Project Structure<sup className="mandatory">*</sup>
                  </label>
                  <>
                      <section
                        className="file_upload_section"
                        // onDragOver={dragOver}
                        // onDragEnter={dragEnter}
                        // onDragLeave={dragLeave}
                        // onDrop={(e) => excelFileDrop(e, "project")}
                        // onClick={() => excelFileInputClicked("project")}
                      >
                        <Folder
                          style={{
                            color: "#0CA6E8",
                            fontSize: "50px",
                          }}
                        />
                        <span>Drag and Drop your file here</span>
                        <input
                         
                          style={{
                            display: "none",
                          }}
                          type="file"
                          accept=".xlsx, .xls"
                          multiple
                         
                        />
                      </section>
                      <section
                        style={{ textAlign: "center", marginTop: "10px" }}
                      >
                        <p
                          
                          className="link cp"
                        >
                          Browse file from device
                        </p>
                      </section>
                    </>
                 
                </section>
                
              </section>
            </section>
          </div>
        </Box>
      </Modal>
    </div>