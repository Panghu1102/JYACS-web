# JYACS Website with Tina CMS

这是一个集成了 Tina CMS 的 JYACS 商业网站项目。

## 🚀 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 配置环境变量

复制 `.env.example` 到 `.env.local` 并填写你的 Tina Cloud 凭证：

```bash
cp .env.example .env.local
```

编辑 `.env.local`:
```
NEXT_PUBLIC_TINA_CLIENT_ID=your_client_id
TINA_TOKEN=your_token
TINA_BRANCH=main
TINA_PUBLIC_IS_LOCAL=true
```

### 3. 启动开发服务器

```bash
npm run dev
```

访问:
- 网站预览: http://localhost:3000
- Tina CMS 管理界面: http://localhost:3000/admin

### 4. 构建静态网站

```bash
npm run build
```

生成的静态文件将在 `JYACS-web-main/` 目录中。

## 📁 项目结构

```
.
├── .tina/                  # Tina CMS 配置
│   ├── config.ts          # 主配置文件
│   └── templates/         # 内容模型模板
├── content/               # 内容数据
│   ├── pages/            # 页面内容 (JSON)
│   └── global/           # 全局设置
├── JYACS-web-main/       # 静态网站输出
│   ├── assets/           # 资源文件
│   ├── css/              # 样式表
│   └── optimized/        # 优化后的图片
├── scripts/              # 构建脚本
│   └── build.js         # HTML 生成器
├── pages/                # Next.js 页面
└── package.json
```

## 📝 内容管理

### 编辑页面内容

1. 启动开发服务器: `npm run dev`
2. 访问 http://localhost:3000/admin
3. 登录 Tina Cloud (首次使用需要注册)
4. 选择要编辑的页面
5. 实时预览更改
6. 保存更改

### 可编辑内容

- **页面**: 主页、预订页面、联系页面
- **全局设置**: 导航菜单、社交媒体链接、网站配置
- **组件**: Hero 区块、卡片网格、价格列表、表单等

## 🎨 组件类型

### Hero 区块
页面顶部的大型横幅区块，支持：
- 主标题和副标题
- 描述文本
- 背景图片
- 行动号召按钮

### 左右布局块
文本和图片的左右布局，支持：
- 标题和描述
- 图片位置选择（左/右）
- 多个按钮

### 价格列表
展示产品或服务价格，支持：
- 多个价格列表
- 自定义列表标题
- 项目名称和价格

### 卡片网格
展示多个卡片，支持：
- 卡片图片
- 卡片标题和描述
- 响应式网格布局

### 推荐语
客户推荐和评价，支持：
- 推荐语文本
- 作者姓名
- 作者照片

### 表单
自定义表单，支持：
- 多种字段类型（文本、邮箱、电话、日期、多行文本）
- 必填字段标记
- 自定义提交按钮文本

## 🔧 开发

### 添加新页面

1. 在 `content/pages/` 创建新的 JSON 文件
2. 在 `scripts/build.js` 的 `pages` 数组中添加页面配置
3. 运行构建脚本

### 添加新组件类型

1. 在 `.tina/templates/page.ts` 的 `templates` 数组中添加新模板
2. 在 `scripts/build.js` 中添加对应的生成函数
3. 更新 Tina 配置

### 自定义样式

所有样式文件位于 `JYACS-web-main/css/` 目录：
- `main.css` - 主样式
- `nav.css` - 导航样式
- `footer.css` - 页脚样式
- `bookshop.css` - 组件样式

## 🌐 部署

### 部署到 Vercel

1. 将代码推送到 GitHub
2. 在 Vercel 中导入项目
3. 配置环境变量
4. 部署

### 部署到 Netlify

1. 将代码推送到 GitHub
2. 在 Netlify 中导入项目
3. 构建命令: `npm run build`
4. 发布目录: `JYACS-web-main`
5. 配置环境变量

## 📚 资源

- [Tina CMS 文档](https://tina.io/docs/)
- [Next.js 文档](https://nextjs.org/docs)
- [项目设计文档](.kiro/specs/tina-cms-integration/design.md)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可

MIT License
