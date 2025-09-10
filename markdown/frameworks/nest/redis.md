# 在nest中使用redis

## 安装

```sh
yarn add @redis/client
yarn add redis
```

## 使用

```ts
import { Injectable } from '@nestjs/common';
import { RedisClientType } from '@redis/client';
import { createClient } from 'redis';

@Injectable()
export class RedisService {
  private client: RedisClientType;
  constructor() {
    this.client = createClient({});
    this.client.connect().then((res) => {
      console.log('redis connected');
    });
  }

  get(key: string) {
    return this.client.get(key);
  }

  set(key: string, value: string) {
    return this.client.set(key, value);
  }

  lRange(key: string, start: number = 0, end: number = -1) {
    return this.client.lRange(key, start, end);
  }

  rpush(key: string, value: any) {
    if (Array.isArray(value) || typeof value === 'object') {
      value = JSON.stringify(value);
    }
    return this.client.rPush(key, value);
  }
}
```

> 在app.modules.ts中引入
```ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RedisService } from './common/service/redis/redis.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, RedisService],
})
export class AppModule {}
```
