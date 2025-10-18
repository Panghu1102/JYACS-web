import { defineConfig } from "tinacms";
import { pageFields } from "./templates/page";
import { heroFields } from "./templates/hero";
import { leftRightBlockFields } from "./templates/leftRightBlock";
import { priceListFields } from "./templates/priceList";
import { cardGridFields } from "./templates/cardGrid";
import { formFields } from "./templates/form";
import { testimonialFields } from "./templates/testimonial";

export default defineConfig({
  branch: process.env.TINA_BRANCH || "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  
  build: {
    outputFolder: "admin",
    publicFolder: "JYACS-web-main",
  },
  
  media: {
    tina: {
      mediaRoot: "assets/uploads",
      publicFolder: "JYACS-web-main",
    },
  },
  
  schema: {
    collections: [
      {
        name: "page",
        label: "页面",
        path: "content/pages",
        format: "json",
        ui: {
          router: ({ document }) => {
            if (document._sys.filename === "index") {
              return `/`;
            }
            return `/${document._sys.filename}`;
          },
        },
        fields: pageFields,
      },
      {
        name: "navigation",
        label: "导航设置",
        path: "content/global",
        format: "json",
        ui: {
          global: true,
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "navigation",
        },
        fields: [
          {
            type: "image",
            name: "logo",
            label: "网站 Logo",
          },
          {
            type: "object",
            name: "menuItems",
            label: "菜单项",
            list: true,
            ui: {
              itemProps: (item) => ({
                label: item?.text,
              }),
            },
            fields: [
              {
                type: "string",
                name: "text",
                label: "菜单文本",
                required: true,
              },
              {
                type: "string",
                name: "url",
                label: "链接地址",
                required: true,
              },
            ],
          },
          {
            type: "object",
            name: "socialLinks",
            label: "社交媒体链接",
            list: true,
            ui: {
              itemProps: (item) => ({
                label: item?.platform,
              }),
            },
            fields: [
              {
                type: "string",
                name: "platform",
                label: "平台",
                required: true,
                options: [
                  { value: "youtube", label: "YouTube" },
                  { value: "facebook", label: "Facebook" },
                  { value: "linkedin", label: "LinkedIn" },
                  { value: "twitter", label: "Twitter" },
                  { value: "instagram", label: "Instagram" },
                ],
              },
              {
                type: "string",
                name: "url",
                label: "链接地址",
                required: true,
              },
            ],
          },
        ],
      },
      {
        name: "settings",
        label: "网站设置",
        path: "content/global",
        format: "json",
        ui: {
          global: true,
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "settings",
        },
        fields: [
          {
            type: "string",
            name: "siteTitle",
            label: "网站标题",
            required: true,
          },
          {
            type: "string",
            name: "siteDescription",
            label: "网站描述",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "object",
            name: "colors",
            label: "配色方案",
            fields: [
              {
                type: "string",
                name: "primary",
                label: "主色调",
                ui: {
                  component: "color",
                },
              },
              {
                type: "string",
                name: "secondary",
                label: "次要色",
                ui: {
                  component: "color",
                },
              },
              {
                type: "string",
                name: "text",
                label: "文字颜色",
                ui: {
                  component: "color",
                },
              },
              {
                type: "string",
                name: "background",
                label: "背景颜色",
                ui: {
                  component: "color",
                },
              },
            ],
          },
        ],
      },
    ],
  },
});
