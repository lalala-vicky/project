<template>
  <div>
    <!-- 新增信息弹窗 -->
    <a-button type="primary" @click="showDrawer"> 新增信息 </a-button>
    <a-drawer
      width="720"
      :visible="visible"
      :body-style="{ paddingBottom: '80px' }"
      @close="onClose"
    >
      <div slot="title">
        <div class="titleLine" />
        {{ edit ? "编辑信息" : "新增信息" }}
      </div>
      <a-form-model
        ref="ruleForm"
        :model="formData"
        :rules="rules"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        label-align="left"
      >
        <a-form-model-item ref="name" label="姓名" prop="nickname">
          <a-input v-model="formData.nickname" placeholder="请输入姓名" />
        </a-form-model-item>
        <a-form-model-item label="性别" prop="sex">
          <a-radio-group v-model="formData.sex">
            <a-radio value="女"> 女 </a-radio>
            <a-radio value="男"> 男 </a-radio>
          </a-radio-group>
        </a-form-model-item>
        <a-form-model-item ref="name" label="年龄" prop="age">
          <a-input v-model="formData.age" placeholder="请输入年龄" />
        </a-form-model-item>
        <a-form-model-item ref="name" label="班级" prop="class">
          <a-input v-model="formData.class" placeholder="请输入班级" />
        </a-form-model-item>
        <a-form-model-item ref="name" label="学号" prop="stu_number">
          <a-input v-model="formData.stu_number" placeholder="请输入学号" />
        </a-form-model-item>
        <a-form-model-item ref="name" label="身份证号" prop="idnumber">
          <a-input v-model="formData.idnumber" placeholder="请输入身份证号" />
        </a-form-model-item>
        <a-form-model-item label="学院" prop="college">
          <a-select v-model="formData.college" placeholder="请选择学院">
            <a-select-option value="电信工程学院">
              电信工程学院
            </a-select-option>
            <a-select-option value="会计学院"> 会计学院 </a-select-option>
            <a-select-option value="服装与艺术学院">
              服装与艺术学院
            </a-select-option>
            <a-select-option value="经贸学院"> 经贸学院 </a-select-option>
            <a-select-option value="医药学院"> 医药学院 </a-select-option>
            <a-select-option value="外国语学院"> 外国语学院 </a-select-option>
          </a-select>
        </a-form-model-item>
      </a-form-model>
      <div
        :style="{
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e9e9e9',
          background: '#fff',
          zIndex: 1,
        }"
      >
        <div class="drawerButton">
          <a-button :style="{ marginRight: '8px' }" @click="onClose">
            取消
          </a-button>
          <a-button type="primary" @click="onSubmit"> 确定 </a-button>
        </div>
      </div>
    </a-drawer>
    <!-- 搜索框 -->
    <div class="selection">
      <a-input-search
        placeholder="input search text"
        style="width: 200px"
        @search="searchAll"
        class="search"
      />
    </div>
    <!-- 表格 -->
    <a-table
      class="tableList"
      :columns="columns"
      :data-source="listdata || []"
      :paganation="false"
    >
      <a slot="name" slot-scope="text">{{ text }}</a>
      <template slot="status" slot-scope="text, record">
        <span @click="handleRegister(record)">
          <a-badge :color="record.text == 'successful' ? '#87d068' : '#f50'" text="" />
          {{ record.text == "successful" ? "注册成功" : "未注册" }}
        </span>
      </template>
      <template slot="handle" slot-scope="text, record">
        <a-button class="action-btn" type="link" @click="modifyInfo(record)">
          修改信息
        </a-button>
        <a-button class="delete" type="link" @click="warning(record)">
          删除信息
        </a-button>
      </template>
    </a-table>
  </div>
</template>
<script>
import { Modal } from "ant-design-vue";
export default {
  components: {},
  data() {
    return {
      form: this.$form.createForm(this),
      infomation: "",
      visible: false,
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      formData: {
        class: "",
        nickname: "",
        sex: "",
        age: "",
        stu_number: "",
        username: "", //是身份证号也是登陆账号
        college: "",
        state: "",
      },
      edit: false,
      modify: {},
      listdata: [],
      rules: {
        class: [
          {
            required: true,
            message: "请输入班级",
            trigger: "blur",
          },
          {
            pattern: /^[\u4e00-\u9fa50-9a-zA-Z_-]+$/,
            message: "只允许包含中文、字母、数字、短划线-和下划线_",
            trigger: "blur",
          },
        ],
        nickname: [
          {
            required: true,
            message: "请输入姓名",
            trigger: "blur",
          },
          {
            pattern: /^[\u4e00-\u9fa5]/,
            message: "只允许包含中文",
            trigger: "blur",
          },
        ],
        sex: [
          {
            required: true,
            message: "请选择性别",
            trigger: "change",
          },
        ],
        age: [
          {
            required: true,
            message: "请输入年龄",
            trigger: "blur",
          },
          {
            pattern: /^[0-9]*$/,
            message: "只允许输入数字",
            trigger: "blur",
          },
        ],
        stu_number: [
          {
            required: true,
            message: "请输入学号",
            trigger: "blur",
          },
          {
            pattern: /^[0-9]*$/,
            message: "只允许输入数字",
            trigger: "blur",
          },
          {
            len: 9,
            message: "Length should be 9",
            trigger: "blur",
          },
        ],
        username: [
          {
            required: true,
            message: "请输入身份证号",
            trigger: "blur",
          },
          {
            pattern: /^[0-9]*$/,
            message: "只允许输入数字",
            trigger: "blur",
          },
          {
            len: 18,
            message: "Length should be 18",
            trigger: "blur",
          },
        ],
        college: [
          {
            required: true,
            message: "请选择学院",
            trigger: "blur",
          },
        ],
      },
    };
  },
  computed: {
    columns() {
      return [
        {
          title: "状态",
          dataIndex: "status",
          key: "stu_status",
          scopedSlots: { customRender: "status" },
        },
        {
          title: "班级",
          dataIndex: "class",
          key: "stu_class",
          scopedSlots: { customRender: "class" },
        },
        {
          title: "姓名",
          dataIndex: "nickname",
          key: "stu_name",
          scopedSlots: { customRender: "nickname" },
        },
        {
          title: "性别",
          dataIndex: "sex",
          key: "stu_sex",
          scopedSlots: { customRender: "sex" },
        },
        {
          title: "年龄",
          dataIndex: "age",
          key: "stu_age",
          scopedSlots: { customRender: "age" },
        },
        {
          title: "学号",
          dataIndex: "stu_number",
          key: "stu_number",
          scopedSlots: { customRender: "stu_number" },
        },
        {
          title: "身份证号",
          dataIndex: "idnumber",
          key: "idnumber",
          scopedSlots: { customRender: "idnumber" },
        },
        {
          title: "学院",
          dataIndex: "college",
          key: "stu_college",
          scopedSlots: { customRender: "college" },
        },
        {
          title: "操作",
          dataIndex: "handle",
          key: "stu_handle",
          scopedSlots: { customRender: "handle" },
        },
      ];
    },
  },
  mounted() {
    this.handleRefresh();
  },
  methods: {
    handleRefresh(params = {}) {
      this.$axios("/stuinfo/getstuinfo", params).then((res) => {
        if (res.status === 0) {
          this.listdata = res.data;
        } else {
          this.$message.warning(res.message);
        }
      });
    },
    // 筛选学院
    changeCollege(value) {
      this.college = value;
    },
    // 筛选性别
    changeSex(value) {
      this.sex = value;
    },
    // 输入筛选条件
    searchAll(value) {
      this.infomation = value;
      this.handleRefresh({ name: value });
    },
    // 整体条件筛选
    onSearch(college = "", sex = "") {
      this.college = college;
      this.sex = sex;
      this.listdata(); // 调接口动态显示
    },
    // 删除信息
    warning(record) {
      this.record = record;
      const self = this;
      const handleOk = () => {
        self.$axios(`/stuinfo/deletastuinfo/${record.id}`, {}).then((res) => {
          if (res.status === 0) {
            self.$message.success(res.message);
            self.handleRefresh();
          } else {
            self.$message.warning(res.message);
          }
        });
      };
      Modal.confirm({
        title: "删除信息",
        content: "确定删除信息吗？",
        okText: "确认",
        cancelText: "取消",
        icon: "info-circle",
        onOk() {
          handleOk();
        },
        onCancel() {},
      });
    },
    // 弹窗
    showDrawer() {
      this.edit = false;
      this.visible = true;
    },
    handleRegister(record) {
      // record.text = record.text === "successful" ? "fail" : "successful";
      // console.log(record);
      this.listdata = this.listdata.map((i) => {
        if (i.id === record.id) {
          console.log("i.id", i.id, i.text);
          return {
            ...i,
            text: i.text === "successful" ? "fail" : "successful",
          };
        }
        return i;
      });
      console.log(this.listdata);
    },
    modifyInfo(data) {
      this.edit = true;
      this.formData = { ...data };
      this.visible = true;
    },
    onClose() {
      this.resetForm();
      this.visible = false;
    },
    onSubmit() {
      if (this.edit) {
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            this.$axios("/stuinfo/updatastuinfo", this.formData).then((res) => {
              if (res.status === 0) {
                this.$message.success("操作成功");
                this.handleRefresh();
                this.visible = false;
                this.edit = false;
                this.formData = {};
              } else {
                this.$message.warning(res.message);
              }
            });
          } else {
            return false;
          }
        });
      } else {
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            this.$axios("/stuinfo/addstuinfo", this.formData).then((res) => {
              if (res.status === 0) {
                this.$message.success("操作成功");
                this.handleRefresh();
                this.visible = false;
                this.edit = false;
                this.formData = {};
              } else {
                this.$message.warning(res.message);
              }
            });
          } else {
            return false;
          }
        });
      }
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    },
  },
};
</script>
<style scoped>
.selection {
  float: right;
}
.college {
  width: 150px;
  margin: 0 10px 10px 0;
}
.search {
  margin-left: 10px;
  width: 300px;
}
.drawerButton {
  margin: 10px 0 20px 0;
  text-align: center;
}
</style>
