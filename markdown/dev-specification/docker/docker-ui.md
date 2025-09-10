# docker-ui 管理

[portainer](https://www.portainer.cn/)

```shell
# 这里开始切换管理员操作
su
#  输入密码
# 若是第一次进管理员 输入 sudo passwd 设置下密码即可
docker run -d -p 9000:9000 --restart=always -v /var/run/docker.sock:/var/run/docker.sock --name prtainer-test portainer/portainer

# admin/123456123456
```

## 添加本地docker
