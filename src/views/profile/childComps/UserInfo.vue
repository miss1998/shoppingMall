<template>
  <div id="user-info">
    <div @click="userLogin" class="clear-fix">
      <slot name="user-icon">
        <svg class="privateImage-svg left">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#avatar-default"></use>
        </svg>
      </slot>
      <div class="login-info left">
        <slot name="user-nickname">
          <div v-if="!isTrue">登录/注册</div>
          <div v-else> 管理员</div>
        </slot>
        <div class="phone">
          <span>
            <svg data-v-735ff1be="" fill="#fff" class="icon-mobile"><use data-v-735ff1be="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#mobile"></use></svg>
          </span>
          <slot name="user-phone">
            <div v-if="!isTrue">暂无绑定手机号</div>
          <div v-else> 13872876212</div>
          </slot>
          
        </div>
      </div>
      <svg data-v-735ff1be="" fill="#fff" class="arrow-svg right"><use data-v-735ff1be="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use></svg>
    </div>
  </div>
</template>

<script>
import Cookie from 'js-cookie'
	export default {
    name: "UserInfo",
    data() {
      return {
        isTrue:false
      }
    },
    methods: {
      userLogin(){
        if(Cookie.get('token')){
          return ;
        }
        this.$router.push({path:'/login'})
      }
    },
    computed: {
     
    },
    created() {
      // console.log("1");
      this.isTrue=Boolean( Cookie.get('token'));
      // console.log(this.isTrue);
    }
	}
</script>

<style scoped>
  #user-info {
    background-color: var(--color-tint);
    padding: 15px;
    margin-top: -5px;
  }

  #user-info .privateImage-svg {
    width: 60px;
    height: 60px;
    background-color: #fff;
    border-radius: 30px;
  }

  .left {
    float: left;
  }

  #user-info .arrow-svg {
    width: 11px;
    height: 22px;
    margin-top: 18px;
  }

  #user-info .login-info {
    color: #fff;
    margin: 10px 0 0 10px;
  }

  #user-info .login-info .phone {
    position: relative;

    font-size: 13px;
    margin-top: 5px;
    margin-left: 15px;
    font-weight: 300;
  }

  #user-info .login-info .phone .icon-mobile {
    position: absolute;
    width: 12px;
    height: 18px;
    left: -15px;
    top: 0px;
  }
</style>
