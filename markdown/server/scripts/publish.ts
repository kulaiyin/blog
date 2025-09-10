/**
 * 将构建后的文件上传到服务器。
 */
import * as path from "path";
import url from "url";
import Client from "ssh2-sftp-client";
import { configDotenv } from "dotenv";
import { exit } from "process";
const isDevMode = process.env.NODE_ENV === "development";

let sftp = new Client();
// 连接成功事件
sftp.on("ready", () => {
  console.log("==ready==: 链接成功");
});
// 加载.env文件
configDotenv({
  path: isDevMode
    ? ".env.development"
    : process.env.NODE_ENV === "procuction"
    ? ".env.procuction"
    : ".env",
});
try {
  // 服务区sftp连接信息
  sftp
    .connect({
      host: process.env.VITE_SFTP_host,
      port: process.env.VITE_SFTP_port,
      username: process.env.VITE_SFTP_username,
      password: process.env.VITE_SFTP_password,
    })
    .then(() => {
      /**
       * sfpt在服务器上的真实目录: /srv/sftpuser
       * 当前登录用户可访问的目录: /srv/sftpuser/data
       * list: 列出当前登录用户可访问的目录下的所有文件信息。
       * input: / 而不是 /srv/sftpuser
       * output: /data
       */
      return sftp.list("/", () => true);
      /**
       * will be false or d, -, l (dir, file or link)
       */
      // return sftp.exists("/data");
    })
    .then((data) => {
      console.log(data, "the data info");
      exit();
    })
    .catch((err) => {
      console.log(err, "catch error");
      exit();
    });
} catch (error) {
  console.log(error);
}
