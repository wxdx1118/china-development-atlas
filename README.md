<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>


## 项目文件结构

```text
china-development-atlas/
├── App.tsx                  # 主应用组件，页面结构和数据可视化
├── index.tsx                # React 应用入口
├── index.html               # HTML 模板
├── constants.ts             # 板块配置与可视化数据
├── types.ts                 # TypeScript 类型定义
├── vite.config.ts           # Vite 构建配置
├── tsconfig.json            # TypeScript 配置
├── package.json             # 项目依赖与脚本
├── metadata.json            # 项目描述信息
├── README.md                # 项目说明文档
├── .env.local               # 环境变量配置（可选）
└── components/              # 复用组件目录
   ├── ChartWrapper.tsx     # 图表容器组件
   ├── CustomTooltip.tsx    # 图表自定义提示框
   └── Nav.tsx              # 页面导航栏
```

---

## Start

**Prerequisites:**  Node.js

1. 安装依赖:
   `npm install`
2. 运行应用:
   `npm run dev`
