<template>
  <div>
    <img
      src="@/assets/college/economy.png"
      alt=""
      style="width: 100%; height: 250px"
    />
    <div class="content">
      <el-card class="box-card">
        <div slot="header">
          <span><a-icon type="bulb" style="color: yellow" />专业介绍：</span>
        </div>
        <div class="text">
          <ul class="text-content">
            <li>
              电子商务：本专业培养学生具有扎实的经济管理和现代商务理论基础，系统全面的了解信息技术专业知识和电子商务的基本理论，能将技术与管理有机地融合的复合应用型人才。
            </li>
            <li>
              工商管理：旨在培养学生具有扎实的工商管理理论基础和专业技能，能够运用专业知识进行现代企业的生产运作管理、质量管理、项目管理、物业管理，拥有较突出的预测决策、商务谈判、组织协调的能力和沟通技巧。
            </li>
            <li>
              信息管理与信息系统：本专业培养德、智、体全面发展的，掌握信息系统的分析与设计方法以及数据管理相关的知识与技能，掌握管理信息系统的实现方法、计算机网络数据库的操作，具有信息组织、档案管理、信息分析研究、传播与数据库开发利用的基本能力的应用技术型专门人才。
            </li>
            <li>
              物流管理：本专业以服务地方经济和社会需求为导向，培养适应各类企业生产和管理活动所需要的运输、仓储、配送等现代物流管理知识和运作技能，掌握供应链流程管理，能够在供应链环境下进行物流子系统的规划与设计，能够进行供应链系统整合和优化的应用型人才。
            </li>
            <li>
              市场营销：本专业培养具有创新创业精神、知识面广博、跨专业学习能力强、多学科兼容并蓄的具备市场营销、管理学、经济法、公共关系广告学等方面的知识和应用能力。
            </li>
            <li>
              人力资源管理：本专业培养本专业培养符合市场人才需求，具备人文精神、科学素养和诚信品质，掌握管理学、人力资源管理等方面的基本理论知识，具有较强的语言与文字表达、人际沟通、组织协调及领导的基本能力以及较强的创新精神及创业实践能力，熟悉人力资源管理相关方针、政策及法规的应用型专业人才。
            </li>
          </ul>
        </div>
      </el-card>
      <el-card class="box-card2">
        <div slot="header">
          <span><a-icon type="bulb" style="color: yellow" />简介：</span>
        </div>
        <div class="text">
          <ul class="text-content">
            <li>
              国际经济与贸易主要研究经济学的基本原理和国际贸易基本知识，了解现代国际经济与贸易环境和发展现状，熟悉通行的国际贸易规则、法律与惯例，通晓最新的国际贸易业务运作方式与基本操作技能，能够无障碍地进行英语交流。例如：精通进出口贸易的操作流程、熟练填制外贸单证、能够利用外贸函电进行往来业务磋商。
            </li>
            <li>
              经贸学院包括：电子商务专业，工商管理专业，信息管理与信息系统专业，物流管理，市场营销专业，人力资源专业。
            </li>
            <li>
              该专业注重内贸与外贸相结合、营销与管理相结合，以内贸、营销为主，重视学生综合能力的培养。
              该专业主要培养适应社会主义现代化建设需要的德才兼备、高素质复合型的能在工商贸企业从事贸易、营销与管理等实际业务工作和商贸部门管理的高级专门人才。
            </li>
            <li>
              主要课程：政治经济学、西方经济学、国际经济学、计量经济学、世界经济概论、国际贸易理论与实务、国际金融、国际结算、货币银行学、财政学、会计学、统计学。
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
          src: require("@/assets/economy/economyList1.png"),
          title: "1",
        },
        {
          name: "account2",
          src: require("@/assets/economy/economyList2.png"),
          title: "2",
        },
        {
          name: "account3",
          src: require("@/assets/economy/economyList3.png"),
          title: "3",
        },
        {
          name: "account4",
          src: require("@/assets/economy/economyList4.png"),
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
  height: 670px;
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
  overflow: hidden;
}
</style>
