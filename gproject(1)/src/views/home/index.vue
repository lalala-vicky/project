<template>
  <div>
    <el-carousel :interval="5000" type="card" height="250px">
      <el-carousel-item v-for="item in imglist" :key="item.name">
        <img
          :src="item.src"
          alt=""
          :title="item.title"
          style="width: 100%; height: 1005"
        />
      </el-carousel-item>
    </el-carousel>
    <div class="message">
      <el-card class="box-card">
        <div slot="header">
          <span><a-icon type="bulb" style="color: yellow" />学校简介：</span>
        </div>
        <div class="text">
          陕西科技大学镐京学院是全国重点大学陕西科技大学按照新机制、新模式与陕西斯卡雷.博德制衣有限公司合作举办的本科层次独立学院。学院成立于2004年，是陕西省首批设立的八所独立学院之一。镐京学院全面贯彻党的十八大和十八届三中、四中、五中、六中全会精神，扎实推进两学一做学习教育；全面贯彻党的教育方针，依法治校，依规办学，立德树人，提高质量。全面深化教育综合改革，坚持以人才培养为中心，注重内涵发展，加快推进应用转型和教育现代化；全面推进三大工程建设，加强两个队伍建设，落实教师一岗双任，全面提高教育教学质量，深化人才培养模式改革,保持英语教学特色，强化专业技能培养,完善就业实习实训，推进竞赛考证，注重文化建设，优化育人环境，努力创建和谐文明和平安校园，为社会主义事业培养更多合格的建设者和可靠接班人。学院根据国家经济趋向、产业结构调整和区域经济建设需要，进行学科建设和专业设置。现设会计学院、经济贸易学院、电信工程学院、服装与艺术设计学院、医药工程学院、人文与艺术学院（公共艺术教育中心）、青年干部管理学院、镐京书院、思政部、基础部、外语部、体育部等12个二级教学单位。现设会计学、财务管理、金融工程、国际经济与贸易、信息管理与信息系统、工商管理、市场营销、人力资源管理、行政管理、物流工程、电子商务、物流管理、电气工程及其自动化、电子信息工程、电子信息科学与技术、计算机科学与技术、网络工程、服装设计与工程、药物制剂、外国语、机械设计制造及其自动化、工业工程、播音与主持艺术、视觉传达设计、环境设计、产品设计、服装与服饰设计等27个本科专业。
        </div>
      </el-card>
    </div>
    <div class="datarow">
      <span><a-icon type="sound" style="color: yellow" /> 新生入学公告：</span>
      <a-timeline style="margin-top: 20px">
        <a-timeline-item>新生入校根据流程进行报名注册登记</a-timeline-item>
        <a-timeline-item
          >查看自己的班级信息以及宿舍信息并入住宿舍</a-timeline-item
        >
        <a-timeline-item>登入系统并缴纳缴纳学费</a-timeline-item>
        <a-timeline-item>到宿舍处领取军训服</a-timeline-item>
        <a-timeline-item>军训日期为9月5号-9月25号</a-timeline-item>
        <a-timeline-item>9月3号举办新生开学典礼</a-timeline-item>
      </a-timeline>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      imglist: [
        {
          name: "风景1",
          src: require("@/assets/index/scene1.png"),
          title: "1",
        },
        {
          name: "风景2",
          src: require("@/assets/index/scene2.png"),
          title: "2",
        },
        {
          name: "风景3",
          src: require("@/assets/index/scene3.png"),
          title: "3",
        },
        {
          name: "风景4",
          src: require("@/assets/index/scene4.png"),
          title: "4",
        },
        {
          name: "风景5",
          src: require("@/assets/index/scene5.png"),
          title: "5",
        },
        {
          name: "风景6",
          src: require("@/assets/index/scene6.png"),
          title: "6",
        },
      ],
    };
  },
};
</script>
<style>
.message {
  float: left;
  margin-top: 20px;
  width: 740px;
}
.datarow {
  margin: 50px 7px 0 0;
  float: right;
}
.box-card {
  width: 740px;
  float: left;
  height: 385px;
  background-color: rgb(116, 153, 153);
  margin-right: 20px;
}
</style>
