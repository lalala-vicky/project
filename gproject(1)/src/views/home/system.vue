<template>
  <a-table :columns="columns" :data-source="data">
    <a slot="name" slot-scope="text">{{ text }}</a>
    <!-- <template slot="status" slot-scope="text, record">
      <span @click="changeEdit">
        <a-icon type="edit" />
      </span>
    </template> -->
  </a-table>
</template>
<script>
export default {
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    this.handleRefresh();
  },
  computed: {
    columns() {
      return [
        {
          title: "用户名",
          dataIndex: "username",
          key: "usename",
          scopedSlots: { customRender: "username" },
          ellipsis: true,
        },
        {
          title: "密码",
          dataIndex: "password",
          key: "password",
          scopedSlots: { customRender: "password" },
        },
        {
          title: "状态",
          dataIndex: "status",
          key: "status",
          scopedSlots: { customRender: "status" },
        },
      ];
    },
  },
  methods: {
    handleRefresh(params = {}) {
      this.$axios("/manage/usermanage", params).then((res) => {
        if (res.status === 0) {
          this.data = res.data;
        } else {
          this.$message.warning(res.message);
        }
      });
    },
    changeEdit(record) {},
  },
};
</script>
<style></style>
