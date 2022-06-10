<template>
  <div class="Loginpage">
    <div class="loginName">欢迎使用新生报到管理系统</div>
    <div class="login">
      <h1 class="userLogin">修改密码</h1>
      <div class="fromRegister">
        <a-form-model
          ref="ruleForm"
          :model="ruleForm"
          :rules="rules"
          v-bind="layout"
        >
          <!-- <a-form-model-item label="用户名">
            <a-input v-model="userName" />
          </a-form-model-item> -->
          <a-form-model-item has-feedback label="密码" prop="pass">
            <a-input
              v-model="ruleForm.pass"
              type="password"
              autocomplete="off"
            />
          </a-form-model-item>
          <a-form-model-item has-feedback label="确认密码" prop="checkPass">
            <a-input
              v-model="ruleForm.checkPass"
              type="password"
              autocomplete="off"
            />
          </a-form-model-item>
          <a-button
            type="primary"
            @click="submitForm('ruleForm')"
            style="margin: -10px 0 0 200px"
          >
            确认
          </a-button>
          <div class="forget">
            <a @click="changeLogin"
              >返回登陆页面<a-icon type="arrow-right"
            /></a>
          </div>
        </a-form-model>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    let validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两者输入不匹配"));
      } else {
        callback();
      }
    };
    return {
      userName: "",
      ruleForm: {
        pass: "",
        checkPass: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "change" }],
        checkPass: [{ validator: validatePass2, trigger: "change" }],
      },
      layout: {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 },
      },
    };
  },
  methods: {
    emitEmpty() {
      this.$refs.userNameInput.focus();
      this.userName = "";
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios("/my/updatepwd", this.ruleForm).then((res) => {
            if (res.status === 0) {
              this.$message.success("操作成功");
              this.$router.push("login");
            } else {
              this.$message.warning(res.message);
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    changeLogin() {
      this.$router.push("login");
    },
  },
};
</script>
<style scoped>
/* backgroud */
.Loginpage {
  background-image: url("@/assets/111.png");
  min-height: 100vh;
  background-repeat: round;
}
/* 中间登录块 */
.login {
  background-color: #fff;
  width: 500px;
  height: 300px;
  position: fixed;
  top: 25%;
  left: 30%;
  border-radius: 10px;
  box-shadow: 1px 0 15px 0 rgb(122, 106, 106);
}
/* 顶部系统 */
.loginName {
  display: inline-block;
  font-size: 30px;
  font-style: italic;
  position: fixed;
  top: 13%;
  left: 35%;
}
/* 用户注册 */
.userLogin {
  display: inline-block;
  font-size: 20px;
  font-style: italic;
  position: relative;
  top: 5%;
  left: 42%;
}
/* 注册表单 */
.fromRegister {
  height: 188px;
  margin: 20px;
}
/* 返回登陆页面 */
.forget {
  display: inline-block;
  margin: 0 0 20px 90px;
  cursor: pointer;
}
</style>
