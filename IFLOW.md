# VitePress 开发博客项目

## 项目概述

这是一个基于 VitePress 构建的个人开发博客项目，主要用于记录开发过程中的环境配置、问题解决方案、待办清单、周报记录等内容。项目使用 TypeScript 开发，集成了 Mermaid 图表支持，并包含 LeetCode 算法题练习模块。

### 主要技术栈

- **文档框架**: VitePress 1.6.3
- **开发语言**: TypeScript
- **包管理**: pnpm
- **测试框架**: Vitest
- **图表支持**: Mermaid
- **部署工具**: 自定义 SFTP 上传脚本

### 项目结构

```
vitepress/
├── .foam/                    # Foam 模板配置
├── build/                    # 构建相关脚本
│   └── publish.ts           # SFTP 部署脚本
├── configs/                  # 配置文件目录
│   └── vitepress.conf       # VitePress 配置
├── markdown/                 # Markdown 文档源码
│   ├── .vitepress/          # VitePress 配置目录
│   │   ├── config.mts       # 主配置文件
│   │   ├── tools.ts         # 工具函数
│   │   ├── cache/           # 缓存目录
│   │   └── dist/            # 构建输出目录
│   ├── database/            # 数据库相关文档
│   ├── dev-specification/   # 开发规范文档
│   ├── env/                 # 环境配置文档
│   ├── frameworks/          # 框架相关文档
│   ├── images/              # 图片资源
│   ├── leetcode/            # LeetCode 算法题
│   │   ├── questions/       # 题目文档
│   │   ├── scripts/         # 脚本文件
│   │   └── test/            # 测试文件
│   ├── mobile-app/          # 移动端开发文档
│   ├── network/             # 网络相关文档
│   ├── others/              # 其他杂项文档
│   ├── server/              # 服务器相关文档
│   └── years/               # 年度记录
├── node_modules/            # 依赖包
├── .czrc                    # Commitizen 配置
├── .env.development         # 开发环境变量
├── .env.production          # 生产环境变量
├── .gitignore               # Git 忽略文件
├── package.json             # 项目配置
├── pnpm-lock.yaml           # 锁定依赖版本
└── vitest.config.ts         # Vitest 测试配置
```

## 构建和运行

### 开发环境

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm docs:dev
```

### 构建和预览

```bash
# 构建生产版本
pnpm docs:build

# 预览构建结果
pnpm docs:preview
```

### 测试

```bash
# 运行 LeetCode 算法题测试
pnpm leetcode:test
```

### 部署

```bash
# 部署到服务器
pnpm publish
```

部署脚本会自动将构建后的文件通过 SFTP 上传到服务器。服务器连接信息通过环境变量配置：

- `VITE_SFTP_host`: 服务器地址
- `VITE_SFTP_port`: SSH 端口
- `VITE_SFTP_username`: 用户名
- `VITE_SFTP_password`: 密码

## 开发约定

### 文档组织

- 所有 Markdown 文档存放在 `markdown/` 目录下
- 每个主要主题有独立的子目录
- 首页配置在 `markdown/index.md` 中

### 代码测试

- LeetCode 算法题实现存放在 `markdown/leetcode/test/` 目录
- 使用 Vitest 进行测试
- 每个算法题文件包含多种实现方案和对应的测试用例

### 环境配置

- 开发环境变量配置在 `.env.development`
- 生产环境变量配置在 `.env.production`
- 敏感信息（如服务器密码）不提交到版本控制

### Node.js 版本要求

项目要求 Node.js 版本为 `22.16.0`。

## 主要功能模块

### 1. 开发博客

记录开发过程中的各种知识点和解决方案，包括：
- 环境安装配置
- 开发框架使用
- 数据库操作
- 开发规范
- 网络通信
- 移动端开发

### 2. LeetCode 算法练习

包含 LeetCode 算法题的实现和测试，每个题目通常包含：
- 题目描述
- 多种解法实现
- 时间复杂度和空间复杂度分析
- 完整的测试用例

### 3. 待办清单和周报

提供个人任务管理和周报记录功能。

### 4. 自动化部署

通过 SFTP 自动将构建后的文档部署到服务器，支持不同环境的配置。

## 注意事项

1. 确保正确配置环境变量后再执行部署命令
2. LeetCode 测试文件命名格式为 `{题号}.{题目名称}.ts`
3. 新增文档时需要在首页 `markdown/index.md` 中添加导航链接
4. 使用 Mermaid 图表时需要确保语法正确