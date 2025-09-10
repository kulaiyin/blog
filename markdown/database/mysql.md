# mysql 数据库

## 安装

```bash
sudo apt-get update
sudo apt-get install mysql-server -y
sudo mysql_secure_installation
```

```bash
lower_case_table_names=1 # 忽略大小写

# 远程连接需要修改
/ect/mysql/mysql.conf.d/mysqld.cnf
bind-address=0.0.0.0
# 重启数据库服务
sudo systemctl restart mysql
```

## 卸载

```bash
sudo systemctl stop mysql
sudo apt-get remove --purge mysql-server mysql-client mysql-common
sudo rm -rf /etc/mysql /var/lib/mysql
sudo apt-get autoremove
sudo apt-get autoclean
dpkg -l | grep mysql

# The --purge option ensures configuration files are deleted
# /var/lib/mysql contains all database files - remove only if you want to completely wipe all data
# Consider backing up databases before uninstalling if needed
```

## 使用

### 创建用户

[MySQL创建用户与授权](https://www.cnblogs.com/sos-blue/p/6852945.html)

```bash
# 代表用户名，%代表任意主机都可以连接。localhost代表只能本地访问
CREATE USER 'kulaiyin'@'localhost' IDENTIFIED BY '123456';
CREATE USER 'kulaiyin'@'%' IDENTIFIED BY '123456';
# if You are not allowed to create a user with GRANT
GRANT ALL ON test_db.* TO 'kulaiyin'@'%';
# 设置密码
SET PASSWORD FOR 'kulaiyin'@'%' = '123456';
```

> 创建表，并分配给用户权限

```bash
# 使用root角色进行创建数据库和用户，并分配权限
CREATE DATABASE test_db;
# 分配权限
GRANT ALL PRIVILEGES ON shop.* TO 'kulaiyin'@'%';
```

### 连接mysql
```sh
# 本地
mysql -u root -p
# 远程
mysql -h 192.168.5.116 -P 3306 -u root -p database_name
mysql -h 47.116.182.231 -P 3306 -u kulaiyin -p test_db
```

## 连接

### nestjs连接

```js
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { HealthController } from "./modules/health/health.controller";
import { HealthService } from "./modules/health/health.service";
import { RedisService } from "./common/service/redis/redis.service";
import { LiveCenterModule } from "./modules/live-center/live-center.module";
import { MysqlService } from "./common/service/mysql/mysql.service";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "47.116.182.231",
      port: 3306,
      username: "kulaiyin",
      password: "123456",
      database: "test_db",
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: true
    }),
    LiveCenterModule
  ],
  controllers: [AppController, HealthController],
  providers: [AppService, HealthService, RedisService, MysqlService]
})
export class AppModule {}
```
