import React from "react";
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from "reactstrap";

function FoodMenuItems(props) {
  return (
    <div>
      <Card style={{ margin: "10px" }}>
        <CardBody>
          <CardImg
            width="100%"
            alt={props.dish.name}
            src={props.dish.image}
            style={{ opacity: "0.6" }}
          />
          <CardImgOverlay>
            <CardTitle
              style={{ cursor: "pointer" }}
              onClick={() => props.onDishSelect(props.dish)}
            >
              <b>{props.dish.name}</b>
            </CardTitle>
          </CardImgOverlay>
        </CardBody>
      </Card>
    </div>
  );
}

export default FoodMenuItems;
