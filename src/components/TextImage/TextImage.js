import React from "react";
import { Row, Col, Image } from "@nextui-org/react";
import * as S from "./TextImage.styled";

const TextImage = ({ text, image, isImageFirst, title }) => {
  return (
    <Row css={{ overflow: "visible" }}>
      {isImageFirst ? (
        <>
          <Row css={S.TextImageStyles}>
            <Image
              css={{
                ...S.ImageStyles,
                transform: "scale(1.4)",
              }}
              width={630}
              height={420}
              src={image}
              alt="delicious burger"
            />
            <Col css={{ ...S.ColStyles, padding: "0 13rem 0 2rem" }} gap={1}>
              <h3 style={{ ...S.TextStyles, color: "#FAFAFA" }}>{title}</h3>
              <p style={{ color: "#FFFFFF", fontSize: "16px" }}>{text}</p>
            </Col>
          </Row>
        </>
      ) : (
        <>
          <Row css={S.TextImageStyles}>
            <Col css={{ ...S.ColStyles, padding: "0 6rem 0 6rem" }}>
              <h3 style={{ ...S.TextStyles, fontSize: "48px" }}>{title}</h3>
              <p style={{ fontSize: "16px" }}>{text}</p>
            </Col>
            <Col css={S.ColStyles}>
              <Image
                width={660}
                height={660}
                css={{ transform: "rotate(-95deg)", marginTop: "-90px" }}
                src={image}
                alt="delicious burger"
              />
            </Col>
          </Row>
        </>
      )}
    </Row>
  );
};

export default TextImage;
