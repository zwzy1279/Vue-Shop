1.Sku管理业务的开发
（1）完成组件的静态搭建（包括分页器，操作）
（2）写接口，获取数据到data中（包括records,total)
（3）动态展示主要页面的数据
（4）完成操作业务
>1.完成上架业务
>>1.为点击上架的按钮绑定事件
>>2.绑定的事件方法中去调用上架的接口函数
>>3.服务器返回成功，$message弹出提示上架成功的信息
>>4.将上架的状态改成下架
>2.完成下架业务
>>1.为点击下架的按钮绑定事件
>>2.绑定的事件方法中去调用下架的接口函数
>>3.服务器返回成功，$message弹出提示下架成功的信息
>>4.将下架的状态改成上架
>3.完成编辑业务
>4.完成查看sku详细信息业务（弹出抽屉el-drawer）
>>1.写好抽屉弹出的静态，默认将状态设置为隐藏
>>2.写获取sku详细信息的api
>>3.将服务器返回的数据保存到data的skuDetailList中
>>4.为点击查看sku详细信息的按钮绑定事件
>>5.在绑定的事件方法中将抽屉框状态设置为显示，让组件弹出抽屉
>>6.在抽屉框动态展示数据（有用到el-carousel）
深度选择器
>>>一般用于原生css
/deep/一般用于less
::v-deep 一般用于scss
