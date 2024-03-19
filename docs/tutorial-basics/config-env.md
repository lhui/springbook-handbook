---
sidebar_position: 1
---

# MacOS 系统配置


本节主要介绍如何在 Mac 上配置 Spring Boot 环境。推荐使用 [IntelliJ IDEA](https://www.jetbrains.com/idea/) 作为 IDE 工具，[Gradle](https://gradle.org/) 作为构建工具，以及 [JDK 17](https://www.oracle.com/java/technologies/javase-jdk17-downloads.html) 作为 Java 版本。优秀的软件可以事半功倍。IntelliJ IDEA 专业版有三种授权方式：直接购买、通过官方赞助活动获得（如学生认证免费获取），以及企业授权（加入有此福利的公司）。这三种方式获得的软件使用起来完全一致，只是授权方式不同。学生版/开源版本可能有商业使用限制，而其他两种商业授权方式则没有限制。

为了方便开发，建议安装一个 Java 环境，并使用 [SDKMAN](https://sdkman.io/) 来管理 Java 版本。

## 使用 SDKMAN 安装 Java

1. 打开终端（Terminal）应用程序。

2. 在终端中运行以下命令来安装 SDKMAN：

    ```bash
    curl -s "https://get.sdkman.io" | bash
    ```

3. 安装完成后，运行以下命令来初始化 SDKMAN：

    ```bash
    source "$HOME/.sdkman/bin/sdkman-init.sh"
    ```

4. 运行以下命令来安装 Java：

    ```bash
    sdk install java 17.0.1-open
    ```

5. 运行以下命令来查看已安装的 Java 版本：

    ```bash
    sdk list java
    ```
    运行结果如下：

    ```bash
    ================================================================================
    Available Java Versions
    ================================================================================
    Vendor        | Use | Version      | Dist    | Status     | Identifier
    --------------------------------------------------------------------------------
    AdoptOpenJDK  |     | 17.0.1.j9    | adpt    |            | 17.0.1.j9-adpt
    AdoptOpenJDK  |     | 17.0.1.hs    | adpt    |            | 17.0.1.hs-adpt
    AdoptOpenJDK  |     | 11.0.12.j9   | adpt    |            | 11.0.12.j9-adpt
    AdoptOpenJDK  |     | 11.0.12.hs   | adpt    |            | 11.0.12.hs-adpt
    AdoptOpenJDK  |     | 8.0.292.hs   | adpt    |            | 8.0.292.hs-adpt
    Amazon        |     | 11.0.12      | amzn    |            | 11.0.12-amzn
    Amazon        |     | 8.0.292      | amzn    |            | 8.0.292-amzn
    Azul Zulu     |     | 17.0.0       | zulu    |            | 17.0.0-zulu
    Azul Zulu     |     | 11.0.12      | zulu    |            | 11.0.12-zulu
    Azul Zulu     |     | 8.0.292      | zulu    |            | 8.0.292-zulu
    BellSoft      |     | 17.0.1.fx    | librca  |            | 17.0.1.fx-librca
    BellSoft      |     | 17.0.1       | librca  |            | 17.0.1-librca
    BellSoft      |     | 11.0.12.fx   | librca  |            | 11.0.12.fx-librca
    BellSoft      |     | 11.0.12      | librca  |            | 11.0.12-librca
    BellSoft      |     | 8.0.292.fx   | librca  |            | 8.0.292.fx-librca
    BellSoft      |     | 8.0.292      | librca  |            | 8.0.292-librca
    GraalVM       |     | 21.2.0       | grl     |            | 21.2.0-grl
    Liberica      |     | 17.0.1       | librca  |            | 17.0.1-librca
    Liberica      |     | 11.0.12      | librca  |            | 11.0.12-librca
    Liberica      |     | 8.0.292      | librca  |            | 8.0.292-librca
    OpenJ9        |     | 11.0.12      | oj9     |            | 11.0.12-oj9
    OpenJ9        |     | 8.0.292      | oj9     |            | 8.0.292-oj9
    Oracle        |     | 17.0.1       | adpt    |            | 17.0.1-adpt
    Oracle        |     | 11.0.12      | adpt    |            | 11.0.12-adpt
    Oracle        |     | 8.0.292      | adpt    |            | 8.0.292-adpt
    SAP           |     | 17.0.1       | adpt    |            | 17.0.1-adpt
    SAP           |     | 11.0.12      | adpt    |            | 11.0.12-adpt
    SAP           |     | 8.0.292      | adpt    |            | 8.0.292-adpt
   ================================================================================
    ```

6. 运行以下命令来设置默认的 Java 版本：

    ```bash
    sdk default java 17.0.1-open
    ```
    运行结果如下：

    ```bash
    Default java version set to 17.0.1-open
    ```

这样就完成了 Java 的安装，接下来就可以安装 IntelliJ IDEA 了。

## 安装 IntelliJ IDEA

1. 打开浏览器，访问 [IntelliJ IDEA 官网](https://www.jetbrains.com/idea/)，下载 IntelliJ IDEA 的安装包。
2. 下载完成后，双击安装包，按照提示完成安装。
3. 安装完成后，打开 IntelliJ IDEA，按照提示进行注册或者激活。
4. 安装完成后，打开 IntelliJ IDEA，按照提示进行配置。

## 安装 Gradle

1. 打开终端（Terminal）应用程序。
2. 运行以下命令来安装 Gradle：

    ```bash
    sdk install gradle
    ```
    运行结果如下：

    ```bash
    ================================================================================
    Available Gradle Versions
    ================================================================================
    > * 7.2
      7.1.1
      7.1
      7.0
    ================================================================================
    ```
3. 运行以下命令来查看已安装的 Gradle 版本：

    ```bash
    sdk list gradle
    ```
    运行结果如下：

    ```bash
    ================================================================================
    Available Gradle Versions
    ================================================================================
    > * 7.2
      7.1.1
      7.1
      7.0
    ================================================================================
    ```
4. 运行以下命令来设置默认的 Gradle 版本：

    ```bash
    sdk default gradle 7.2
    ```
    运行结果如下：

    ```bash
    Default gradle version set to 7.2
    ```
这样就完成了 Gradle 的安装，接下来就可以开始使用 IntelliJ IDEA 来创建 Springboot 项目了。



