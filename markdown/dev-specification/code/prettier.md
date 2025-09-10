# prettier


```json
// .prettierrc
{
  // 每行代码的最大长度限制为 120 个字符。超过时，Prettier 会自动换行。默认值为 80，此处放宽至 120 以适应更宽屏的代码布局
  "printWidth": 120,
  // 缩进宽度为 2 个空格
  "tabWidth": 2,
  // 禁用制表符缩进，始终使用空格缩进
  "useTabs": false,
  // 在语句末尾自动添加分号
  "semi": true,
  // 字符串使用双引号 "（而非单引号 '）
  "singleQuote": false,
  // 禁止在对象、数组或函数参数的最后一项后添加尾随逗号（例如 {x: 1} 而非 {x: 1,}）
  "trailingComma": "none",
  // 在对象字面量的括号内保留空格（如 { foo: bar } 而非 {foo: bar}）
  "bracketSpacing": true,
  // 当箭头函数只有一个参数时，省略括号（如 x => x 而非 (x) => x）
  "arrowParens": "avoid",
  // 在 Vue 文件中，对 <script> 和 <style> 标签内容进行缩进（与模板保持一致）
  "vueIndentScriptAndStyle": true,
  // 保留文件原有的换行符风格（自动识别 LF \n 或 CRLF \r\n）
  "endOfLine": "auto"
}
```
