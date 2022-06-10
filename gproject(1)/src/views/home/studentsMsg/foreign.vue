<template>
  <div>
    <img
      src="@/assets/college/foreign.png"
      alt=""
      style="width: 100%; height: 250px"
    />
    <div class="content">
      <el-card class="box-card">
        <div slot="header">
          <span><a-icon type="bulb" style="color: yellow" />专业介绍：</span>
        </div>
        <div class="text">
          外国语学院目前开设有英语、商务英语、翻译三个专业。
          <ul class="text-content">
            <li>
              英语：培养目标：本专业旨在培养具备扎实的英语语言基础、较强的语言运用能力和教学实践能力，熟知外语教学理论和现代教育理念，能够解决基础阶段英语教育教学实际问题，在中小学、幼儿园或英语培训机构从事英语教学的应用型人才。
            </li>
            <li>
              翻译：培养目标：本专业旨在培养具备扎实的英语语言基础知识和翻译专业知识，较强的英语语言应用能力，能够熟练运用翻译技能和现代信息技术，在外事、经贸、文化等涉外企事业机构从事应用类文体和一般难度科技文本的笔译、联络与陪同口译及涉外交际等工作的应用型翻译人才。
              主要课程：综合英语、英语口语、英语听力、基础写作、笔译理论与实践、基础笔译、多文体阅读、笔译实务、商务翻译、视译基础、联络口译、交替传译、计算机辅助翻译、翻译专题、翻译实训等。
            </li>
            <li>
              商务英语：培养目标：本专业旨在培养具有扎实的英语语言基础知识技能、广泛的跨文化知识，掌握国际贸易、网络营销、跨境电子商务、管理等方面的知识，具有较强的跨境电子商务操作能力、跨文化沟通能力，能够在各类经济贸易部门、企事业单位从事国际商务和经济管理工作的复合型、应用型人才。
              主要课程：综合商务英语、商务英语口语、商务英语阅读、商务英语写作、国际商务礼仪、国际贸易实务、国际金融实务、外贸函电、外贸单证实务、跨文化商务沟通与谈判、跨境电子商务实务等。
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
              外国语学院主要开设的有东方语言学、西方语言学专业及小语种专业三大类。东方语言学包括汉语、韩语、日语等主流的东方语言；西方语言学主要包括英语、法语、俄语、西班牙语等主流的西方语言；小语种包括梵语、印地语以及缅甸语一类的偏门语言。
            </li>
            <li>
              专业领域涉及面广：教育行业，大型企业的外事部门，外企，传统涉外企业（如外贸企业，旅游，酒店等），互联网传媒，外交翻译。
            </li>
            <li>
              主要课程有精读、泛读、听力、语法、口语、写作、综合、翻译、语言学概论、文学、语种国家文化等。基础课程还有计算机应用、马概、思想道德修养与法律基础、大学语文、法学、学法学、近现代史、逻辑等。
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
          src: require("@/assets/foreign/foreignlist1.png"),
          title: "1",
        },
        {
          name: "account2",
          src: require("@/assets/foreign/foreignlist2.png"),
          title: "2",
        },
        {
          name: "account3",
          src: require("@/assets/foreign/foreignlist3.png"),
          title: "3",
        },
        {
          name: "account4",
          src: require("@/assets/foreign/foreignlist4.png"),
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
  height: 585px;
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
