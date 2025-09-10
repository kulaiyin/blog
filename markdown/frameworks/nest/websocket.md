# 在nextjs中导入websocket

## 安装

```sh
npm i --save @nestjs/websockets @nestjs/platform-socket.io
```

## 使用

使用`nest g gateway websocket`生成websocket服务

```ts
import { SubscribeMessage, WebSocketGateway } from "@nestjs/websockets";

@WebSocketGateway()
export class WebsocketGateway {
  @SubscribeMessage("message")
  handleMessage(client: any, payload: any): string {
    console.log("payload: ", payload);
    return "Hello world!";
  }
}
```

> 在app.module.ts中引入

```ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebsocketGateway } from "./websocket/websocket.gateway";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, WebsocketGateway],
})
export class AppModule {}
```
