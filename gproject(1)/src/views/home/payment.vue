<template>
  <div>
    <a-avatar
      :size="64"
      style="backgroundcolor: #87d068"
      icon="money-collect"
    />
    <a-descriptions
      title="缴费信息："
      v-model="fromdata"
      bordered
      style="margin-top: 10px"
    >
      <a-descriptions-item label="姓名">
        {{ userInfo.nickname }}
      </a-descriptions-item>
      <a-descriptions-item label="性别">
        {{ userInfo.sex }}
      </a-descriptions-item>
      <a-descriptions-item label="年龄">
        {{ userInfo.age }}
      </a-descriptions-item>
      <a-descriptions-item label="学院">
        {{ userInfo.college }}
      </a-descriptions-item>
      <a-descriptions-item :span="2" label="班级">
        {{ userInfo.class }}
      </a-descriptions-item>
      <a-descriptions-item label="是否贷款">
        <a-radio-group name="radioGroup" v-model="fromdata.loans">
          <a-radio :value="1"> 是 </a-radio>
          <a-radio :value="0"> 否 </a-radio>
        </a-radio-group>
      </a-descriptions-item>
      <a-descriptions-item label="学费（包含课本费,住宿费以及学费）">
        ￥13000
      </a-descriptions-item>
      <a-descriptions-item label="床褥"> ￥300 </a-descriptions-item>
      <a-descriptions-item label="是否需要床褥">
        <a-radio-group name="radioGroup" v-model="fromdata.reason">
          <a-radio :value="1"> 是 </a-radio>
          <a-radio :value="0"> 否 </a-radio>
        </a-radio-group>
      </a-descriptions-item>
      <a-descriptions-item label="总计" v-model="fromdata.payAll">
        ￥{{ total }}
      </a-descriptions-item>
    </a-descriptions>
    <template>
      <a-button type="primary" class="payfor" @click="showModal">
        确认缴费
      </a-button>
      <a-modal v-model="visible" title="缴费" on-ok="handleOk">
        <template slot="footer">
          <a-button key="back" @click="handleCancel"> 返回 </a-button>
          <a-button
            key="submit"
            type="primary"
            :loading="loading"
            @click="handleOk"
          >
            确认
          </a-button>
        </template>
        <img src="@/assets/payments/weixin.png" alt="" class="weixin" />
        <span class="line" />
        <img src="@/assets/payments/zhifubao.png" alt="" class="weixin" />
      </a-modal>
    </template>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fromdata: {},
      loading: false,
      visible: false,
      userInfo: {},
    };
  },
  computed: {
    total() {
      let { reason, loans } = this.fromdata;
      reason = reason || 0;
      loans = loans || 0;

      // 如果选择贷款和床铺总金额
      if (loans === 1 && reason === 1) {
        return 5300;
      }
      // 不选择贷款也不选择床铺就是13000
      if (loans === 0 && reason === 0) {
        return 13000;
      }
      // 不选择贷款只选择床铺总金额16000
      if (loans === 0 && reason === 1) {
        return 13300;
      }

      // 选择贷款，不选择床铺总金额 5000
      if (loans === 1 && reason === 0) {
        return 5000;
      }
    },
  },
  mounted() {
    this.handleRefresh();
    this.getData();
  },
  methods: {
    getData() {
      this.$axios("/my/getuserinfo").then((res) => {
        if (res.status === 0) {
          this.userInfo = res.data;
          this.fromdata = { ...res.data };
        } else {
          this.$message.warning(res.message);
        }
      });
    },
    handleRefresh(params = {}) {
      this.$axios("/pay/payinfo", params).then((res) => {
        if (res.status === 0) {
          this.fromdata = res.data;
        } else {
          this.$message.warning(res.message);
        }
      });
    },
    // 支付弹窗
    showModal() {
      this.visible = true;
    },
    handleOk() {
      this.loading = true;
      this.visible = false;
      this.loading = false;
      this.$axios("/pay/update", {
        total: this.total,
        schoolPay: this.fromdata.loans === 1 ? 5000 : 13000,
        dailyPay: this.fromdata.reason === 1 ? 300 : 0,
        reason: this.fromdata.reason || 0,
        loans: this.fromdata.loans || 0,
      }).then((res) => {
        if (res.status === 0) {
          this.$message.success("缴费成功");
        } else {
          this.$message.warning(res.message);
        }
      });
    },
    handleCancel() {
      this.visible = false;
    },
  },
};
</script>
<style>
.payfor {
  margin: 55px 480px;
}
.weixin {
  width: 206px;
  height: 206px;
}
.line {
  width: 100px;
  height: 200px;
  margin: 0 30px 0 30px;
  color: #000;
}
</style>
