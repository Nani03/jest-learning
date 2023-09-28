import React, { useEffect, useState } from "react";
import axios from "axios";
import ScoopOptions from "./ScoopOptions";
import { Row } from "react-bootstrap";

export default function Option({ optionType }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get(`http://;localhost:3030/${optionType}`)
      .then((res) => setItems(res.data))
      .catch((error) => {
        //
      });
  }, [optionType]);

  const ItemComponent = optionType === "scoops" ? ScoopOptions : null;
  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));
  return <Row>{optionItems}</Row>;
}