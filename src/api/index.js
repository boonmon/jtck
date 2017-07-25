import axios from 'axios'
import config from './config'
const WX_USER_TOKEN = 'wx.user.token'
const devName = '-lzw'
// 微信url
const wxUrl = config.wxUrl
const wxAppId = config.wxAppId
const appId = config.appId

var guidGenerator = function () {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
}
var getUUID = function () {
  return (guidGenerator() + guidGenerator() + guidGenerator() + guidGenerator() + guidGenerator() + guidGenerator() + guidGenerator() + guidGenerator())
}

export default {
  // 获取url参数封装方法
  getQueryString (name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
    var r = window.location.search.substr(1).match(reg)
    if (r != null) return unescape(r[2]); return null
  },
  captcha (param) {
    var method = '/wechat' + devName + '/front/loginService/getValidateCode?requestId=' + getUUID() + '&token=' + global.localStorage.getItem(WX_USER_TOKEN) + '&appId=' + appId
    return axios.post(method, JSON.stringify(param), config)
  },
  wechatCaptcha (param) {
    var method = '/wechatAuth' + devName + '/auth/wechatCommonService/getWxCaptcha?requestId=' + getUUID() + '&token=' + global.localStorage.getItem(WX_USER_TOKEN) + '&appId=' + appId
    return axios.post(method, JSON.stringify(param), config)
  },
  login (param) {
    var method = '/wechat' + devName + '/front/loginService/login?requestId=' + getUUID() + '&appId=' + appId
    return axios.post(method, JSON.stringify(param), config)
  },
  wechatLogin () {
    var url = config.baseURL + '/wechatAuth' + devName + '/auth/wechatCommonService/wechatLogin?requestId=' + getUUID() + '&appId=' + appId
    return url
  },
  loginAsync () {
    var url = config.baseURL + '/wechat' + devName + '/front/loginService/login?requestId=' + getUUID() + '&appId=' + appId
    return url
  },
  queryUserInfoByUserId (param) {
    var method = '/wechat' + devName + '/front/chatWebService/getUserInfoByUserId?requestId=' + getUUID() + '&token=' + global.localStorage.getItem(WX_USER_TOKEN) + '&appId=' + appId
    return axios.post(method, JSON.stringify(param), config)
  },
  // 待办查询
  querywaitHandleLists (param) {
    var method = '/wechat' + devName + '/front/waitHandleService/waitHandleLists?requestId=' + getUUID() + '&appId=' + appId + '&token=' + global.localStorage.getItem(WX_USER_TOKEN)
    return axios.post(method, JSON.stringify(param), config)
  },
  // 确认待办
  sureHandle (param) {
    var method = '/wechat' + devName + '/front/waitHandleService/sureHandle?requestId=' + getUUID() + '&appId=' + appId + '&token=' + global.localStorage.getItem(WX_USER_TOKEN)
    return axios.post(method, JSON.stringify(param), config)
  },
  // 查询取单
  queryIndentLists (param) {
    var method = '/wechat' + devName + '/front/InvokerService/takeSingle?requestId=' + getUUID() + '&appId=' + appId + '&token=' + global.localStorage.getItem(WX_USER_TOKEN)
    return axios.post(method, JSON.stringify(param), config)
  },
  // 查询取单
  queryIndentListsBywqd (param) {
    var method = '/wechat' + devName + '/front/InvokerService/takeSingleByGdIdNew?requestId=' + getUUID() + '&appId=' + appId + '&token=' + global.localStorage.getItem(WX_USER_TOKEN)
    return axios.post(method, JSON.stringify(param), config)
  },
  // 查询记账
  queryTallyLists (param) {
    var method = '/wechat' + devName + '/front/InvokerService/getAccounting?requestId=' + getUUID() + '&appId=' + appId + '&token=' + global.localStorage.getItem(WX_USER_TOKEN)
    return axios.post(method, JSON.stringify(param), config)
  },
  // 查询记账
  queryTallyListsByBeiJing (param) {
    var method = '/wechat' + devName + '/front/InvokerService/getAccountingByBeiJing?requestId=' + getUUID() + '&appId=' + appId + '&token=' + global.localStorage.getItem(WX_USER_TOKEN)
    return axios.post(method, JSON.stringify(param), config)
  },
  // 查询记账
  queryTallyListsByYZF (param) {
    var method = '/wechat' + devName + '/front/InvokerService/getAccountingByYZF?requestId=' + getUUID() + '&appId=' + appId + '&token=' + global.localStorage.getItem(WX_USER_TOKEN)
    return axios.post(method, JSON.stringify(param), config)
  },
  // 查询报税
  queryDutiableLists (param) {
    var method = '/wechat' + devName + '/front/InvokerService/getTaxReturn?requestId=' + getUUID() + '&appId=' + appId + '&token=' + global.localStorage.getItem(WX_USER_TOKEN)
    return axios.post(method, JSON.stringify(param), config)
  },
  // 查询报税
  queryDutiableListsByYZF (param) {
    var method = '/wechat' + devName + '/front/InvokerService/getTaxReturn?requestId=' + getUUID() + '&appId=' + appId + '&token=' + global.localStorage.getItem(WX_USER_TOKEN)
    return axios.post(method, JSON.stringify(param), config)
  },
  // 查询企业服务信息
  queryCusServiceLists (param) {
    console.info(JSON.stringify(config))
    var method = '/wechat' + devName + '/front/CusService/cusServiceLists?requestId=' + getUUID() + '&appId=' + appId + '&token=' + global.localStorage.getItem(WX_USER_TOKEN)
    return axios.post(method, JSON.stringify(param), config)
  },
  queryFactoryInfo (param) {
    var method = '/wechat' + devName + '/front/chatWebService/queryFactoryInfo?requestId=' + getUUID() + '&token=' + global.localStorage.getItem(WX_USER_TOKEN) + '&appId=' + appId
    return axios.post(method, JSON.stringify(param), config)
  },
  // 根据企业id查询企业信息
  querycustomerBycusId (param) {
    var method = '/wechat' + devName + '/front/chatWebService/queryCustomerBycusId?requestId=' + getUUID() + '&token=' + global.localStorage.getItem(WX_USER_TOKEN) + '&appId=' + appId
    return axios.post(method, JSON.stringify(param), config)
  },
  accessImcc (param) {
    var method = '/wechat' + devName + '/front/onlineService/onlienInterface?requestId=' + getUUID() + '&token=' + global.localStorage.getItem(WX_USER_TOKEN) + '&appId=' + appId
    return axios.post(method, JSON.stringify(param), config)
  },
  startManService () {
    var url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + wxAppId + '&redirect_uri=http%3A%2F%2F' + wxUrl + '%2Fthirdparty%2Focsp%2FstartManService&response_type=code&scope=snsapi_base&state=123#wechat_redirect'
    return url
  },
  // 根据手机号码查询企业列表
  queryCustomerListByMobile (param) {
    var method = '/wechat' + devName + '/front/CusService/queryCustomerListByMobile?requestId=' + getUUID() + '&token=' + global.localStorage.getItem(WX_USER_TOKEN) + '&appId=' + appId
    return axios.post(method, JSON.stringify(param), config)
  },
  // 根据纳税人或企业号查询
  queryCustomerByNo (param) {
    var method = '/wechat' + devName + '/front/CusService/queryCustomerByNo?requestId=' + getUUID() + '&token=' + global.localStorage.getItem(WX_USER_TOKEN) + '&appId=' + appId
    return axios.post(method, JSON.stringify(param), config)
  },
  // 绑定联系人和客户（目前只能单个绑定）
  bindWeChatCustomer (param) {
    var method = '/wechat' + devName + '/front/CusService/bindWeChatCustomer?requestId=' + getUUID() + '&token=' + global.localStorage.getItem(WX_USER_TOKEN) + '&appId=' + appId
    return axios.post(method, JSON.stringify(param), config)
  },
  // 绑定联系人和客户（目前只能单个绑定）--同步
  bindWeChatCustomerAsync () {
    var url = config.baseURL + '/wechat' + devName + '/front/CusService/bindWeChatCustomer?requestId=' + getUUID() + '&token=' + global.localStorage.getItem(WX_USER_TOKEN) + '&appId=' + appId
    return url
  },
  // 查询报名列表
  pageTrainDataAddress (param) {
    var method = '/wechat' + devName + '/front/trainService/pageTrainDataAddress?requestId=' + getUUID() + '&token=' + global.localStorage.getItem(WX_USER_TOKEN) + '&appId=' + appId
    return axios.post(method, JSON.stringify(param), config)
  },
  // 预约报名
  enrollTrain (param) {
    var method = '/wechat' + devName + '/front/trainService/enrollTrain?requestId=' + getUUID() + '&token=' + global.localStorage.getItem(WX_USER_TOKEN) + '&appId=' + appId
    return axios.post(method, JSON.stringify(param), config)
  },
  autoLogin (param) {
    param.wechatCode = 'WECHAT_CUS'
    var method = '/wechatAuth' + devName + '/auth/wechatCommonService/autoLogin?requestId=' + getUUID() + '&token=' + global.localStorage.getItem(WX_USER_TOKEN) + '&appId=' + appId
    return axios.post(method, JSON.stringify(param), config)
  },
  // 绑定企业之后发送消息到微信客户端
  bindAfterSendMsg (param) {
    var method = '/wechat' + devName + '/front/CusService/bindAfterSendMsg?requestId=' + getUUID() + '&token=' + global.localStorage.getItem(WX_USER_TOKEN) + '&appId=' + appId
    return axios.post(method, JSON.stringify(param), config)
  },
  // 退出登录
  logout () {
    var param = {}
    param.token = global.localStorage.getItem(WX_USER_TOKEN)
    console.log(param)
    var method = '/wechat' + devName + '/front/chatWebService/unBingingWechat?requestId=' + getUUID() + '&token=' + global.localStorage.getItem(WX_USER_TOKEN) + '&appId=' + appId
    return axios.post(method, JSON.stringify(param), config)
  },
  // 人工客服
  startArtificiallyService (param) {
    var method = '/wechat' + devName + '/thirdparty/ocsp/startArtificiallyService?requestId=' + getUUID() + '&token=' + global.localStorage.getItem(WX_USER_TOKEN) + '&appId=' + appId
    return axios.post(method, JSON.stringify(param), config)
  },
  // ca查询
  queryCaFile (param) {
    var method ='/wechat' + devName + '/thirdparty/ocsp/wechatCaFileService/queryCaFile?requestId=' + getUUID() + '&token=' + global.localStorage.getItem(WX_USER_TOKEN) + '&appId=' + appId
    // var method = '/thirdparty/ocsp/wechatCaFileService/queryCaFile?requestId=' + getUUID() + '&token=' + global.localStorage.getItem(WX_USER_TOKEN) + '&appId=' + appId
    return axios.post(method, JSON.stringify(param), config)
  },
  // ca删除
  deleteCaFile (param) {
    var method ='/wechat' + devName + '/thirdparty/ocsp/wechatCaFileService/deleteCaFile?requestId=' + getUUID() + '&token=' + global.localStorage.getItem(WX_USER_TOKEN) + '&appId=' + appId
    // var method ='/thirdparty/ocsp/wechatCaFileService/deleteCaFile?requestId=' + getUUID() + '&token=' + global.localStorage.getItem(WX_USER_TOKEN) + '&appId=' + appId
    return axios.post(method, JSON.stringify(param), config)
  },
  // 人员签到
  signIn (param) {
    var method = '/wechat' + devName + '/thirdparty/ocsp/wechatUserSignService/userSign?requestId=' + getUUID() + '&token=' + global.localStorage.getItem(WX_USER_TOKEN) + '&appId=' + appId
    return axios.post(method, JSON.stringify(param), config)
  },
  // 人员上次签到信息
  querySignInfo (param) {
    var method = '/wechat' + devName + '/thirdparty/ocsp/wechatUserSignService/querySignInfo?requestId=' + getUUID() + '&token=' + global.localStorage.getItem(WX_USER_TOKEN) + '&appId=' + appId
    return axios.post(method, JSON.stringify(param), config)
  },
}
