import request from '@/utils/request';

//获取一级分类的接口
//GET /admin/product/getCategory1 
export const reqCategory1List=()=>request({url:`/admin/product/getCategory1`,method:'get'});
//获取二级分类的接口
//GET /admin/product/getCategory2/{category1Id}
//得拿着一级分类的id去获取二级分类列表
export const reqCategory2List=(category1Id)=>request({url:`/admin/product/getCategory2/${category1Id}`,method:'get'});
//获取三级分类的接口
//GET /admin/product/getCategory3/{category2Id}
export const reqCategory3List=(category2Id)=>request({url:`/admin/product/getCategory3/${category2Id}`,method:'get'});

//获取平台属性接口
///admin/product/attrInfoList/{category1Id}/{category2Id}/{category3Id}
export const reqAttrList=(category1Id,category2Id,category3Id)=>request({url:`/admin/product/attrInfoList/${category1Id}/${category2Id}/${category3Id}`,method:'get'});

//获取属性和属性值的接口
//将收集到的属性和属性值传给服务器（保存接口）
//POST /admin/product/saveAttrInfo
export const reqAddOrUpdateAttr=(data)=>request({url:`/admin/product/saveAttrInfo`,data,method:'post'});