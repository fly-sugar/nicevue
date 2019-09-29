<template>
  <div class="login">用户名：
    <el-autocomplete
      class="inline-input"
      v-model="cookies ? updateName : userName"
      :fetch-suggestions="querySearch"
      placeholder="请输入内容">
    </el-autocomplete>
    <el-button type="primary" plain @click="login">登录</el-button>
    <el-button type="primary" plain @click="clearCookie">清除cookie</el-button>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      userName: '',
      updateName: '',
      cookies: true
    }
  },
  methods: {
    setCookies: function () {
      this.$cookies.set('userName', '静静', '2d')
    },
    getCookies: function () {
      this.cookies = true
      this.updateName = this.$cookies.get('userName')
    },
    login: function () {

    },
    clearCookie: function () {
      this.$cookies.remove('userName')
      this.cookies = false
    },
    querySearch: function () {

    }
  },
  mounted: function () {
    this.setCookies()
    this.getCookies()
  }
}
</script>
