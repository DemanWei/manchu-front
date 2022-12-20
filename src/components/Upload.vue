<template>
  <el-container style="margin: 0;padding: 0;">
    <el-header style="margin: 0;padding: 0;">
      <el-menu
        :default-active="this.activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="0">主  页</el-menu-item>
        <el-menu-item index="1">系统介绍</el-menu-item>
        <el-menu-item index="2">
          <el-link href="https://element.eleme.io" target="_blank">文档与支持</el-link>
        </el-menu-item>
        <el-submenu index="3">
          <template slot="title">关于我们</template>
          <el-menu-item index="3-0">
            <el-link type="primary" href="http://www.bjtu.edu.cn" target="_blank" style="color:white;">北京交通大学</el-link>
          </el-menu-item>
          <el-menu-item index="3-1">
            <el-link type="primary" href="http://cs.bjtu.edu.cn" target="_blank" style="color:white;">计算机与信息技术学院</el-link>
          </el-menu-item>
          <el-menu-item index="3-2">
            <el-link type="primary" href="http://gs.bjtu.edu.cn" target="_blank" style="color:white;">研究生院</el-link>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="6" class="btn-user">
          <template slot="title"><i class="el-icon-user-solid"></i>{{ user.account }}</template>
          <el-menu-item index="6-0">
            <img src="../../static/icons/user.png" style="height: 18px;"/>
            个人中心
          </el-menu-item>
          <el-menu-item index="6-1">
            <img src="../../static/icons/btn_close.png" style="height: 18px;"/>
            注  销
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-header>
    <el-main class="main">
<!--      el-main的最大容器-->
      <el-col>
<!--        介绍:上边一行-->
        <el-row>
          <h3>满语文字识别</h3>
          <p style="color:#858c99;font-size: 14px;">通过领先的深度学习技术，对各种表格，图片，文档、证件、面单等多种通用场景进行快速、精准的检测和识别，支持简体中文/
            繁体中文/英文/数字/西欧主流语言/东欧主流语言等共52种语言，同时支持印刷体、手写体、倾斜、折叠、旋转等。</p>
        </el-row>

<!--        下边1行3列:历史列表 识别card 识别结果-->
        <el-row>
<!--         历史列表 -->
<!--          <el-col :span="4" style="padding-right: 20px;">-->
<!--            <el-scrollbar style="height: 460px;background-color: #fff;border: 1px solid #ccc;">-->
<!--              <div style="max-height: 100%;">-->
<!--                <el-link type="primary" href="#">2021-10-02 15:23:21</el-link>-->
<!--                <el-link type="primary" href="#">2021-10-02 15:23:21</el-link>-->
<!--                <el-link type="primary" href="#">2021-10-02 15:23:21</el-link>-->
<!--                <el-link type="primary" href="#">2021-10-02 15:23:21</el-link>-->
<!--                <el-link type="primary" href="#">2021-10-02 15:23:21</el-link>-->
<!--                <el-link type="primary" href="#">2021-10-02 15:23:21</el-link>-->
<!--                <el-link type="primary" href="#">2021-10-02 15:23:21</el-link>-->
<!--                <el-link type="primary" href="#">2021-10-02 15:23:21</el-link>-->
<!--                <el-link type="primary" href="#">2021-10-02 15:23:21</el-link>-->
<!--                <el-link type="primary" href="#">2021-10-02 15:23:21</el-link>-->
<!--                <el-link type="primary" href="#">2021-10-02 15:23:21</el-link>-->
<!--                <el-link type="primary" href="#">2021-10-02 15:23:21</el-link>-->
<!--                <el-link type="primary" href="#">2021-10-02 15:23:21</el-link>-->
<!--                <el-link type="primary" href="#">2021-10-02 15:23:21</el-link>-->
<!--                <el-link type="primary" href="#">2021-10-02 15:23:21</el-link>-->
<!--                <el-link type="primary" href="#">2021-10-02 15:23:21</el-link>-->
<!--                <el-link type="primary" href="#">2021-10-02 15:23:21</el-link>-->
<!--                <el-link type="primary" href="#">2021-10-02 15:23:21</el-link>-->
<!--                <el-link type="primary" href="#">2021-10-02 15:23:21</el-link>-->
<!--                <el-link type="primary" href="#">2021-10-02 15:23:21</el-link>-->
<!--                <el-link type="primary" href="#">2021-10-02 15:23:21</el-link>-->
<!--                <el-link type="primary" href="#">2021-10-02 15:23:21</el-link>-->
<!--                <el-link type="primary" href="#">2021-10-02 15:23:21</el-link>-->
<!--                <el-link type="primary" href="#">2021-10-02 15:23:21</el-link>-->
<!--                <el-link type="primary" href="#">2021-10-02 15:23:21</el-link>-->
<!--                <el-link type="primary" href="#">2021-10-02 15:23:21</el-link>-->
<!--                <el-link type="primary" href="#">2021-10-02 15:23:21</el-link>-->
<!--              </div>-->
<!--            </el-scrollbar>-->
<!--          </el-col>-->
<!--        识别card + 识别结果  -->
          <el-col :span="24">
            <el-row style="padding: 20px;background-color:#fff;" :gutter="20"
                    v-loading="loading"
                    element-loading-text="正在识别中"
                    element-loading-spinner="el-icon-loading"
                    element-loading-background="rgba(50, 50, 50, 0.7)">
<!--              识别card-->
              <el-col :span="14">
                <el-card class="box-card" style="background-color:#f2f5fa;">
<!--                <el-card class="box-card" style="background-image: url('../../static/images/manchu.jpg');background-size:cover; ">-->
                  <div class="container" style="height:360px;">，
                    <h1 class="title">满文识别系统</h1>
                    <el-upload style="margin:50px auto 0; text-align: center;"
                               class="upload-demo" drag :on-progress="handleProgressPicture"
                               :show-file-list="false" :multiple="false"
                               action="">
                      <img :src="imgDataBase64" v-if="imgDataBase64!==''" style="width: 100%;height: 100%;"/>
                      <div v-else class="upload-center">
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text" style="opacity: 1;">将图片拖到此处，或<em>点击上传</em></div>
                        <div class="el-upload__tip" slot="tip">只能上传jpg/png图片文件，且不超过5MB</div>
                      </div>
                    </el-upload>
                    <div class="btn-box" style="margin-top: 40px;">
                      <el-button type="primary" icon="el-icon-document-delete" @click="handleReset">重  置</el-button>
                      <el-button type="success" icon="el-icon-upload" @click="upload">开始识别</el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
<!--              识别结果-->
              <el-col :span="10">
                <el-collapse :value="result?'ocr-result':''" accordion>
                  <el-collapse-item title="识别结果" name="ocr-result">
                    <el-scrollbar style="padding:0 10px;">
                      <div style="max-height: 280px;">{{ result }}</div>
                    </el-scrollbar>
                  </el-collapse-item>
                </el-collapse>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-col>
    </el-main>
    <!--    底部-->
    <el-footer>
      <div style="text-align: center;">
        <p class="text-decoration-none el-icon-link el-link el-link--info">拓展链接: </p>
        <el-link type="primary" href="http://www.manchu.work/home" class="text-decoration-none">
          manchu.work
        </el-link>
      </div>
    </el-footer>
  </el-container>
</template>
<script>
export default {
  name: 'UserAvatar',
  data() {
    return {
      user:{},
      imgDataBase64:'',
      activeIndex:'0',
      result: '',
      fileName: '',
      loading:false,
    }
  },
  created() {
    const user = window.localStorage.getItem('user')
    if (user) {
      this.user = JSON.parse(user)
    }
  },
  methods: {
    handleReset(){
      this.fileName = '';
      this.result = '';
      this.imgDataBase64 = '';
    },
    // 点击菜单
    handleSelect(key) {
      this.activeIndex = key;
      if(key==='0'){
        this.$router.push('/main');
      }
      if (key === '6-1') {  // 注销
        localStorage.removeItem('user');
        this.$message('注 销 成 功');
        this.$router.replace('/login');
      }
    },
    handleProgressPicture(event, file, fileList){
      this.fileName = file.name
      // 校验图片大小
      const isLt2M = file.size / 1024 / 1024 < 5
      if (!isLt2M) {
        this.$message.warning('上传的图片大小不能超过 5M！')
        return
      }
      // 将图片转化为base64的字符串  FileReader
      const reader = new FileReader()
      // readAsDataURL将文件对象的数据读取到reader中，转化为base64的字符串
      reader.readAsDataURL(file.raw)
      // load监听读取完成
      reader.addEventListener('load', () => {
        this.imgDataBase64 = reader.result;
     });
    },
    upload() {
      //let file = this.$refs.iptFile.files[0]
      if (this.imgDataBase64 === '') {
        this.$message.warning('请选择图片后再上传！')
        return;
      }
      let param = new FormData(); //创建form对象
      param.append('image', this.imgDataBase64);//通过append向form对象添加数据
      param.append('fileName', this.fileName);
      this.loading = true;
      this.$http.post('/upload', param).then(response => {
        this.result = response.data
        this.$message.success('识 别 成 功');
        this.loading = false;
      }).catch((error)=>{
        this.result = error.toString();
        this.$message.error('未 知 错 误');
        this.loading = false;
      })
    },
  }
}
</script>

<style lang="less" scoped>
.upload-center{
  width:100%;
  height:100%;
  background-image: url('../../static/images/manchu_alpha_80.png');
  background-size:cover;
}
.btn-user {
  position: absolute;
  right: 10px;
  color: blue;
  font-size: 16px;
  font-weight: bold;
}

.title {
  text-shadow: 6px 8px 3px rgb(207, 207, 207);
  text-align: center;
  color: royalblue;
}

.el-collapse-item {
  font-weight: bold;
}

.main {
  width: 80%;
  margin: 0 auto;
  padding-bottom: 5px;
  display:flex;
}

.btn-box {
  margin: 0 auto;
  text-align: center;
}

.preview {
  object-fit: contain;
  width: 350px;
  height: 350px;
}
</style>
