# 代码片段

## webstorm

### listDto

```txt
author "KuLaiYin"
date date("YYYY-MM-dd")

  /**
  * @author $author$
  * @date $date$
  * @description $description$ 请求方法
  */
  @Post("query$NAME$List")
  async query$NAME$List(@Body() params: query$NAME$ListReqVo) {

    const result = await this.$serviceName$Service.query$NAME$List(params)
    if (!result.success) {
      return ResponseResult.error(500, result.message)
    }
    return ResponseResult.success()
  }

/**
 * @author $author$
 * @date $date$
 * @description $description$ 请求对象
 */
class query$NAME$ListReqVo {

}

/**
 * @author $author$
 * @date $date$
 * @description $description$ 响应对象
 */
class query$NAME$ListRespVo {

}

/**
 * @author $author$
 * @date $date$
 * @description $description$ Dto
 */
class query$NAME$ListDto {

}
```
