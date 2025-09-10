# sftp服务

[如何在 Linux 服务器上安装和使用 SFTP？](https://zhuanlan.zhihu.com/p/494150542)

> Secure File Transfer Protocol，也就是安全文件传输协议
>
> 与 SSH 一样，SFTP 也使用加密和加密哈希函数保护您的数据完整性。此外，它还支持多种安全身份验证方法，包括密码和基于密钥的身份验证。**此外，它减少了服务器对外部网络的开放端口，因为它与 SSH 协议在同一端口上运行。**

## 安装

环境: 阿里云服务器

操作系统: Ubuntu 20.04

```sh
# 查看已安装的ssh服务版本信息
dpkg -l | grep ssh

# 安装 openssh-sftp-server 服务
sudo apt install openssh-sftp-server

# 创建一个用户组，用来添加用户
sudo groupadd sftpgroup
# 创建一个用户
sudo useradd -G sftpgroup -d /srv/sftpuser -s /sbin/nologin sftpuser
# 设置用户密码
passwd sftpuser # 1234567890

# 创建sfpt用户主目录
mkdir -p /srv/sftpuser
# 将sfpt用户主目录的权限设置为root用户所有，防止其他用户访问
sudo chown root /srv/sftpuser
# 授予sftpgroup组读取和执行权限，但不能写入。
sudo chmod g+rx /srv/sftpuser
# 接下来，在“ /srv/sftpuser ”目录中创建一个新的“data”目录，并将该“ data ”目录的所有权更改为用户“ sftpuser ”。
mkdir -p /srv/sftpuser/data 
chown sftpuser:sftpuser /srv/sftpuser/data
```
在 SSH 服务器上启用 SFTP

```bash
# 修改配置文件
# vim /etc/ssh/sshd_config
# 备份配置文件
if [ -f /etc/ssh/sshd_config.bak ]; then
    echo "配置文件已存在"
else
    cp /etc/ssh/sshd_config /etc/ssh/sshd_config.bak
    echo "备份配置文件成功"
fi
# 注释以下配置以禁用独立的“ sftp-server ”功能。
#Subsystem      sftp    /usr/lib/openssh/sftp-server
sed -i -r 's/^Subsystem\s+sftp\s+\/usr\/lib\/openssh\/sftp-server/# &/' /etc/ssh/sshd_config.bak1
# 将以下配置粘贴到该行的底部。
cat << 'EOF' >> /etc/ssh/sshd_config
Subsystem sftp internal-sftp

# sftpgroup 用户组名
Match Group sftpgroup
     ChrootDirectory %h
     X11Forwarding no
     AllowTCPForwarding no
     ForceCommand internal-sftp
EOF

# 重启服务
sudo systemctl restart ssh
```

## nodejs 连接

[ssh2-sftp-client](https://www.npmjs.com/package/ssh2-sftp-client) nodejs 连接sftp服务器

<<< @/server/scripts/publish.ts


## 相关

### 1. [局域网下如何ping另一台电脑](../../others/others.md#局域网下如何ping另一台电脑)

### 2. [我在电脑A中使用wsl安装了ubuntu的子系统，我现在在电脑B中如何去ping电脑A的子系统呢](../../others/others.md#我在电脑a中使用wsl安装了ubuntu的子系统我现在在电脑b中如何去ping电脑a的子系统呢)
