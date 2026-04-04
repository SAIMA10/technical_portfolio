import React, { useEffect } from "react";
import "./styles.css";
import ReactDOM from "react-dom";
import Text from "../typography";
import { IoClose } from "react-icons/io5";

const ModalView = ({
  isOpen,
  onClose,
  maxWidth = "1125px",
  minWidth = "800px",
  modalTitle,
  modalSubtitle,
  textInputComponent,
  imagesComponent,
  linksComponent,
  modalBgColor,
  modalTextColor,
  modalPrimaryColor,
  project,
}) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className="custom-modal-backdrop"
      onClick={onClose}
    >
      <div
        className={`custom-modal-content`}
        style={{ minWidth, maxWidth, backgroundColor: project?.bgColor }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="modal-container"
          style={{ backgroundColor: project?.bgColor }}
        >
          {project?.title ? (
            <div className="modal-top">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  gap: "32px",
                }}
              >
                <Text variant="unbounded" color={project?.color} fontSize={48}>
                  {project?.title}
                </Text>
                {/* <div onClick={onClose} style={{ cursor: "pointer" }}>
                  <IoClose
                    className="modal-cross-icon"
                    style={{ color: project?.primaryColor }}
                  />
                </div> */}
              </div>
              <div className="modal-main-body-container">
                {project?.description ? (
                  <Text
                    variant="unbounded"
                    color={project?.color}
                    fontSize={16}
                    className="modal-subtitle-container"
                  >
                    {project?.description}
                  </Text>
                ) : (
                  <></>
                )}
                <div className="modal-image-container">
                  {/* {project?.images} */}
                  <Text
                    variant="unbounded"
                    color={project?.color}
                    fontSize={16}
                  >
                    Images
                  </Text>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          {/* <div>{textInputComponent}</div> */}
          <Text variant="unbounded" color={project?.color} fontSize={16}>
            {project?.link}
          </Text>
          <div>{/* {project?.links} */}</div>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default ModalView;
