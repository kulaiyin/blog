import path from "path";
import fs from "fs";

export const isDevMode = process.env.NODE_ENV === "development";

/**
 * 加载目录下所有md文件
 */
const mdFolderPath = path.dirname(__dirname);

/**
 * 加载目录下所有md文件
 * @param dir 目录路径
 * @param options.sortById boolean 根据文件id进行排序
 * @returns
 */
export const loadDirMdFiles = (
  dir: string,
  options: { sortById: boolean } = { sortById: false }
) => {
  const dirPath = path.join(mdFolderPath, dir);
  let files = fs.readdirSync(dirPath);
  let arr: { text: string; link: string }[] = [];

  if (options.sortById) {
    files = files.sort((a, b) => {
      // 使用字符串进行比较，并补全id长度一致，保证顺序正确
      const aId = String(a.match(/(\d+)/)?.[0]).padStart(10, "0");
      const bId = String(b.match(/(\d+)/)?.[0]).padStart(10, "0");
      return aId > bId ? 1 : -1;
    });
  }

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    const stats = fs.statSync(filePath);
    if (stats.isFile() && path.extname(file) === ".md") {
      const text = path.basename(file, ".md");
      const link = path.join(dir, file);
      arr.push({ text, link });
    }
  });
  return arr;
};
