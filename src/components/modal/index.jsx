import React, { useEffect } from "react";
import "./styles.css";
import "../../screens/dashboard/styles.css";
import ReactDOM from "react-dom";
import Text from "../typography";

const ModalView = ({
  isOpen,
  onClose,
  maxWidth = "1125px",
  minWidth = "800px",
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
    <div className="custom-modal-backdrop" onClick={onClose}>
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
                  <div className="modal-description-container">
                    <Text
                      variant="unbounded"
                      color={project?.color}
                      fontSize={16}
                      className="modal-subtitle-container"
                    >
                      {project?.description}
                    </Text>
                    <Text
                      variant="raleway"
                      color={project?.color}
                      fontSize={18}
                      className="modal-subtitle-container"
                    >
                      {project?.longDescription1}
                    </Text>
                    <Text
                      variant="raleway"
                      color={project?.color}
                      fontSize={18}
                      className="modal-subtitle-container"
                    >
                      {project?.longDescription2}
                    </Text>
                    <Text
                      variant="raleway"
                      color={project?.color}
                      fontSize={18}
                      className="modal-subtitle-container"
                    >
                      {project?.longDescription3}
                    </Text>
                  </div>
                ) : (
                  <></>
                )}
                {project?.images ? (
                  <>
                    <div className="modal-image-container">
                      {project?.images?.length > 1 ? (
                        project?.images?.map((img, index) => (
                          <img
                            key={index}
                            src={img}
                            alt={`${project?.title}-${index}`}
                            className="project-image-small"
                          />
                        ))
                      ) : (
                        <img
                          src={project?.images}
                          alt={project?.title}
                          className="project-image"
                        />
                      )}
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          ) : (
            <></>
          )}
          <div
            style={{
              display: "flex",
              gap: "12px",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <a href={project?.link} target="_blank" rel="noopener noreferrer">
              {project?.icon}
            </a>
            {project?.link2 && (
              <a
                href={project?.link2}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project?.icon2}
              </a>
            )}
            {project?.skills?.map((skill) => {
              return (
                <Text variant="unbounded" fontSize={14} color={project?.color}>
                  {skill}
                </Text>
              );
            })}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default ModalView;
