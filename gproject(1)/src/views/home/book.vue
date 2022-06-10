<template>
  <div>
    <a-button type="primary" @click="showDrawer" v-if="admin">
      新增信息
    </a-button>
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
        <a-form-model-item ref="name" label="课程" prop="course">
          <a-input v-model="formData.course" placeholder="请输入课程名" />
        </a-form-model-item>
        <a-form-model-item ref="name" label="任课教师" prop="teacher">
          <a-input v-model="formData.teacher" placeholder="请输入任课教师" />
        </a-form-model-item>
        <a-form-model-item ref="name" label="电话" prop="telphone">
          <a-input
            v-model="formData.telphone"
            placeholder="请输入任课教师的电话"
          />
        </a-form-model-item>
        <a-form-model-item ref="name" label="邮箱" prop="email">
          <a-input
            v-model="formData.email"
            placeholder="请输入任课教师的邮箱"
          />
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
    <div class="selection">
      <a-input-search
        placeholder="input search text"
        style="width: 200px"
        @search="searchAll"
        class="search"
      />
    </div>
    <a-table
      :columns="columns"
      :data-source="booklist || []"
      :paganation="false"
    >
      <a slot="name" slot-scope="text">{{ text }}</a>
      <template slot="handle" slot-scope="text, record">
        <a-button
          class="action-btn"
          type="link"
          @click="modifyInfo(record)"
          v-if="admin"
        >
          修改信息
        </a-button>
        <a-button
          class="delete"
          type="link"
          @click="warning(record)"
          v-if="admin"
        >
          删除信息
        </a-button>
      </template>
    </a-table>
  </div>
</template>
<script>
import { Modal } from "ant-design-vue";
export default {
  data() {
    return {
      formData: {
        college: "",
        book: "",
        name: "",
        telephone: "",
        mail: "",
      },
      admin: false,
      visible: false,
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      rules: {
        book: [
          {
            required: true,
            message: "请输入课程",
            trigger: "blur",
          },
          {
            pattern: /^[\u4e00-\u9fa50-9a-zA-Z_-]+$/,
            message: "只允许包含中文、字母、数字、短划线-和下划线_",
            trigger: "blur",
          },
        ],
        name: [
          {
            required: true,
            message: "请输入姓名",
            trigger: "blur",
          },
        ],
        telephone: [
          {
            required: true,
            message: "请输入任课教师的电话",
            trigger: "blur",
          },
          {
            pattern: /^[0-9]*$/,
            message: "只允许输入数字",
            trigger: "blur",
          },
        ],
        mail: [
          {
            required: true,
            message: "请输入任课教师的邮箱",
            trigger: "blur",
          },
          {
            pattern: /^[\u4e00-\u9fa50-9a-zA-Z_-]+$/,
            message: "只允许包含中文、字母、数字、短划线-和下划线_",
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
      edit: false,
      booklist: [
        // {
        //   key: "1",
        //   name: "Jim Green",
        //   college: "电信工程学院",
        //   book: "《Java语言》",
        //   telephone: 18293023847,
        //   mail: "1722933288@qq.com",
        // },
        // {
        //   key: "2",
        //   name: "张锋",
        //   college: "经贸学院",
        //   book: "《电子商务》",
        //   telephone: 18273832937,
        //   mail: "28394857@qq.com",
        // },
        // {
        //   key: "3",
        //   name: "Joe Black",
        //   college: "会计学院",
        //   book: "《高等数学》",
        //   telephone: 18292386728,
        //   mail: "28375938292@qq.com",
        // },
      ],
      // pagination: {
      //   current: 1,
      //   pageSize: 5,
      //   total: 0,
      //   showQuickJumper: true,
      //   showSizeChanger: true,
      //   showTotal: (total) =>
      //     _this.lang === "en-US" ? `A total of ${total}` : `共${total}条`,
      //   size: "small",
      // },
    };
  },
  mounted() {
    this.handleRefresh();

    const admin = localStorage.getItem("admin");
    this.admin = admin === "true";
  },
  computed: {
    columns() {
      if (this.admin) {
        return [
          {
            title: "学院",
            dataIndex: "college",
            key: "college",
          },
          {
            title: "课程",
            dataIndex: "course",
            key: "course",
          },
          {
            title: "任课教师",
            dataIndex: "teacher",
            key: "teacher",
            scopedSlots: { customRender: "name" },
          },
          {
            title: "联系方式",
            dataIndex: "telphone",
            key: "telphone",
          },
          {
            title: "邮箱",
            dataIndex: "email",
            key: "email",
            width: 200,
          },
          {
            title: "操作",
            dataIndex: "handle",
            key: "stu_handle",
            scopedSlots: { customRender: "handle" },
          },
        ];
      } else {
        return [
          {
            title: "学院",
            dataIndex: "college",
            key: "college",
          },
          {
            title: "课程",
            dataIndex: "course",
            key: "course",
          },
          {
            title: "任课教师",
            dataIndex: "teacher",
            key: "teacher",
            scopedSlots: { customRender: "name" },
          },
          {
            title: "联系方式",
            dataIndex: "telphone",
            key: "telphone",
          },
          {
            title: "邮箱",
            dataIndex: "email",
            key: "email",
            width: 200,
          },
        ];
      }
    },
  },
  methods: {
    handleRefresh(params = {}) {
      this.$axios("/courseinfo/getcourseinfo", params).then((res) => {
        if (res.status === 0) {
          this.booklist = res.data;
        } else {
          this.$message.warning(res.message);
        }
      });
    },
    // 输入筛选条件
    searchAll(value) {
      this.infomation = value;
      this.handleRefresh({ name: value });
    },
    // 整体条件筛选
    onSearch(college = "") {
      this.college = college;
      // this.listdata(); // 调接口动态显示
    },
    // 弹窗
    showDrawer() {
      this.edit = false;
      this.visible = true;
    },
    modifyInfo(data) {
      this.edit = true;
      this.formData = { ...data };
      console.log(data);
      this.visible = true;
    },
    // 删除信息
    warning(record) {
      this.record = record;
      const self = this;
      const handleOk = () => {
        self
          .$axios(`/courseinfo/deletacourseinfo/${record.course_id}`, {
            course_id: record.course_id,
          })
          .then((res) => {
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
        onOk: () => handleOk(),
        onCancel() {},
      });
    },
    onClose() {
      this.resetForm();
      this.visible = false;
    },
    onSubmit() {
      if (this.edit) {
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            this.$axios("/courseinfo/updatacourseinfo", this.formData).then(
              (res) => {
                if (res.status === 0) {
                  this.$message.success("操作成功");
                  this.handleRefresh();
                  this.visible = false;
                  this.edit = false;
                  this.formData = {};
                } else {
                  this.$message.warning(res.message);
                }
              }
            );
          } else {
            return false;
          }
        });
      } else {
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            this.$axios("/courseinfo/addcourseinfo", this.formData).then(
              (res) => {
                if (res.status === 0) {
                  this.$message.success("操作成功");
                  this.handleRefresh();
                  this.visible = false;
                  this.edit = false;
                  this.formData = {};
                } else {
                  this.$message.warning(res.message);
                }
              }
            );
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
.search {
  margin: 0 10px 10px 0;
  width: 300px;
}
.drawerButton {
  margin: 10px 0 20px 0;
  text-align: center;
}
</style>
