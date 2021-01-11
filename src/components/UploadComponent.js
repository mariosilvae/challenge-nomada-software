import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";

const UploadComponent = () => {
  const { Dragger } = Upload;

  let actor;
  const props = {
    name: "file",
    multiple: false,
    accept: ".png, .jpg",
    action: "https://whois.nomada.cloud/upload",
    headers: {
      nomada: "ODFjNjQ1YTQtOGE4Ny00ZDI5LWI1ZTctMmE4Nzg4YjAzODAx",
    },
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.fileList[0].response);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
        actor = info.fileList[0].response.actorName;
        console.log(actor);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <div>
      <h1 align="center">¿Quién es ese actor?</h1>
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Haz click y arrastra una imagen</p>
        <p className="ant-upload-hint">
          Selecciona la foto de un actor famoso para saber quien es y en que
          peliculas ha salido.
        </p>
      </Dragger>
    </div>
  );
};

export default UploadComponent;
