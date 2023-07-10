import React from "react";
import { Row, Col, Image } from "@nextui-org/react";
import * as S from "./TextImage.styled";

const TextImage = ({ image, title, text, isImageFirst }) => {
  return (
    <>
      {isImageFirst ? (
        <>
          <Row css={S.GapFillerRowStyles}></Row>
          <Row css={S.TextImageStyles}>
            <Image
              css={S.ImageStyles}
              width={630}
              height={550}
              src={image}
              alt="delicious burger"
            />
            <Col css={S.ColStyles}>
              <h3 style={{ ...S.TextStyles, color: "#FAFAFA" }}>{title}</h3>
              <p style={{ color: "#FFFFFF", fontSize: "16px" }}>{text}</p>
            </Col>
          </Row>
        </>
      ) : (
        <>
          <Row css={S.TextImageStyles}>
            <Col css={S.ColStyles}>
              <h3 style={{ ...S.TextStyles, fontSize: "48px" }}>{title}</h3>
              <p style={{ fontSize: "16px" }}>{text}</p>
            </Col>
            <Image
              css={S.ImageStyles}
              width={630}
              height={550}
              src={image}
              alt="delicious burger"
            />
          </Row>
        </>
      )}
    </>
  );
};

export default TextImage;
