/**
 * 将构建后的文件上传到服务器。
 */
import * as path from "path";
import url from "url";
import Client from "ssh2-sftp-client";
import { configDotenv } from "dotenv";
import { exit } from "process";
const isDevMode = process.env.NODE_ENV === "development";

// 构建后的目录
const distDir = path.join(
  path.dirname(getFilePath()),
  "../markdown/.vitepress/dist"
);

let sftp = new Client();
sftp.on("ready", () => {
  console.log("==ready==: 链接成功");
});

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
      // 将打包后的文件上传到服务器
      return sftp.uploadDir(distDir, "/data/www/vitepress", {});
    })
    .then((data) => {
      console.log(data, "the data info");
    })
    .catch((err) => {
      console.log(err, "catch error");
    })
    .finally(() => {
      exit();
    });
} catch (error) {
  console.log(error);
  console.log("1. linux子系统是否启动");
  exit();
}

function getFilePath() {
  // 获取当前模块的 URL
  const moduleUrl = import.meta.url;
  // 将模块 URL 转换为文件路径
  const filePath = url.fileURLToPath(moduleUrl);
  return filePath;
}
