# macos 下开发环境安装

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

codePath=`which code`
# 如果不存在code路径，则安装vscode
if [ -z "$codePath" ] ; then
    echo "vscode 不存在，开始安装..."
    brew install --cask visual-studio-code
else
    echo "vscode已经安装过了..."
fi

# 安装chrome
if [ -d "/Applications/Google Chrome.app" ] ; then
    echo "google浏览器已经安装过了。。。"
else
    echo "google浏览器尚未安装。。。"
    brew install --cask google-chrome
fi

# 安装 android studio
androidStudioPath=`which studio`
if [ -z "$androidStudioPath" ] ; then
    echo "开始安装android studio..."
    brew install --cask android-studio
else
    echo "android studio已经安装过了..."
fi

# 安装钉钉
if [ -d "/Applications/DingTalk.app" ] ; then
    echo "钉钉已经安装过了..."
else
    echo "开始安装钉钉..."
    brew install --cask dingtalk
fi

echo "开始安装vscode插件..."

plugins=(
    Alibaba-Cloud.tongyi-lingma
    formulahendry.code-runner
    esbenp.prettier-vscode
    Vue.volar
    MS-CEINTL.vscode-language-pack-zh-hans
    foam.foam-vscode
    donjayamanne.githistory
    eamodio.gitlens
    yzhang.markdown-all-in-one
    Redis.redis-for-vscode
)
for plugin in "${plugins[@]}"; do
    code --install-extension $plugin
done

# 安装ruby开发环境
rbenvPath=`which rbenv`
if [ -z "$rbenvPath" ] ; then
    brew install rbenv ruby-build
    rbenv init
    rbenv install 3.4.4
    rbenv global 3.4.4
    echo "开始安装ruby开发环境..."
else
    echo "ruby开发环境已经安装过了..."
fi

# 添加镜像源并移除默认源
gem sources --add https://mirrors.tuna.tsinghua.edu.cn/rubygems/ --remove https://rubygems.org/
# 列出已有源
gem sources -l
# 应该只有镜像源一个

if [ -f "$HOME/.rbenv/shims/ruby" ] ; then
    sudo gem install cocoapods
    echo "ruby已经安装过了..."
else
    # rbenv install 3.2.8
    # rbenv global 3.2.8
    echo "开始安装ruby..."
fi

# nvm
# 执行
nvmPath=`which nvm`
# 如果不是空字符串，说明nvm已经安装
if [[ -n "$nvmPath" ]] ; then
    echo "nvm已经安装过了..."
else
    echo "开始安装nvm..."
    bash -c "$(curl -fsSL https://gitee.com/RubyMetric/nvm-cn/raw/main/install.sh)"
    # 安装完成后执行
    source ~/.nvm/nvm.sh
    # 此时可以查到版本信息则表示安装成功
    nvm -v
fi
```
