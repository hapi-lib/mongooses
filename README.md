# @hapi-lib/mongooses

一款用于 hapi 中多 mongoose 连接的 hapi 插件

## 安装

```
npm i @hapi-lib/mongooses -S
```

## 参数配置

```
server.register(
  require('@haip-lib/mongooses'),
  {
    default: `mongodb://username:${encodeURIComponent('password')}@hostname:port/defaultDb`,
    other: `mongodb://username:${encodeURIComponent('password')}@hostname:port/otherDb`,
  }
)
```

## 依赖使用

```
server.dependency('@haip-lib/mongooses', () => {
  const { mongoose, connections, ObjectId, connection, Schema } = server.plugins['@hapi-lib/mongooses']
  // const defaultConnection = connections['default']
  const defaultConnection = connection
  const otherConnection = connections['other']
})
```

## 其他说明

- ObjectId === mongoose.Types.ObjectId
