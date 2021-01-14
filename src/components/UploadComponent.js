import React from "react";
import { connect } from "react-redux";
import { getActor } from "../actions";
import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";

const UploadComponent = (props) => {
  const { Dragger } = Upload;

  const handleGetActor = (name) => {
    props.getActor(name);
  };

  const data = {
    name: "file",
    multiple: false,
    accept: ".png, .jpg",
    action: "https://whois.nomada.cloud/upload",
    headers: {
      nomada: "ODFjNjQ1YTQtOGE4Ny00ZDI5LWI1ZTctMmE4Nzg4YjAzODAx",
    },
    onChange(info) {
      const { status, response } = info.file;
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
        handleGetActor(response.actorName);
        props.history.push("/actor")
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <div>
      <h1 align="center">¿Quién es ese actor?</h1>
      <Dragger {...data}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Haz click o arrastra una imagen</p>
        <p className="ant-upload-hint">
          Selecciona la foto de un actor famoso para saber quien es y en que
          peliculas ha salido.
        </p>
      </Dragger>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    actor: state.actor,
  };
};

const mapDispatchToProps = {
  getActor,
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadComponent);
