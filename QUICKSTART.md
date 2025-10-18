# 🚀 Tina CMS 集成快速入门

## ✅ 已完成的工作

Tina CMS 已成功集成到 JYACS 项目中！以下是已完成的内容：

### 📦 项目配置
- ✅ Node.js 项目初始化
- ✅ 依赖安装配置 (package.json)
- ✅ TypeScript 配置
- ✅ Git 忽略文件配置
- ✅ 环境变量模板

### 🎨 Tina CMS 配置
- ✅ Tina 主配置文件 (.tina/config.ts)
- ✅ 页面内容模型定义
- ✅ 组件模板系统（Hero、卡片、表单等）
- ✅ 全局设置模型（导航、网站配置）

### 📝 内容数据
- ✅ 主页内容 (content/pages/index.json)
- ✅ 预订页面内容 (content/pages/booking.json)
- ✅ 联系页面内容 (content/pages/contact.json)
- ✅ 导航配置 (content/global/navigation.json)
- ✅ 网站设置 (content/global/settings.json)

### 🔨 构建系统
- ✅ HTML 生成脚本 (scripts/build.js)
- ✅ 支持所有组件类型
- ✅ 富文本渲染
- ✅ 导航和页脚生成

### 🌐 Next.js 集成
- ✅ Next.js 配置
- ✅ Tina Provider 组件
- ✅ 管理界面页面
- ✅ 首页示例

### 📚 文档
- ✅ README.md - 完整使用文档
- ✅ 快速入门指南（本文件）

## 🎯 下一步操作

### 1. 安装依赖

```bash
npm install
```

这将安装所有必需的包：
- tinacms (CMS 核心)
- next.js (开发服务器)
- react (UI 框架)
- marked (Markdown 解析)
- sharp (图片优化)

### 2. 配置 Tina Cloud

#### 选项 A: 本地开发模式（推荐开始使用）

编辑 `.env.local`:
```env
TINA_PUBLIC_IS_LOCAL=true
```

这样可以在不连接 Tina Cloud 的情况下本地测试。

#### 选项 B: 连接 Tina Cloud

1. 访问 https://app.tina.io/
2. 注册/登录账户
3. 创建新项目
4. 获取 Client ID 和 Token
5. 更新 `.env.local`:

```env
NEXT_PUBLIC_TINA_CLIENT_ID=your_client_id_here
TINA_TOKEN=your_token_here
TINA_BRANCH=main
```

### 3. 启动开发服务器

```bash
npm run dev
```

这将启动：
- Next.js 开发服务器 (http://localhost:3000)
- Tina CMS 管理界面 (http://localhost:3000/admin)

### 4. 编辑内容

1. 打开浏览器访问 http://localhost:3000/admin
2. 选择要编辑的页面（Pages > index, booking, 或 contact）
3. 或编辑全局设置（Global Settings > Navigation 或 Settings）
4. 实时预览更改
5. 点击保存

### 5. 构建静态网站

```bash
npm run build
```

这将：
1. 运行 Tina 构建
2. 构建 Next.js 应用
3. 执行 HTML 生成脚本
4. 输出静态文件到 `JYACS-web-main/` 目录

### 6. 测试生成的网站

生成的静态文件在 `JYACS-web-main/` 目录中，你可以：

```bash
# 使用简单的 HTTP 服务器
npx serve JYACS-web-main

# 或使用 Python
cd JYACS-web-main
python -m http.server 8000
```

然后访问 http://localhost:8000

## 📂 项目结构说明

```
.
├── .tina/                      # Tina CMS 配置
│   ├── config.ts              # 主配置
│   ├── templates/             # 内容模型
│   └── components/            # React 组件
│
├── content/                    # 内容数据（JSON）
│   ├── pages/                 # 页面内容
│   │   ├── index.json        # 主页
│   │   ├── booking.json      # 预订页
│   │   └── contact.json      # 联系页
│   └── global/                # 全局设置
│       ├── navigation.json   # 导航
│       └── settings.json     # 网站配置
│
├── JYACS-web-main/            # 原始静态网站 + 输出
│   ├── assets/               # 资源文件
│   ├── css/                  # 样式表
│   ├── optimized/            # 优化图片
│   └── *.html                # 生成的 HTML
│
├── scripts/                   # 构建脚本
│   └── build.js              # HTML 生成器
│
├── pages/                     # Next.js 页面
│   ├── _app.tsx              # App 组件
│   ├── index.tsx             # 首页
│   └── admin/                # 管理界面
│
├── package.json               # 依赖配置
├── tsconfig.json             # TypeScript 配置
├── next.config.js            # Next.js 配置
├── .env.local                # 环境变量
└── README.md                 # 完整文档
```

## 🎨 可用组件

在 Tina 管理界面中，你可以添加以下组件到页面：

### 1. Hero 区块
- 大型横幅
- 主标题 + 副标题
- 背景图片
- 行动号召按钮

### 2. 左右布局块
- 文本 + 图片
- 图片位置可选（左/右）
- 支持多个按钮

### 3. 价格列表
- 展示服务/产品价格
- 支持多个列表
- 自定义项目和价格

### 4. 卡片网格
- 响应式网格
- 图片 + 文本卡片
- 适合展示服务或产品

### 5. 推荐语
- 客户评价
- 作者信息
- 作者照片

### 6. 表单
- 自定义字段
- 支持多种输入类型
- 必填字段标记

## 🔧 常见任务

### 添加新页面

1. 在 `content/pages/` 创建新的 JSON 文件
2. 在 Tina 管理界面编辑内容
3. 在 `scripts/build.js` 的 `pages` 数组添加配置：

```javascript
const pages = [
  { name: 'index', path: '' },
  { name: 'booking', path: 'booking' },
  { name: 'contact', path: 'contact' },
  { name: 'about', path: 'about' },  // 新页面
];
```

4. 运行 `npm run build`

### 修改样式

所有样式在 `JYACS-web-main/css/` 目录：
- `main.css` - 主样式和布局
- `nav.css` - 导航栏样式
- `footer.css` - 页脚样式
- `bookshop.css` - 组件样式

### 更新导航菜单

1. 访问 http://localhost:3000/admin
2. 点击 "Global Settings" > "Navigation"
3. 编辑菜单项
4. 保存

### 更改网站配色

1. 访问 http://localhost:3000/admin
2. 点击 "Global Settings" > "Settings"
3. 编辑 "Color Scheme"
4. 保存

## 🚨 故障排除

### 依赖安装失败

```bash
# 清除缓存
rm -rf node_modules package-lock.json
npm install
```

### Tina 管理界面无法访问

1. 确保开发服务器正在运行
2. 检查 `.env.local` 配置
3. 尝试清除浏览器缓存

### 构建失败

1. 检查 `content/` 目录中的 JSON 文件格式
2. 确保所有必需字段都已填写
3. 查看控制台错误信息

### 图片不显示

1. 确保图片路径正确（相对于 `JYACS-web-main/`）
2. 检查图片文件是否存在
3. 图片路径应以 `/` 开头，如 `/optimized/image.jpg`

## 📞 获取帮助

- 查看 [README.md](./README.md) 获取完整文档
- 查看 [Tina CMS 文档](https://tina.io/docs/)
- 查看 [设计文档](.kiro/specs/tina-cms-integration/design.md)

## 🎉 完成！

你现在已经拥有一个功能完整的 Tina CMS 集成！

开始编辑内容，构建你的网站吧！ 🚀
