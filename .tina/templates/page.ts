import type { TinaField } from "tinacms";

export const pageFields: TinaField[] = [
  {
    type: "string",
    name: "title",
    label: "页面标题",
    required: true,
  },
  {
    type: "string",
    name: "description",
    label: "页面描述",
    ui: {
      component: "textarea",
    },
  },
  {
    type: "object",
    name: "hero",
    label: "Hero 区块",
    fields: [
      {
        type: "string",
        name: "eyebrow",
        label: "副标题",
      },
      {
        type: "string",
        name: "heading",
        label: "主标题",
        required: true,
      },
      {
        type: "rich-text",
        name: "description",
        label: "描述",
      },
      {
        type: "image",
        name: "image",
        label: "背景图片",
      },
      {
        type: "string",
        name: "imageAlignment",
        label: "图片位置",
        options: [
          { value: "left", label: "左侧" },
          { value: "right", label: "右侧" },
          { value: "full-background", label: "全屏背景" },
        ],
      },
      {
        type: "object",
        name: "button",
        label: "按钮",
        fields: [
          {
            type: "string",
            name: "text",
            label: "按钮文本",
          },
          {
            type: "string",
            name: "url",
            label: "按钮链接",
          },
        ],
      },
    ],
  },
  {
    type: "object",
    name: "blocks",
    label: "页面内容块",
    list: true,
    templates: [
      {
        name: "leftRightBlock",
        label: "左右布局块",
        fields: [
          {
            type: "string",
            name: "eyebrow",
            label: "副标题",
          },
          {
            type: "string",
            name: "heading",
            label: "主标题",
            required: true,
          },
          {
            type: "rich-text",
            name: "description",
            label: "描述",
          },
          {
            type: "image",
            name: "image",
            label: "图片",
          },
          {
            type: "string",
            name: "imageAlignment",
            label: "图片位置",
            options: [
              { value: "left", label: "左侧" },
              { value: "right", label: "右侧" },
            ],
          },
          {
            type: "object",
            name: "buttons",
            label: "按钮",
            list: true,
            fields: [
              {
                type: "string",
                name: "text",
                label: "按钮文本",
              },
              {
                type: "string",
                name: "url",
                label: "按钮链接",
              },
            ],
          },
        ],
      },
      {
        name: "priceList",
        label: "价格列表",
        fields: [
          {
            type: "string",
            name: "eyebrow",
            label: "副标题",
          },
          {
            type: "string",
            name: "heading",
            label: "主标题",
            required: true,
          },
          {
            type: "rich-text",
            name: "description",
            label: "描述",
          },
          {
            type: "object",
            name: "lists",
            label: "价格列表",
            list: true,
            fields: [
              {
                type: "string",
                name: "heading",
                label: "列表标题",
              },
              {
                type: "object",
                name: "items",
                label: "项目",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "label",
                    label: "项目名称",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "price",
                    label: "价格",
                    required: true,
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "button",
            label: "按钮",
            fields: [
              {
                type: "string",
                name: "text",
                label: "按钮文本",
              },
              {
                type: "string",
                name: "url",
                label: "按钮链接",
              },
            ],
          },
        ],
      },
      {
        name: "cardGrid",
        label: "卡片网格",
        fields: [
          {
            type: "string",
            name: "eyebrow",
            label: "副标题",
          },
          {
            type: "string",
            name: "heading",
            label: "主标题",
            required: true,
          },
          {
            type: "rich-text",
            name: "description",
            label: "描述",
          },
          {
            type: "object",
            name: "cards",
            label: "卡片",
            list: true,
            fields: [
              {
                type: "image",
                name: "image",
                label: "卡片图片",
              },
              {
                type: "string",
                name: "eyebrow",
                label: "副标题",
              },
              {
                type: "string",
                name: "heading",
                label: "标题",
                required: true,
              },
              {
                type: "rich-text",
                name: "description",
                label: "描述",
              },
            ],
          },
        ],
      },
      {
        name: "testimonial",
        label: "推荐语",
        fields: [
          {
            type: "string",
            name: "eyebrow",
            label: "副标题",
          },
          {
            type: "string",
            name: "quote",
            label: "推荐语",
            required: true,
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "authorName",
            label: "作者姓名",
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "图片",
          },
          {
            type: "string",
            name: "imageAlignment",
            label: "图片位置",
            options: [
              { value: "left", label: "左侧" },
              { value: "right", label: "右侧" },
            ],
          },
          {
            type: "object",
            name: "buttons",
            label: "按钮",
            list: true,
            fields: [
              {
                type: "string",
                name: "text",
                label: "按钮文本",
              },
              {
                type: "string",
                name: "url",
                label: "按钮链接",
              },
            ],
          },
        ],
      },
      {
        name: "form",
        label: "表单",
        fields: [
          {
            type: "string",
            name: "eyebrow",
            label: "副标题",
          },
          {
            type: "string",
            name: "heading",
            label: "主标题",
            required: true,
          },
          {
            type: "rich-text",
            name: "description",
            label: "描述",
          },
          {
            type: "string",
            name: "formId",
            label: "表单 ID",
          },
          {
            type: "string",
            name: "submitText",
            label: "提交按钮文本",
          },
          {
            type: "object",
            name: "fields",
            label: "表单字段",
            list: true,
            fields: [
              {
                type: "string",
                name: "type",
                label: "字段类型",
                required: true,
                options: [
                  { value: "text", label: "文本" },
                  { value: "email", label: "邮箱" },
                  { value: "tel", label: "电话" },
                  { value: "date", label: "日期" },
                  { value: "textarea", label: "多行文本" },
                ],
              },
              {
                type: "string",
                name: "label",
                label: "标签",
                required: true,
              },
              {
                type: "string",
                name: "placeholder",
                label: "占位符",
              },
              {
                type: "boolean",
                name: "required",
                label: "必填",
              },
            ],
          },
        ],
      },
    ],
  },
];
