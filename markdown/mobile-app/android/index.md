# Android 平台

## 仓库源使用国内镜像源

```gradle
repositories { 
  mavenLocal()
  maven { url 'https://maven.aliyun.com/repository/public/' }
  maven { url 'https://maven.aliyun.com/repository/google/'}
  maven { url 'https://maven.aliyun.com/repository/jcenter/'}
  maven { url 'https://maven.aliyun.com/repository/gradle-plugin/'}
  maven { url 'https://maven.aliyun.com/repository/apache-snapshots/'}
}
```

```kotlin
pluginManagement {
    repositories {
        maven { url = uri("https://maven.aliyun.com/repository/gradle-plugin") }  // 阿里云插件镜像
        maven { url = uri("https://mirrors.cloud.tencent.com/gradle-plugin") }    // 腾讯云插件镜像
        maven { url = uri("https://maven.aliyun.com/repository/central") }
        maven { url = uri("https://maven.aliyun.com/repository/jcenter") }
        maven { url = uri("https://maven.aliyun.com/repository/google") }
        maven { url = uri("https://maven.aliyun.com/repository/gradle-plugin") }
        maven { url = uri("https://maven.aliyun.com/repository/public") }
        maven { url = uri("https://jitpack.io") }
        google()
        gradlePluginPortal()
        mavenCentral()
        mavenLocal()
    }
}

dependencyResolutionManagement {
    repositories {
        maven { url = uri("https://maven.aliyun.com/repository/gradle-plugin") }  // 阿里云插件镜像
        maven { url = uri("https://mirrors.cloud.tencent.com/gradle-plugin") }    // 腾讯云插件镜像
        maven { url = uri("https://maven.aliyun.com/repository/central") }
        maven { url = uri("https://maven.aliyun.com/repository/jcenter") }
        maven { url = uri("https://maven.aliyun.com/repository/google") }
        maven { url = uri("https://maven.aliyun.com/repository/gradle-plugin") }
        maven { url = uri("https://maven.aliyun.com/repository/public") }
        maven { url = uri("https://jitpack.io") }
        google()
        mavenCentral()
        mavenLocal()
    }
}
```

## gradle使用腾讯源

```txt
gradle-wrapper.properties

distributionUrl=https\://services.gradle.org/distributions/gradle-8.3-all.zip
替换为
distributionUrl=https\://mirrors.cloud.tencent.com/gradle/gradle-8.3-all.zip
```
