# Api介绍

## computed函数

computed函数存在两个接口实现。

1. computed函数接收一个getter函数，返回一个**只读**的ref对象。
2. computed函数接收一个getter函数和一个setter函数，返回一个**可写**的ref对象。

<<< @/frameworks/vue/core/reactivity/src/computed.ts#computed

computed 代理对象实现

<<< @/frameworks/vue/core/reactivity/src/computed.ts#ComputedRefImpl
