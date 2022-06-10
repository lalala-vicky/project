<template>
  <div>
    <img
      src="@/assets/college/account.png"
      alt=""
      style="width: 100%; height: 250px"
    />
    <div class="content">
      <el-card class="box-card">
        <div slot="header">
          <span><a-icon type="bulb" style="color: yellow" />简介：</span>
        </div>
        <div class="text">
          {{
            "在美国和中国，会计专业一直是热门专业，随着经济的发展，企业对会计人员的需要从04年开始剧增。跟其他专业相比，就业形势一直是不错的。会计专业是以研究财务活动和成本资料的收集、分类、综合、分析和解释的基础上形成协助决策的信息系统，以有效地管理经济的一门应用学科，可以说它是社会学科的组成部分，也是一门重要的管理学科。会计学的研究对象是资金的运动，会计是以货币为主要计量单位，以提高经济效益为主要目标，运用专门方法对企业，机关，事业单位和其他组织的经济活动进行全面，综合，连续，系统地核算和监督，提供会计信息，并随着社会经济的日益发展。逐步开展预测、决策、控制和分析的一种经济管理活动，是经济管理活动的重要组成部分。本专业培养德、智、体、美全面发展，具有良好职业道德和人文素养，熟悉会计基本理论与相关财经法规，熟练掌握会计基本技能，具备会计核算、会计监督、出纳业务、会计管理、税务管理和财务管理能力，从事单位出纳、会计核算、会计监督、查账验证、会计咨询等工作的高素质技术技能人才。"
          }}
        </div>
      </el-card>
      <el-card class="box-card2">
        <div slot="header">
          <span><a-icon type="bulb" style="color: yellow" />专业介绍：</span>
        </div>
        <div class="text">
          <ul class="text-content">
            <li>会计学院包括：会计学，审计学，财务管理，金融管理四个专业。</li>
            <li>
              专业领域涉及面广：鉴证，审计，税收，公司会计，管理会计，财务管理，破产清算，法务会计，预算制定，商业咨询等等都是会计专业将要涉及的领域
            </li>
            <li>
              主核心课程核心课程包括：
              会计基础、企业财务会计、成本计算与分析、企业财务管理、税费计算与申报、会计信息化、出纳业务操作、会计综合实训等。
            </li>
          </ul>
        </div>
      </el-card>
      <el-carousel class="imglist">
        <el-carousel-item v-for="item in imglist" :key="item.name">
          <img
            :src="item.src"
            alt=""
            :title="item.title"
            style="width: 100%; height: 1005"
          />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imglist: [
        {
          name: "account1",
          src: require("@/assets/account/accountlist1.png"),
          title: "1",
        },
        {
          name: "account2",
          src: require("@/assets/account/accountlist2.png"),
          title: "2",
        },
        {
          name: "account3",
          src: require("@/assets/account/accountlist3.png"),
          title: "3",
        },
        {
          name: "account4",
          src: require("@/assets/account/accountlist4.png"),
          title: "4",
        },
      ],
    };
  },
};
</script>
<style>
* {
  padding: 0;
  margin: 0;
  font-size: 14px;
}
.content {
  margin-top: 20px;
}
.text-content {
  margin-left: 10px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  float: left;
  width: 480px;
  height: 500px;
  background-color: rgb(116, 153, 153);
  margin-right: 25px;
}
.box-card2 {
  width: 560px;
  background-color: rgb(116, 153, 153);
}
.timelist {
  margin: 10px 0 0 10px;
  float: left;
}
.imglist {
  width: 560px;
  height: 270px;
  margin-top: 10px;
}
</style>
