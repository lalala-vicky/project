<template>
  <div>
    <img
      src="@/assets/college/engineer.png"
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
            "学院下设计算机科学与技术系、软件工程系、电子科学与技术系、信息与通信工程系、基础教学部、实验教学中心，四系一部一中心。电子信息科学与技术专业培养具备电子信息科学与技术的基本知识，接受严格的科学实验训练和科学研究初步训练，掌握信息技术领域基本理论和专业技能，具有较强的计算机、外语、信息技术应用和创新能力以及在本专业领域跟踪新理论、新知识、新技术的能力，能在电子信息科学与技术、计算机科学与技术及相关领域和行政部门从事科学研究、教学、科技开发、产品设计、生产技术及经营管理等工作的多层次、高素质、全面发展的复合型科学研究或工程技术人才。计算机科学与技术主修大数据技术导论、数据采集与处理实践（Python）、Web前/后端开发、统计与数据分析、机器学习、高级数据库系统、数据可视化、云计算技术、人工智能、自然语言处理、媒体大数据案例分析、网络空间安全、计算机网络、数据结构、软件工程、操作系统等课程，以及大数据方向系列实验，并完成程序设计、数据分析、机器学习、数据可视化、大数据综合应用实践、专业实训和毕业设计等多种实践环节。"
          }}
        </div>
      </el-card>
      <el-card class="box-card2">
        <div slot="header">
          <span><a-icon type="bulb" style="color: yellow" />专业介绍：</span>
        </div>
        <div class="text">
          <ul class="text-content">
            <li>
              电信工程学院包括：计算机科学与技术，软件工程系，电子科学与技术系，信息与通信工程系。
            </li>
            <li>
              专业领域涉及面广：能够从事计算机硬件系统应用与维护和小型控制系统的应用、开发与维
              护、一般应用软件与CAD、CAI软件的开发、应用与维护工作。
            </li>
            <li>
              主核心课程核心课程包括：java语言，c++，计算机科学及编程导论，数据库系统、面向对象程序设计、数据结构、计算机组成原理、传感器原理及应用、操作系统、物联网控制、无线传感器网络原理、物联网信息安全、数据获取与信息处理系统、决策支持系统、云计算等。
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
          src: require("@/assets/engineer/enlist1.png"),
          title: "1",
        },
        {
          name: "account2",
          src: require("@/assets/engineer/enlist2.png"),
          title: "2",
        },
        {
          name: "account3",
          src: require("@/assets/engineer/enlist3.png"),
          title: "3",
        },
        {
          name: "account4",
          src: require("@/assets/engineer/enlist4.png"),
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
  overflow: hidden;
}
</style>
