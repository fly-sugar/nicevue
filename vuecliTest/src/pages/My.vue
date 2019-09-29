<template>
  <el-container>
    <el-main>
      <el-row :gutter="24">
        <el-col :span="12">
          <div style="width:100%;" class="grid-content bg-purple" >
            <el-table :data="qqList" style="width: 100%" :show-header="false" @row-click="add">
              <el-table-column prop="id" width="50"></el-table-column>
              <el-table-column prop="titPic" width="50"></el-table-column>
              <el-table-column prop="qq" align="left"></el-table-column>
            </el-table>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple" style="width:100%;">
            <el-table :data="copyQQList" style="width: 100%" :show-header="false" @cell-mouse-enter="isShows">
              <el-table-column prop="id" width="50"></el-table-column>
              <el-table-column prop="titPic" width="50"></el-table-column>
              <el-table-column prop="qq" align="left" ></el-table-column>
              <el-table-column label="操作" prop="id">
                <template slot-scope="scope">
                  <el-button
                    v-if="isShow"
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>
<script>
export default {
  name: 'My',
  data () {
    return {
      qqList: [
        { titPic: 'pic', qq: '111111', id: 0 },
        { titPic: 'pic', qq: '222222', id: 1 },
        { titPic: 'pic', qq: '333333', id: 2 },
        { titPic: 'pic', qq: '444444', id: 3 }
      ],
      copyQQList: [],
      isShow: ''
    }
  },
  methods: {
    add (row, column, event) {
      this.qqList.filter(v => {
        if (v.id === row.id) {
          this.copyQQList.push(v)
        }
      })
      this.copyQQList = [...new Set(this.copyQQList)]
    },
    isShows (row, column, cell, event) {
      if (row.id) {
        this.isShow = 'show'
      }
    }
  }
}
</script>
