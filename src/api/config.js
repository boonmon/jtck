import Qs from 'qs'
//  baseURL 请求后台网关地址  wxUrl 微信url   trackUrl 埋点js地址
export default{
  url: '/route',
  baseURL: process.env.NODE_ENV === 'test' ? 'http://omni.esv.com.cn/gateway'
      : (process.env.NODE_ENV === 'production' ? 'http://wx.jchl.com/gateway'
      : (process.env.NODE_ENV === 'dev' ? 'http://app.esv.com.cn/gateway'
      : (process.env.NODE_ENV === 'preproduction' ? 'http://prwx.jchl.com/gateway' : 'http://localhost:8011'))),
      // :(process.env.NODE_ENV === 'preproduction'?'http://pxwx.jchl.com/gateway':'http://localhost:8011')),

  wxUrl: process.env.NODE_ENV === 'test' ? 'omni.esv.com.cn'
      : (process.env.NODE_ENV === 'production' ? 'wx.jchl.com'
      : (process.env.NODE_ENV === 'dev' ? 'app.esv.com.cn'
      : (process.env.NODE_ENV === 'preproduction' ? 'prwx.jchl.com' : 'omni.esv.com.cn'))),
      // :(process.env.NODE_ENV === 'preproduction'?'pxwx.jchl.com':'omni.esv.com.cn')),
  wxAppId: process.env.NODE_ENV === 'test' ? 'wxf4165bbc217ec388'
      : (process.env.NODE_ENV === 'production' ? 'wx35102306dfc2506e'
      : (process.env.NODE_ENV === 'dev' ? 'wx6f6e12681df4bd95'
      : (process.env.NODE_ENV === 'preproduction' ? 'wxb9f690e3746e23b2' : 'wxf4165bbc217ec388'))),
      // :(process.env.NODE_ENV === 'preproduction'?'wxcb49043c3aee1b8c':'wxf4165bbc217ec388')),
  trackUrl: process.env.NODE_ENV === 'test' ? 'http://10.10.0.203:18080/maidian.js'
    : (process.env.NODE_ENV === 'production' ? 'http://xwfx.jchl.com/maidian.js'
    : (process.env.NODE_ENV === 'dev' ? 'http://10.10.0.203:18080/maidian.js'
    : (process.env.NODE_ENV === 'preproduction' ? 'http://xwfx.jchl.com/maidian.js' : 'http://10.10.0.203:18080/maidian.js'))),
  appId: '000101',
  method: 'POST',
/* transformRequest: [function (data) {
// 为了避免qs格式化时对内层对象的格式化先把内层的对象转为
   data = JSON.stringify(data);
// 由于使用的form-data传数据所以要格式化
   data = Qs.stringify(data);
   return data;
   }],
*/
//  ...mapActions([USER_SIGNIN]),
  transformResponse: [function (data) {
    return data
  }],
  headers: {'Content-Type': 'application/json; charset=utf-8'},
  params: {
  },
  paramsSerializer: function (params) {
    return Qs.stringify(params)
  },
  data: {
  },
  timeout: 20000,
  withCredentials: false, // default
  responseType: 'json', // default
  onUploadProgress: function (progressEvent) {
    // Do whatever you want with the native progress event
  },
  onDownloadProgress: function (progressEvent) {
   // Do whatever you want with the native progress event
  },
  maxContentLength: 2000,
  validateStatus: function (status) {
    return status >= 200 && status < 300// default
  },
  maxRedirects: 5// default
}
