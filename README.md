# Webpack5 React TypeScirpt ESLint Starter

## 目录结构

```tree
.
├── .eslintrc.yml                   // ESLint
├── config                          // webpack 配置
│   ├── webpack.config.js           // 公共webpack配置
│   ├── webpack.dev.config.js       // 开发环境配置
│   └── webpack.pro.config.js       // 生产环境配置
├── package.json
├── public
│   └── index.html
├── src                             // 开发目录 alias: '@'
│   ├── App.less
│   ├── App.tsx
│   ├── asstes
│   ├── common                      // 公共目录
│   │   ├── hooks                   // 公共 Hooks
│   │   │   └── useCompare.ts
│   │   ├── models                  // 公共 ts 定义
│   │   │   └── user.ts
│   │   └── utils                   // 工具函数集
│   │       ├── getEnumKeys.ts
│   │       ├── index.ts
│   │       └── sleep.ts
│   ├── components                  // 组件目录
│   ├── contexts                    // 全局状态
│   │   └── GlobalProvider.tsx
│   ├── index.tsx                   // 入口文件
│   ├── pages                       // 页面目录
│   └── types                       // 全局 ts 声明
│       └── index.d.ts
├── .vscode                         // 工作区编辑器配置 自动格式化
└── tsconfig.json                   // ts 配置
```