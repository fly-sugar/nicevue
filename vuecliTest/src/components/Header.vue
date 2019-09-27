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
        {name: '我的后院', url: '/My'}
      ]
    }
  },
  methods: {
    handleChangeRoute (item) {
      this.$router.push(item.url)
    }
  }
}
</script>
