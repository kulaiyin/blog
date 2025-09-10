# 鸿蒙平台

[arkui组件源码仓库](https://gitee.com/openharmony/arkui_ace_engine)
[主题颜色](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/theme_skinning)

## [鸿蒙学堂](./courses/index.md)

## 证书

![HarmonyOS应用开发者基础认证](../../images/harmony/harmony_basic.jpg)

## APP签名证书

### 调试签名

```txt
ketstore 

alias: hmy_debug
password: 123456aA
```


## 功能列表

### 俄罗斯方块

![俄罗斯方块](../../images/harmony/tetris.png)


## 开发记录

1. 资源文件使用

```ts
@Component
export struct MainPage {
    // bad
    private search: string = "app.media.material_icons_add1";
    // good
    private search: string = $r("app.media.material_icons_add1");

    build() {
        Scroll() {
        Column() {
            Row() {
            // 使用变量当文件不存在时，不会出现错误
            Image($r(this.search)).fillColor(Color.Red).size({ width: 48, height: 48 })
            // 正常
            Image($r("app.media.material_icons_add")).fillColor(Color.Black)
            // 编译器会提示文件不存在从错误
            Image($r("app.media.material_icons_add1")).fillColor(Color.Black)
            }
        }
        }
    }
}
```

2. 抽屉SideBarContainer

> 1. 在SideBarContainer使用animation属性会出现首次切换无效的现象
> 2. 外部调用组件内toggle方法实现切换抽屉的效果

```ts
@Component
export struct Home {
  @State isShow: boolean = false

  build() {
    Column() {
      DrawerPage({
        isShow: this.isShow
      })
      Text("Home").fontSize(36)
    }
  }
}

const map: Map<object, number> = new Map()
let count = 0

export function Id(data: object) {
  if (map.has(data)) {
    return map.get(data)
  }
  count++
  map.set(data, count)
  return count
}

export class DrawerPageController {
  private ins: DrawerPage | null = null;
  private count: number = 0

  attach(ins: DrawerPage) {
    this.ins = ins;
    this.count++
    console.log("DrawerPageController attach: ", this.ins, Id(this))
  }

  destroy() {
    console.log("DrawerPageController destroy: ", this.ins)
    this.ins = null
  }

  toggle() {
    console.log("DrawerPageController toggle: ", this.ins, this.count, Id(this))
    if (this.ins) {
      this.ins.toggleSideBarDrawer()
    }
  }
}

export class DrawerPageEvents {
  onCreated: ((controller: DrawerPageController) => void) | undefined

  constructor(onCreated?: (controller: DrawerPageController) => void) {
    this.onCreated = onCreated
  }
}

@Component
export struct DrawerPage {
  /**
   * 控制抽屉展开/收起
   */
  @Prop isShow: boolean = false;
  /**
   * 指定是否使用了动画属性
   * 判断是否进行animation导致bug的问题处理逻辑
   */
  @Prop enableAnimation: boolean = true;
  /**
   * 控制抽屉打开/关闭
   * 不是通过外部传入controller的原因是：当外部传入controller后并在aboutToAppear进行attach到当前实例
   * 在后续调用toggle时会发现不是相同的对象，但是基本数据类型的值是相同的，但是引用类型的值是不同的。
   * attach中的this.ins是最新的值
   * toggle中的this.ins仍为null
   *
   * 替代方案：
   * 使用内置控制器，通过函数回调的方式，返回给外部使用的组件，有外部组件保存为临时变量
   */
  // @Prop controller: DrawerPageController | null = null;
  /**
   * 延迟初始化，只有当外部传入事件onCreated时，才会在aboutToAppear中进行初始化
   */
  innerController: DrawerPageController | null = null;
  /**
   * @Link 对象必须传入且不能为null
   */
  @Link events: DrawerPageEvents;
  /**
   * 保存初始传入状态
   */
  initIsShow = false;
  /**
   * 抽屉打开/关闭次数
   */
  emitCount: number = 0;

  aboutToAppear(): void {
    this.initIsShow = this.isShow
    if (this.events?.onCreated) {
      this.innerController = new DrawerPageController()
      this.innerController.attach(this)
      this.events.onCreated(this.innerController)
    }
  }

  aboutToDisappear(): void {
    if (this.innerController) {
      this.innerController.destroy()
    }
  }

  @Builder
  _sideBarBuilder() {
  }

  @BuilderParam
  sideBarBuilder: () => void = this._sideBarBuilder

  @Builder
  _contentBuilder() {
  }

  @BuilderParam
  contentBuilder: () => void = this._contentBuilder

  /**
   * 用来判断是否是真正的显示了抽屉
   * @returns
   */
  isShowMode(): boolean {
    if (!this.enableAnimation) {
      return this.isShow
    }
    if (this.initIsShow) {
      if (this.emitCount === 0 || this.emitCount % 2 === 1) {
        return true
      }
    } else {
      if (this.emitCount > 0 && this.emitCount % 2 === 0) {
        return true
      }
    }
    return false
  }

  toggleSideBarDrawer() {
    this.isShow = !this.isShow
  }

  build() {
    // SideBarContainer 就是官方抽屉容器
    // Embed 模式：主内容不推移
    SideBarContainer(SideBarContainerType.Embed) {
      // ① 抽屉内容（侧边栏）
      Column() {
        // Text('侧边栏标题').fontSize(20).fontColor(Color.White)
        //
        // Divider().color('#CCCCCC').margin({ top: 12 })
        // Row() {
        //   Image($r('app.media.material_icons_menu')).width(20).height(20)
        //   Text('菜单项 1').fontColor(Color.White).margin({ left: 8 })
        // }.width('100%').padding(8).onClick(() => console.info('item1'))
        //
        // Row() {
        //   Image($r('app.media.material_icons_menu')).width(20).height(20)
        //   Text('菜单项 2').fontColor(Color.White).margin({ left: 8 })
        // }.width('100%').padding(8).onClick(() => console.info('item2'))

        this.sideBarBuilder()
      }
      .width('100%')
      .height('100%')
      .backgroundColor('#304455')
      .padding({ top: 16 })

      // ② 主内容区
      Column() {
        // 顶部栏 + 菜单按钮
        // Row() {
        //   Image($r('app.media.material_icons_menu'))
        //     .width(24).height(24)
        //     .onClick(() => this.toggleSideBarDrawer()) // 点击打开抽屉
        //   Text('首页').fontSize(18).margin({ left: 16 })
        // }
        // .width('100%')
        // .padding(12)
        // .backgroundColor('#F2F2F2')
        //
        // // 正文
        // Text('主内容区域' + this.isShow + this.emitCount)
        //   .fontSize(30)
        //   .margin({ top: 100 })
        this.contentBuilder()
      }
      .width('100%')
      .height('100%')
      .backgroundColor(Color.White)
      .onClick(() => {
        console.log("aboutToAppear 2： " + this.isShowMode())
        if (this.isShowMode()) {
          this.toggleSideBarDrawer()
        }
      })
    }
    .showSideBar(this.isShow) // 手动控制
    .autoHide(false) // 不自动隐藏
    .showControlButton(false) // 隐藏自带按钮，我们自己控
    .sideBarWidth(240) // 抽屉宽度
    .sideBarPosition(SideBarPosition.Start) // 从左侧滑出
    /**
     * 当组件定义了animation属性后，会出现点击抽屉按钮，页面没有响应的现象
     * 这时只能通过异步再次调用来解决这个问题，此时isShow的值并不符合预期。
     */
    .animation({ duration: 250 })
    .onChange((isShow: boolean) => {
      this.isShow = isShow
      if (this.enableAnimation) {
        this.emitCount++
        if (this.emitCount === 1) {
          setTimeout(() => {
            this.toggleSideBarDrawer()
          })
        }
      }
      console.log('aboutToAppear onChange', isShow)
    })
  }
}

```

3. 构造器this指向

```ts
import { DrawerPage, DrawerPageController } from "../components/DrawerPage"
import { NavBar, INavBarItem } from "../components/NavBar"

@Component
export struct Home {
  @State isShow: boolean = true
  drawPageController: DrawerPageController = new DrawerPageController()
  @State navBarItems: INavBarItem[] = [
    {
      position: "left",
      icon: $r("app.media.material_icons_menu"),
      onClick: () => {
        console.log("11111 menu")
        this.drawPageController.toggle()
      }
    },
    {
      position: "right",
      icon: $r("app.media.material_icons_add"),
      onClick: () => {
        console.log("search")
      }
    },
  ]

  @Builder
  sideBarBuilder() {
    Text("Side").fontSize(36)
    Text("Side").fontSize(36)
  }

  @Builder
  contentBuilder() {
    NavBar({
      title: "Home",
      items: this.navBarItems
    })
    Text("Home").fontSize(36)

  }

  build() {
    Column() {
      DrawerPage({
        isShow: this.isShow,
        controller: this.drawPageController,
        sideBarBuilder: () => {
          this.sideBarBuilder()
        },
        // this -> Home实例
        contentBuilder: () => {
          this.contentBuilder()
        },
        // this -> DrawerPage实例
        contentBuilder: this.contentBuilder
      })
    }
  }
}

```