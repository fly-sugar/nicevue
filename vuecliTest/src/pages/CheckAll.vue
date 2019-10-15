<template>
  <div class="hello">
    <div class="leftDiv com">
      <ul>
        <li><input type="checkbox" v-model="leftAll" @change="changeData(leftData,leftAll)" :disabled="leftData.length==0">请选择</li>
        <li>{{filterData(leftData,true).length}}/{{leftData.length}}</li>
        <li v-for="(item,i) in leftData" :key='i'>
          <input type="checkbox" v-model="item.check" @change="curCahnge(leftData,'leftAll')">{{item.name}}
        </li>
      </ul>
    </div> 
    <div style="float:left;margin:20px;">
      <button @click="toRight()" :disabled="leftData.length==0 || filterData(leftData,true).length==0">toRigt</button>
      <br>
      <br>
      <button @click="toLeft()" :disabled="rightData.length==0 || filterData(rightData,true).length==0">toLeft</button>
    </div>
    <div class="righttDiv com">
      <ul>
        <li><input type="checkbox" v-model="rightAll" @change="changeData(rightData,rightAll)" :disabled="rightData.length==0">请选择</li>
        <li>{{filterData(rightData,true).length}}/{{rightData.length}}</li>
        <li v-for="(item,i) in rightData" :key='i'>
          <input type="checkbox" v-model="item.check"  @change="curCahnge(rightData,'rightAll')">{{item.name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      leftAll: false,
      rightAll:false,
      leftData:[
        {name: 'a',check: false},
        {name: 'b',check: false},
        {name: 'c',check: false},
        {name: 'd',check: false},
        {name: 'e',check: false},
      ],
      rightData:[],
      state:''
    }
  },
  methods: {
    toRight() {
      this.rightData.push(...this.filterData(this.leftData,true))
      this.leftData=this.filterData(this.leftData,false)
      if(this.rightData.length==this.filterData(this.rightData,true).length){
        this.rightAll=true
      }
    },
    toLeft() {
      this.leftData.push(...this.filterData(this.rightData,true))
      this.rightData=this.filterData(this.rightData,false)
    },
    changeData(data,type){
      for(let i=0;i<data.length;i++){
        data[i].check = type
      }
    },
    filterData(data,type) {
      return data.filter( (item) => {return item.check===type})
    },
    curCahnge(data,state) {
      this[state] = data.every(function(item){return item.check})
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.com{
  width:200px;
  height:300px;
  border: 1px solid #333;
  float: left;
  margin-right:30px;
  }
</style>
