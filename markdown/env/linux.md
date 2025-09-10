# linux 下开发环境安装

## 配置git存储账号密码

```sh
gitVersion=`git --version`
if [ -z "$gitVersion" ] ; then
    echo "git不存在，请先安装git..."
    exit 0
else
    echo "git已经安装过了..."
fi
# git用户信息
git config --global user.name "kulaiyin"
git config --global user.email "kly0214@163.com"
# 保存账号密码
git config --global credential.helper store
```

## 创建桌面图标

```sh
echo "创建桌面图标..."

[Desktop Entry]
Name=CLion
Comment=开发C++工具
Exec=/works/UsedTools/clion/bin/clion.sh
Type=Application
Terminal=false
Icon=/works/UsedTools/clion/bin/clion.png

# 修改权限
chmod 744 /usr/share/applications/CLion.desktop
```
