<template>
    <el-container class="colorfff">
        <el-main>
            <el-form ref="form" :model="form" label-width="100px">
                <el-form-item label="光荣上墙">
                    <el-input :rows="7" size="medium" type="textarea" v-model="form.desc" placeholder="写下想对我说的话吧~~~"></el-input>
              </el-form-item>
            </el-form>
            <el-row class="bottomSpace">
              <el-col :span="2" :offset="22"><el-button type="success" @click="formContent">❤biubiu</el-button></el-col>
            </el-row>
            <el-row class="boederLine" v-show="list.length" v-for="(item, index) in list" :key="item.userName">
              <el-col :span="24" class="leftSide">{{item.message}}</el-col>
              <el-col class="righttSide">
                <span class="userName">{{item.userName}}</span>
                <span class="reply">回复</span>
                <span class="del" @click="del(index)">删除</span>
              </el-col>
            </el-row>
            <el-row v-show="!list.length">
              快来和我互动吧！！~~~~~
            </el-row>
        </el-main>
    </el-container>
</template>
<script>
export default {
  name: 'leaveMessage',
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      list: [],
      message: '',
      userName: '',
      cur: 0
    }
  },
  methods: {
    formContent () {
      let [message, userName] = [this.form.desc, Math.random()]
      this.list.push({message: message, userName: userName})
      this.form.desc = ''
    },
    del (index) {
      this.list.splice(index, 1)
    }
  }
}
</script>
<style>
  .boederLine{box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);padding:5px;box-sizing: border-box;}
  .bottomSpace{margin-bottom: 10px}
  .leftSide{text-align:left;}
  .reply{color:#409EFF;font-size: 14px;}
  .del{color:red;font-size: 14px;}
  .del:hover{cursor: pointer;}
  .righttSide{text-align: right;}
  .colorfff{color:#fff;}
</style>
