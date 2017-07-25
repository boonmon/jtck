import Vue from 'vue';
import api from '../../api/';
import config from '../../api/config';
import _track from '../../api/track';
import * as types from '../mutation-types';
import { Toast,Indicator  } from 'mint-ui';

const AUTH_JWT_TOKEN = 'auth.jwt_token';
const AUTH_USER_ID = 'auth.id';
const AUTH_USER = 'auth.user';
const AUTH_USER_WX = 'auth.user_wx';
const AUTH_USER_CONFIGS = 'auth.user_configs';
const AUTH_DEPT = 'auth.dept';

//新增
const WX_USER_ID = 'wx.user.id';
const WX_USER_CODE = 'wx.user.code';
const WX_USER_ENCODE = 'wx.user.encode';
const WX_USER_CUSTSTORELIST = 'wx.user.custStoreList';
const WX_USER_TEPM="wx.user.temp";
const WX_USER_TOKEN="wx.user.token";
const WX_USER_SESSION='wx.user.session'
const WX_USER_PHONE='wx.user.userPhone'
const localStorage = global.localStorage;

export default {
  state: {
    auth: {

      check() {
       // return this.id !== null && this.id !== '';
      return this.userId !=null &&this.userId!='';
       //return null;
      },
      user_token: localStorage.getItem(WX_USER_TOKEN),
      id: localStorage.getItem(AUTH_USER_ID) || '',
      user: JSON.parse(localStorage.getItem(AUTH_USER)),
      user_wx: JSON.parse(localStorage.getItem(AUTH_USER_WX)),
      configs: JSON.parse(localStorage.getItem(AUTH_USER_CONFIGS)),
      dept:JSON.parse(localStorage.getItem(AUTH_DEPT)),
      userId: localStorage.getItem(WX_USER_ID) || '',
      encode: localStorage.getItem(WX_USER_ENCODE),
      custStoreList: localStorage.getItem(WX_USER_CUSTSTORELIST)||'',
    },
    login: {
      success: false,
      failure: null,
	  loginTime:0,
    },
    logout: {
      success: false,
      failure: null,
    },
  },
  mutations: {
  	ACCOUNT_AUTH_STATUS_CHANGED: (state,  data ) => {
       if (!data) {
       Vue.set(state.auth, 'jwt_token', null);
        Vue.set(state.auth, 'userId', '');
        Vue.set(state.auth, 'encode', null);
        Vue.set(state.auth, 'cusList', null);

        Vue.set(state.auth, 'configs', []);
        localStorage.removeItem(AUTH_JWT_TOKEN);
        localStorage.removeItem(AUTH_USER_ID);
        localStorage.removeItem(AUTH_USER);
        localStorage.removeItem(AUTH_USER_WX);
        localStorage.removeItem(AUTH_USER_CONFIGS);
        localStorage.removeItem(AUTH_DEPT);
        localStorage.removeItem(WX_USER_TOKEN);

        localStorage.removeItem(WX_USER_ID);
        localStorage.removeItem(WX_USER_ENCODE);
        localStorage.removeItem(WX_USER_CUSTSTORELIST);
        return;
      }

      console.log(data.cusList);
      Vue.set(state.auth, 'userId', data.userId);
      Vue.set(state.auth, 'encode', data.encode);
      Vue.set(state.auth, 'custStoreList', data.cusList==undefined?"":JSON.stringify(data.cusList));
      localStorage.setItem(WX_USER_ID, data.userId);
      localStorage.setItem(WX_USER_TOKEN,data.token);
      localStorage.setItem(WX_USER_ENCODE, data.encode);
      localStorage.setItem(WX_USER_PHONE, data.userPhone);
      localStorage.setItem(WX_USER_CODE, data.code);
      localStorage.setItem(WX_USER_CUSTSTORELIST, data.cusList==undefined?"":JSON.stringify(data.cusList));
      console.log(data.cusList);
      //做埋点
      // _track._trackPageview("/login","登录");
    },
    // user login init
    //set state.login.success value eq false
    //set state.login.failure value eq null
    ACCOUNT_LOGIN_INIT: (state) => {
      Vue.set(state.login, 'success', false);
      Vue.set(state.login, 'failure', null);
    },
    //set state.login.success value eq true
    //set state.login.failure value eq null
    ACCOUNT_LOGIN_SUBMIT_SUCCESS: (state) => {
      Vue.set(state.login, 'success', true);
	  Vue.set(state.login, 'loginTime', state.login.loginTime+1);
    },
    //set state.login.success value eq false
    //set state.login.failure value eq data
    ACCOUNT_LOGIN_SUBMIT_FAILURE: (state, data) => {
      Vue.set(state.login, 'success', false);
      Vue.set(state.login, 'failure', data);
    },
    //set state.login.success value eq false
    //set state.login.failure value eq null
    ACCOUNT_LOGOUT_INIT: (state) => {
      Vue.set(state.logout, 'success', false);
      Vue.set(state.logout, 'failure', null);
    },
    ACCOUNT_LOGOUT_SUBMIT_SUCCESS: (state) => {
      Vue.set(state.logout, 'success', true);
      Vue.set(state.logout, 'failure', null);
    },
    ACCOUNT_LOGOUT_SUBMIT_FAILURE: (state, data) => {
      Vue.set(state.logout, 'success', false);
      Vue.set(state.logout, 'failure', data);
    }
  },
  actions:{
    //user login init
    accountLoginInit({ commit }) {
      commit(types.ACCOUNT_LOGIN_INIT);
    },
    //user submit login call
    accountLoginSubmit({ commit }, params) {
      $.ajax({
        url: api.loginAsync(),
        type: "POST",
        cache: false,
        async: false,
        data: JSON.stringify(params), //传入组装的参数
        contentType: 'application/json;charset=utf-8',
        dataType: "json",  //类型
        success: function (response) {
          console.log('login')
          console.log(response)
          if(response.head.errorCode=='0'){
            commit(types.ACCOUNT_LOGIN_SUBMIT_SUCCESS);
            commit(types.ACCOUNT_AUTH_STATUS_CHANGED, response.body);
          }
          else{
            try {
              Toast(response.head.errorMsg);
            }catch(e){
              console.log("异常");
            }
            commit(types.ACCOUNT_LOGIN_SUBMIT_FAILURE, response);
          }
        },
        error:function (e) {
          console.log("异常");
          commit(types.ACCOUNT_LOGIN_SUBMIT_FAILURE, response.data);
        }
      });
    },
	 //获取验证码
    /*accountCaptcha({commit}, params) {
      api.captcha(params).then((response) => {
        console.log('captcha')
      	if(response.data.head.errorCode=='0'){
      	 Toast('短信已发至你的手机，请注意查收');
      	}
      	else{
          Toast(response.data.head.errorMsg);
      	}
      })
      .catch((response) => {

      });
    },*/
     //获取验证码
    wechatCaptcha({commit}, params) {
      api.wechatCaptcha(params).then((response) => {
        console.log('captcha')
        if(response.data.head.errorCode=='0'){
           Toast('短信已发至你的手机，请注意查收');

        }
        else{
          Toast(response.data.head.errorMsg);
        }
      })
      .catch((response) => {

      });
    },
    //user logout init call
    accountLogoutInit({ commit }) {
      console.log("come accountLogoutInit");
      commit(types.ACCOUNT_LOGOUT_INIT);
    },
    //user logout submit call
    accountLogoutSubmit({ commit }) {
      commit(types.ACCOUNT_AUTH_STATUS_CHANGED, { data: null });
      api.account_logout().then(() => {
        commit(types.ACCOUNT_LOGOUT_SUBMIT_SUCCESS);
        commit(types.NOTIFICATION_COUNTS_INIT);
      })
      .catch((response) => {
        commit(types.ACCOUNT_LOGOUT_SUBMIT_FAILURE, response.data);
      });
    },
       accountWechatLoginSubmit({ commit }, params) {
       //  debugger;
        params.wechatCode="WECHAT_CUS";
      //  params.appId=config.appId;
       // params.openId="oce-9wK5E0tIbGNTJyXCTdtFOJb8";
        params.captchaClientId=params.mobilePhone;
      $.ajax({
        url: api.wechatLogin(),
        type: "POST",
        cache: false,
        async: false,
        data: JSON.stringify(params), //传入组装的参数
        contentType: 'application/json;charset=utf-8',
        dataType: "json",  //类型
        success: function (response) {
          console.log('login')
          console.log(response)
          if(response.head.errorCode=='0'){
            commit(types.ACCOUNT_LOGIN_SUBMIT_SUCCESS);
            commit(types.ACCOUNT_AUTH_STATUS_CHANGED, response.body);
          }
          else{
            try {
              Toast(response.head.errorMsg);
            }catch(e){
              console.log("异常");
            }
            commit(types.ACCOUNT_LOGIN_SUBMIT_FAILURE, response);
          }
        },
        error:function (e) {
          console.log("异常");
          commit(types.ACCOUNT_LOGIN_SUBMIT_FAILURE, response.data);
        }
      });
    },
  }
}


