<template>
    <div>
        <h1 style="color: royalblue;">满文识别系统2</h1>
        <el-upload class="upload-demo" ref="uploadCom" :show-file-list="false" :action="uploadUrl"
            :on-success="onSuccess" :on-remove="handleRemove" :before-upload="beforeUpload" multiple :limit="5"
            :on-exceed="handleExceed" :file-list="file_list" :accept="accepts">
            <el-button icon="el-icon-upload2" @click="uploadFileClick($event)">将文件拖到此处，或<em>点击上传</em></el-button>
            <div slot="tip" class="el-upload__tip">
                支持扩展名：.rar .zip .doc .docx .xls .txt .pdf .jpg .png .jpeg，最多上传5个文件，每个大小不超过50Mb
            </div>
        </el-upload>
        <div class="flex mt20" v-if="file_list.length > 0">
            <div class="items-wrap" ref="contentWrap" :style="wrapHeight <= 70 ? 'height: auto' : `height: 60px;`"
                :class="{ noHidden: noHidden }">
                <uploadfile-item v-for="(item, index) in file_list" :key="index" :file="item" @cancel="cancelFile"
                    :showDel="true" class="mr20"></uploadfile-item>
            </div>
            <div class="on-off" v-if="wrapHeight > 70" @click="noHidden = !noHidden">
                {{ noHidden ? "收起" : "更多" }}
            </div>
        </div>
    </div>
</template>

<script>
import UploadfileItem from "../components/UploadfileItem.vue";
export default {
    components: {
        UploadfileItem,
    },
    data() {
        return {
            noHidden: true,
            wrapHeight: 0,
            delDialogitem: 0,
            imgLoad: false,
            centerDialogVisible: false,
            file_list: [],
            uploadUrl: '/manwen/uploadSingleImg',
            accepts: 'image/*'
        }
    },
    methods: {
        cancelFile(file) {
            console.log(file);
        },

        // 上传文件只能添加五条
        uploadFileClick(event) {
            if (this.formLabelAlign.annex.length === 5) {
                this.$message({
                    type: "warning",
                    message: "最多只可以添加五条",
                });
                event.stopPropagation();
                return false;
            }
        },
        //
        onSuccess(response, file, annex) {
            if (!response) {
                this.$message.error("文件上传失败");
            } else {
                this.imgLoad = false;
                this.$message({
                    message: "上传成功!",
                    type: "success",
                });
            }
        },

        beforeUpload(file) {
            console.log(file);
        },

        handleExceed(files,) {
            console.log(file);
        },

        handleRemove(){

        }
    }
}
</script>

<style lang="less" scoped>
.btn-box {
    margin-top: 10px;
}

.preview {
    object-fit: cover;
    width: 350px;
    height: 350px;
}
</style>
