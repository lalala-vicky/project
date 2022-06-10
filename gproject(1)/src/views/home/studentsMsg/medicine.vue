<template>
  <div>
    <img
      src="@/assets/college/medicine.png"
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
            "医药专业（Pharmacy）是培养具备药学学科基本理论、基本知识和实验技能，能在药品生产、检验、流通、使用和研究与开发领域从事鉴定、药物设计、一般药物制剂及临床合理用药等方面工作的高级科学技术人才的学科。本专业主要研究药剂学、药理学、药物化学、药物合成、药物分析等方面的基本知识和技能，进行药品的研发、生产、加工、质检、销售、管理等。例如：中成药、西药的研发，感冒清热颗粒等中药颗粒冲剂的加工，药物质量的检验鉴定，药品的销售管理等。本专业培养高层次、创新型、具有国际视野的，能从事药物新剂型与新制剂的设计、药物制剂的制备及其生产管理、工艺改造与技术设计、药物制剂质量评价等方面工作的交叉、复合、高素质药学技术人才与领军人物。学生主要学习药学各主要分支学科的基本理论和基本知识，受到药学科研方法和技能的基本训练,具有药物制剂制备、质量控制评价及制剂工程设计的基本能力。毕业后应获得以下知识和能力： 1.掌握药剂学、药理学、药物分析和药物化学等学科的基本理论、基本知识； 2.掌握药物制剂制备、质量控制、药物与生物体相互作用、药效学和药物安全性评价等基本方法和技术； 3.具有药物制剂的设计能力、选择药物制剂分析方法的能力、及制剂工程设计能力； 4．掌握药学文献检索的基本方法； 5.熟悉药事管理的法规、政策与营销的基本知识、科学管理的基本规律和模式； 6.了解现代药物制剂与工程的发展动态。"
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
              药学类专业有药学， 药物制剂， 临床药学， 药事管理， 药物分析，
              药物化学， 海洋药学， 化妆品科学与技术。
            </li>
            <li>
              本专业培养基础扎实、知识面广、具有创新精神，能从事化学药物、生物技术药物和天然药物的研究开发、教育以及药品质量控制，临床药学，医药营销，医药企业管理等方面工作的宽口径、复合型高素质药学人才与领军人物，服务于国家经济社会建设主战场。
            </li>
            <li>
              专业核心课程
              有机化学、大学化学实验、生物化学与分子生物学、药物化学、工业药剂学、生物药剂学与药物动力学、药理学、药物分析学Ⅱ、药用高分子材料学
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
          src: require("@/assets/medicine/mediclist1.png"),
          title: "1",
        },
        {
          name: "account2",
          src: require("@/assets/medicine/mediclist2.png"),
          title: "2",
        },
        {
          name: "account3",
          src: require("@/assets/medicine/mediclist3.png"),
          title: "3",
        },
        {
          name: "account4",
          src: require("@/assets/medicine/mediclist4.png"),
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
  height: 565px;
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
