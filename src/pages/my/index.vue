<template>
  <div>
    <!--登录头-->
    <div class="login_head" v-show="nologin">
      <div class="head_left">
        <div class="head_leftBody">
          <i class="iconfont icon-weibiaoti101 big_icon" style="font-size: 2em;color: #969696"></i>
        </div>
      </div>
      <!--登录按钮-->
      <div class="head_right">
        <div class="head_rightBody" v-on:click="gotologin()">
          {{loginText}}
        </div>
      </div>

    </div>

    <!--登录人相关信息-->
    <div class="login_head" style="background-color: #FC8968" v-show="login">
      <div class="head_left">
        <div class="head_leftBody">
          <img src="../../assets/images/my/raw_1494553108.png" width="35px" height="35px"/>
        </div>
      </div>
      <!--登录按钮-->
      <div class="head_right">
        <div style="color: #ffffff;">
          <div>{{userName}}</div>
          <div>{{userPhone}}</div>
        </div>
      </div>

    </div>

    <!--订单-->
    <div class="order">
      <div class="order-body">
        <div class="order-left"></div>
        <div class="order-leftText">{{myOrder}}</div>
        <div class="order-right">
          {{showAllOrder}} <span><i class="fa fa-angle-right"></i> </span></div>
      </div>
      <!--订单图标按钮组-->
      <div class="order-buttonGroup">
        <div class="buttonGroup" style="position: relative">
          <i class="iconfont icon-wait-pay" style="font-size: 2em;color: #969696"></i>
          <div class="fontSzie12">{{waitPay}}</div>
          <div class="waitpay-new" v-if="waitPayNew>0">
            {{waitPayNew}}
          </div>
        </div>
        <div class="buttonGroup">
          <i class="iconfont icon-yunshuzhong01" style="font-size: 2em;color: #969696"></i>
          <div class="fontSzie12">{{payed}}</div>
        </div>

        <div class="buttonGroup">
          <i class="iconfont icon-dingdanyiquxiao" style="font-size: 2em;color: #969696"></i>
          <div class="fontSzie12">{{canel}}</div>
        </div>
        <div class="buttonGroup">
          <i class="iconfont icon-lipinqia" style="font-size: 2em;color: #969696"></i>
          <div class="fontSzie12">{{complete}}</div>
        </div>
      </div>
    </div>

    <!--按钮组-->
    <div class="buttonGroup-head" style="position: relative">
      <div class="nopay-new" v-if="noPayNew>0">
        {{noPayNew}}
      </div>
      <i class="iconfont icon-daiban" style="font-size: 1.5em;color: #969696;float: left;margin-top: 6px;"
         v-show="nologin"></i>
      <i class="iconfont icon-daiban" style="font-size: 1.5em;color: #FC8968;float: left;margin-top: 6px;"
         v-show="login"></i>
      <div class="buttonGroup-left">{{waitWork}}</div>
      <div class="buttonGroup-right"><i class="fa fa-angle-right" style="font-size: 20px;"></i>
      </div>
    </div>

    <div class="buttonGroup-middle">
      <div class="middle-head">
        <i class="iconfont icon-jinduchaxun" style="font-size: 1.5em;color: #969696;float: left;margin-top: 6px;"
           v-show="nologin"></i>
        <i class="iconfont icon-jinduchaxun" style="font-size: 1.5em;color: #E51C23;float: left;margin-top: 6px;"
           v-show="login"></i>
        <div class="buttonGroup-left">{{myWorking}}</div>
        <div class="buttonGroup-right"><i class="fa fa-angle-right"
                                          style="font-size: 20px;"></i></div>
      </div>
      <div class="middle-head">
        <i class="iconfont icon-baobiao" style="font-size: 1.5em;color: #969696;float: left;margin-top: 6px;"
           v-show="nologin"></i>
        <i class="iconfont icon-baobiao" style="font-size: 1.5em;color: #FF7045;float: left;margin-top: 6px;"
           v-show="login"></i>
        <div class="buttonGroup-left">{{reportCompany}}</div>
        <div class="buttonGroup-right"><i class="fa fa-angle-right"
                                          style="font-size: 20px;"></i></div>
      </div>
      <div class="middle-head">
        <i class="iconfont icon-ziliao" style="font-size: 1.5em;color: #969696;float: left;margin-top: 6px;"
           v-show="nologin"></i>
        <i class="iconfont icon-ziliao" style="font-size: 1.5em;color: #5677FC;float: left;margin-top: 6px;"
           v-show="login"></i>
        <div class="buttonGroup-left">{{infoCompany}}</div>
        <div class="buttonGroup-right"><i class="fa fa-angle-right"
                                          style="font-size: 20px;"></i></div>
      </div>

    </div>

    <div style="margin: 1em 0;height: 3em;background-color: #ffffff;padding-left: 1em;">
      <i class="iconfont icon-shezhi" style="font-size: 1.5em;color: #FF7045;float: left;margin-top: 6px;"></i>
      <div class="buttonGroup-left">{{setting}}</div>
      <div class="buttonGroup-right"><i class="fa fa-angle-right"
                                        style="font-size: 20px;"></i></div>
    </div>
  </div>
</template>
<style>
  .login_head {
    margin: 6px 0px;
    height: 5em;
    background-color: #B8B8B8
  }

  .head_left {
    width: 20%;
    height: 5em;
    float: left;
    align-items: center;
    display: -webkit-flex;
    justify-content: center;
  }

  .head_leftBody {
    width: 3em;
    height: 3em;
    border-radius: 3em;
    background-color: #F5F5F5;
    align-items: center;
    display: -webkit-flex;
    justify-content: center;
  }

  .head_right {
    width: 80%;
    height: 5em;
    float: left;
    align-items: center;
    display: -webkit-flex;
  }

  .head_rightBody {
    margin-left: 1em;
    width: 5em;
    height: 2em;
    border-radius: 4px;
    line-height: 2em;
    border: 1px solid #FF7045;
    color: #FF7045;
    text-align: center;
  }

  .order {
    background-color: #ffffff;
    height: 9em;
    width: 100%;
  }

  .order-body {
    height: 3em;
    border-bottom: 1px solid #E3E3E3;
  }

  .order-left {
    width: .5em;
    height: 3em;
    background-color: #FF7045;
    border-radius: 2px;
    float: left;
  }

  .order-leftText {
    margin-left: 1em;
    display: inline;
    float: left;
    height: 3em;
    line-height: 3em;
  }

  .order-right {
    font-size: 12px;
    float: right;
    height: 45px;
    line-height: 45px;
    margin-right: 1em;
    display: inline;
  }

  .order-buttonGroup {
    height: 6em;
    display: -webkit-flex;
    align-items: center;
  }

  .buttonGroup {
    margin: 0 1.3em;
  }

  .fontSzie12 {
    font-size: 12px;
  }

  .buttonGroup-head {
    margin: .5em 0;
    height: 3em;
    background-color: #ffffff;
    padding-left: 1em;
    border-bottom: 1px solid #E3E3E3;
  }

  .buttonGroup-left {
    margin-left: 1em;
    float: left;
    line-height: 3em;
    height: 3em;
  }

  .buttonGroup-right {
    float: right;
    margin-right: 1em;
    line-height: 3em;
    height: 3em
  }

  .buttonGroup-middle {
    height: 9em;
    background-color: #ffffff;
  }

  .middle-head {
    height: 3em;
    border-bottom: 1px solid #E3E3E3;
    padding-left: 1em;
  }

  .nopay-new {
    position: absolute;
    top: 10px;
    left: 115px;
    border-radius: 1.2em;
    width: 1.2em;
    height: 1.2em;
    align-items: center;
    display: -webkit-flex;
    justify-content: center;
    border: 1px solid red;
    color: red;
    font-size: 12px;
  }

  .waitpay-new {
    position: absolute;
    top: 1px;
    left: 28px;
    border-radius: 1.2em;
    width: 1.2em;
    height: 1.2em;
    align-items: center;
    display: -webkit-flex;
    justify-content: center;
    border: 1px solid red;
    color: red;
    font-size: 12px;
  }
</style>
<script>
  export default{
    data(){
      return {
        loginText: '登录',
        myOrder: '我的订单',
        showAllOrder: '查看所有订单',
        waitPay: '待付款',
        payed: '已付款',
        canel: '已取消',
        complete: '已完成',
        waitWork: '待办事项',
        myWorking: '我的进展',
        reportCompany: '企业报表',
        infoCompany: '企业资料',
        setting: '设置',
        login: false,
        nologin: true,
        noPayNew:4,
        waitPayNew:2,
        userName:'陈晓燕',
        userPhone:'15633298779'
      }
    },
    methods:{

      gotologin() {

          console.info("gotologin");

      }
    }

  }
</script>
