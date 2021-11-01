## jQuery+hash设计单页面应用

## 新增页面：
#### 1.在router.js中的routes中加入该page对象,如
```
{
    hash: "detail",
    name: "detail",
    title: "详情"
}
```
#### 2.创建与上述对象中hash同名的html、js、css文件,并放到相应正确的文件夹中
具体写法参考detail相关html、js、css文件



## 使用组件：
```
//插入组件
<div class="Sider">
    <script  src="components/Sider/Sider.js"></script>
</div>
```
***注意：容器的要加上以组件名称命名的class***


## AJAX请求：
```$.ajax(ajaxSetting(options))```

需要传入的options参数：
```
options: {
   url: string,
   type: string, //'GET'|'POST'|'PUT'|'DELETE'        (default: 'GET')，
   data: object // 无论是哪种请求方式，都是以data进行传参,
   success: function //请求成功后的回调函数
}
```
 请求错误已进行捕获处理,无需传入错误回调
