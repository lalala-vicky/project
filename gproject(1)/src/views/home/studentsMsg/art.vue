<template>
  <div>
    <img
      src="@/assets/college/art.png"
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
            "服装与艺术设计学院面向服装产业和艺术设计领域，以培养具有国际视野、创新意识、扎实专业理论基础和实践能力的高素质应用型人才为目标。重视学生设计与实践操作能力的培养，取得了众多可喜的教学成果。 学院拥有一支结构合理、业务精良的教师队伍，学院的服装设计与工程专业，培养具备服装设计、服装结构工艺及服装经营管理理论知识和实践能力的工学学科高级专门人才。毕业后可报考硕士研究生和国家公务员；可在服装企业、外贸企业、政府机构、海关检验、部队后勤、研究院所、教学机构从事服装设计、管理、经营、外贸及教学科研方面的工作。本专业要求自学者学习服装学科的基本理论和基本知识，进行服装设计方法、服装结构、服装生产纸样和成衣生产工艺、服装营销等方面的基本训练，成为具有服装设计、生产管理和营销等方面专业技能的、能够到服装企业生产第一线从事服装生产技术与管理岗位工作的高级应用型人才。"
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
              专业核心课程与主要实践环节：服装结构设计与制作、服装设计、服装CAD、服装生产管理与营销、排料与推板、服装立体裁剪、服装专业英语、时装画技法、时装画基础、服装配色与图案设计、专业实训等，以及各校的主要特色课程和实践环节。
            </li>
            <li>
              专业课程设置突出
              “应用”特色，重视实践操作能力的培养，坚持走“工学结合”的人才培养之路，学生能够独立完成从主题构思、设计制板到成品制作。
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
          src: require("@/assets/art/artlist1.png"),
          title: "1",
        },
        {
          name: "account2",
          src: require("@/assets/art/artlist2.png"),
          title: "2",
        },
        {
          name: "account3",
          src: require("@/assets/art/artlist3.png"),
          title: "3",
        },
        {
          name: "account4",
          src: require("@/assets/art/artlist4.png"),
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
  height: 522px;
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
