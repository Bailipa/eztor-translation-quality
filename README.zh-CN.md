# EZTor 翻译质量评分

> 面向英语词汇翻译的可解释质量评分模块。

[English](README.md) · 中文

[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](./src) [![测试](https://img.shields.io/badge/测试-Vitest-6e9f18)](./tests) [![许可证](https://img.shields.io/badge/许可证-GPL--3.0-green)](./LICENSE)

这是一个无运行时依赖的 TypeScript 小模块，通过清晰可见的质量因素为词汇翻译评分，而不是调用不可解释的黑盒模型。它从 EZTor 学习平台中独立出来，方便其他语言学习工具复用。

## 检查内容

- 音标和词性是否完整
- 翻译、例句和例句翻译是否存在
- 是否包含多个词性
- 翻译和例句长度是否足够
- 输入是否是句子、非英文词头、错误结果或敏感结果

评分结果包含 0 到 100 的分数、A 到 D 的等级，以及每个判断因素。

## 在线 Demo

[打开交互式 Demo](https://bailipa.github.io/eztor-translation-quality/) · [查看示例](examples/)

## 运行测试

```bash
npm install
npm test
```

## 设计目标

评分器保持确定性和可检查性，适合给导入词库排序、筛选公共例句或辅助编辑复核。它是启发式工具，应该被当作质量提示，而不是语言事实裁判。

## 许可证

GPL-3.0，详见 [`LICENSE`](LICENSE)。
