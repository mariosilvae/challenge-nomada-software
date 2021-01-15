import React from "react";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";

const NotFound = (props) => {
  return (
    <Result
      status="404"
      title="Artista no encontrado"
      subTitle="Al parecer este artista no es tan famoso como crees..."
      extra={
        <Link to="/">
          <Button type="primary">Intenta con otra imagen</Button>
        </Link>
      }
    ></Result>
  );
};

export default NotFound;
