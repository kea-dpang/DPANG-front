import React, { useState } from "react";
import AddPhoto from "./AddPhoto";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "styled-components";

const EventImage = ({ eventImage, handleImageDelete, handleImageChange }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{ width: "100%", margin: "1rem" }}>
      {eventImage ? (
        <ImageWrapper
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img src={eventImage} alt="preview" style={{ width: "100%" }} />
          {isHovered && (
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition: "opacity 0.3s",
                cursor: "pointer",
              }}
            >
              <button
                onClick={handleImageDelete}
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                }}
              >
                <DeleteIcon style={{ color: "var(--light-grey)" }} />
              </button>
            </div>
          )}
        </ImageWrapper>
      ) : (
        <AddPhoto onChange={handleImageChange} />
      )}
    </div>
  );
};
export default EventImage;
const ImageWrapper = styled.div`
  position: relative;
`;
