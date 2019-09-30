<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" >
    <el-menu-item v-for="(item,index) in menu" :key="item.index" @click="handleChangeRoute(item)" :index="`${index}`">
      {{item.name}}
    </el-menu-item>
  </el-menu>
</template>
<script>
export default {
  name: 'Header',
  data () {
    return {
      activeIndex: '0',
      menu: [
        {name: '你我他说', url: '/'},
        {name: '我的后院', url: '/My'},
        {name: '登陆一下吧', url: '/Login'}
      ]
    }
  },
  methods: {
    handleChangeRoute (item) {
      this.$router.push(item.url)
    },
    toPage () {
      let index = this.$router.options.routes.filter((v) => {
        return this.$router.history.current.name === v.name
      })
      this.activeIndex = index[0].index
    }
  },
  created () {
    this.toPage()
  },
  watch: {
    $route () { // 监听路由跳转
      this.toPage()
    }
  }
}
</script>
