# redis 数据库

## 安装

[Redis 安装](https://www.redis.net.cn/tutorial/3503.html)

[在nest中使用redis](../frameworks/nest/redis.md)

### linux 下安装 redis
```sh
sudo apt-get update
sudo apt-get install redis-server -y

# 启动 redis
redis-server
# 查看 redis 是否启动？
redis-cli
# redis 127.0.0.1:6379>

# 远程连接
redis-cli -h 47.116.182.231 -p 6379
```


## 配置

redis默认安装后,是没有账号和密码的.在生产环境下,需要配置账号和密码.
我们可以通过 redis 的配置文件设置密码参数，这样客户端连接到 redis 服务就需要密码验证，这样可以让你的 redis 服务更安全。

[Redis 安全](https://www.redis.net.cn/tutorial/3520.html)


查看是否设置了密码验证

```sh
CONFIG get requirepass
# 1) "requirepass"
# 2) ""

CONFIG set requirepass "redis_server"

AUTH redis_server
```

## 连接

### nestjs连接

```js
import { Injectable } from "@nestjs/common";
import { RedisClientType } from "@redis/client";
import { RedisVariadicArgument } from "@redis/client/dist/lib/commands/generic-transformers";
import { createClient } from "redis";

@Injectable()
export class RedisService {
  private client: RedisClientType;
  constructor() {
    // 6379, "47.116.182.231", {}
    this.client = createClient({
      url: "redis://47.116.182.231:6379"
    });
    this.client.connect().then(() => {
      console.log("redis connected");
    });

    this.client.on("error", err => {
      console.log("Redis Client Error", err);
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

  rpush(key: string, value: unknown) {
    if (Array.isArray(value) || typeof value === "object") {
      value = JSON.stringify(value);
    }
    return this.client.rPush(key, value as RedisVariadicArgument);
  }
}
```
