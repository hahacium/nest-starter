## 描述

[Nest](https://github.com/nestjs/nest) 框架入门库 (TypeScript)

[点击观看教学视频](https://www.bilibili.com/video/BV1bQ4y1A77L?spm_id_from=333.999.0.0)

## 学前准备
- vscode 编辑器
- chrome 浏览器
- iterm2 命令行工具
- [postman](https://www.postman.com/) 接口调试工具
- [Sourcetree](https://www.sourcetreeapp.com/) git 可视化工具

## 序言
在这次学习过程中, 您将了解 Nest 的核心基础知识。主要是了解基本的 nest 应用程序构建模块。
### 2020-5-17 更新
代码中15次commit，包含以下模块：
#### 1.初始化项目
#### 2.添加控制器
#### 3.添加swagger文档支持
#### 4.添加日志
#### 5.添加错误处理
#### 6.添加pipe
#### 7.添加权限控制
#### 8.邮件服务
#### 9.config配置
#### 10.监控
#### 11.jwt的token令牌支持以及鉴权
#### 12.基于mysql的讲解
#### 13.任务队列
#### 14.文件上传文件下载

如果有同学学习之后有心得，欢迎提PR书写以上对应模块的心得分享。

## TODO-list
- 微服务
- 消息系统（Kafka）日志系统
- MongoDB + Mongoose
- TCP + redis

## 环境依赖
请确保您的操作系统上安装了 Node.js（> = 6.11.0）。

## 建立
使用Nest CLI 建立项目非常简单。只要确保你已经安装了npm，然后在你的 OS 终端中使用以下命令：
```bash

$ npm i -g @nestjs/cli

$ nest new project

```

project 目录将在 src 目录中包含几个核心文件。
- src
    - app.controller.ts
    - app.module.ts
    - main.ts
    
按照约定，新创建的模块应该有一个专用目录。
|    文件   |       描述    | 
| ------------- |-------------|
| main.ts    | 应用程序入口文件。它使用 NestFactory 用来创建 Nest 应用实例。 | 
| app.module.ts     | 定义 AppModule 应用程序的根模块。      |   
| app.controller.ts | 带有单个路由的基本控制器示例。      |   

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
 
## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## QQ交流群
787585478
