<template>
  <div>
    <a-avatar :size="64" style="backgroundcolor: #87d068" icon="user" />
    <a-descriptions title="个人信息" class="info" v-model="formData">
      <a-descriptions-item> 姓名：{{ formData.nickname }}</a-descriptions-item>
      <a-descriptions-item> 年龄：{{ formData.age }} </a-descriptions-item
      ><br />
      <a-descriptions-item> 性别：{{ formData.sex }} </a-descriptions-item>
      <a-descriptions-item>
        民族：
        {{ formData.nation }}
      </a-descriptions-item>
      <br />
      <a-descriptions-item>
        班级：
        {{ formData.class }}
      </a-descriptions-item>
      <a-descriptions-item>
        学号：
        {{ formData.stu_number }}
      </a-descriptions-item>
      <a-descriptions-item
        >专业：
        {{ formData.major }}
      </a-descriptions-item>
      <a-descriptions-item
        >学院：
        {{ formData.college }}
      </a-descriptions-item>
      <a-descriptions-item
        >学制： {{ formData.school_len }}
      </a-descriptions-item>
      <a-descriptions-item
        >入学年份：
        {{ formData.star_year }}
      </a-descriptions-item>
    </a-descriptions>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formData: {
        nickname: "",
        age: "",
        sex: "",
        nation: "",
        class: "",
        stu_number: "",
        major: "",
        college: "",
        edu: "",
        data: "",
        school_len: "",
        star_year: "",
      },
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.$axios("/my/getuserinfo").then((res) => {
        if (res.status === 0) {
          this.formData = res.data;
        } else {
          this.$message.warning(res.message);
        }
      });
    },
  },
};
</script>
<style scoped>
.info {
  margin-top: 10px;
}
</style>
