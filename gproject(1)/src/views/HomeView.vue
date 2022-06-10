<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider
      v-model="collapsed"
      :trigger="null"
      collapsible
      :style="{
        position: 'fixed',
        overflow: 'auto',
        height: '100vh',
      }"
    >
      <div class="logo-box">
        <img v-if="collapsed" :src="getimageUrlSmall" class="logo" alt="logo" />
        <img v-else :src="getimageUrlBig" class="logo-big" alt="logo" />
        <!-- <img src="../assets/logo-big.jpg" /> -->
        <!-- <span style="color: white; font-size: 15px">新生报到管理系统</span> -->
      </div>
      <a-menu
        theme="dark"
        mode="inline"
        :default-selected-keys="['home']"
        @click="handlechange"
      >
        <a-menu-item key="home">
          <a-icon type="home" />
          <span>首页</span>
        </a-menu-item>
        <a-sub-menu key="msg">
          <span slot="title"><a-icon type="mail" /><span>院系信息</span></span>
          <a-menu-item key="engineer">电信工程学院</a-menu-item>
          <a-menu-item key="account"> 会计学院 </a-menu-item>
          <a-menu-item key="economy"> 经贸学院 </a-menu-item>
          <a-menu-item key="art"> 服装与艺术学院 </a-menu-item>
          <a-menu-item key="medicine"> 医药学院 </a-menu-item>
          <a-menu-item key="foreign"> 外国语学院 </a-menu-item>
        </a-sub-menu>
        <a-menu-item key="students" v-if="admin">
          <a-icon type="team" />
          <span>学生信息管理</span>
        </a-menu-item>
        <a-menu-item key="info" v-if="!admin">
          <a-icon type="user" />
          <span>个人信息</span>
        </a-menu-item>
        <a-menu-item key="payment" v-if="!admin">
          <a-icon type="pay-circle" />
          <span>缴费管理</span>
        </a-menu-item>
        <a-menu-item key="book">
          <a-icon type="book" />
          <span>课程查询</span>
        </a-menu-item>
        <a-menu-item key="system" v-if="admin">
          <a-icon type="setting" />
          <span>用户管理</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout :style="{ marginLeft: '200px' }">
      <a-layout-header style="background: #fff">
        <!-- <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        /> -->
        <div class="infoImg">
          <a-avatar icon="user" />
          <a-popover placement="bottom">
            <div slot="content" class="returnLogin">
              <router-link to="/index">
                <el-dropdown-item> 返回主页 </el-dropdown-item>
              </router-link>
              <router-link to="/login">
                <el-dropdown-item> 登出 </el-dropdown-item>
              </router-link>
              <router-link to="/register">
                <el-dropdown-item> 修改密码 </el-dropdown-item>
              </router-link>
            </div>
            <a-icon type="caret-down" />
          </a-popover>
        </div>
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
// import homePage from "./homePage/index.vue";
export default {
  components: {
    // homePage
  },
  data() {
    return {
      admin: false,
      collapsed: false,
    };
  },
  mounted() {
    const admin = localStorage.getItem("admin");
    this.admin = admin === "true";
  },
  methods: {
    handlechange(e) {
      switch (e.key) {
        case "home":
          this.$router.push("/index");
          break;
        case "engineer":
          this.$router.push("/engineer");
          break;
        case "account":
          this.$router.push("/msg/account");
          break;
        case "economy":
          this.$router.push("/msg/economy");
          break;
        case "art":
          this.$router.push("/msg/art");
          break;
        case "medicine":
          this.$router.push("/msg/medicine");
          break;
        case "foreign":
          this.$router.push("/msg/foreign");
          break;
        case "students":
          this.$router.push("/students");
          break;
        case "info":
          this.$router.push("/info");
          break;
        case "payment":
          this.$router.push("/payment");
          break;
        case "book":
          this.$router.push("/book");
          break;
        case "system":
          this.$router.push("/system");
          break;
        default:
          this.$router.push({ path: this.redirect || "/" });
      }
    },
    returnHome() {
      this.$router.push("/index");
    },
    loginOut() {
      this.$router.push("/login");
    },
  },
  computed: {
    getimageUrlSmall() {
      return this.imageUrlSmall || require("../assets/logo-small.png");
    },
    getimageUrlBig() {
      return this.imageUrlBig || require("../assets/logo-big.png");
    },
  },
};
</script>
<style>
/* 用来设置页面最小的高度 */
#components-layout-demo-custom-trigger {
  min-height: 100vh;
}
.infoImg {
  float: right;
  margin-right: 20px;
}
.a:hover {
  background-color: #1890ff;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo-box {
  height: 32px;
  margin: 18px 0 34px 13px;
}
* {
  padding: 0;
  margin: 0;
}
</style>
