<template>
  <table class="table-style" cellspacing="0" cellpadding="0" :class="setStyle">
    <thead>
      <tr v-for="(item, index) in tableInfoList.theadInfo" :key="index">
        <th v-for="(list, index) in item" :key="index">{{list}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in tableInfoList.tbodyInfo" :key="index">
        <th v-for="list in item" :key="list">{{list}}</th>
      </tr>
    </tbody>
  </table>
</template>
<script>
  export default {
    name: 'w-table',
    data () {
      return {
        tableInfoList: {}
      }
    },
    computed: {
      setStyle: function () {
        return {
          'table-bordered': this.bordered,
          'table-centered': this.centered,
          'table-narrow': this.narrowed,
          'table-lineHeight': this.lineHeight
        }
      }
    },
    props: {
      tableInfo: {},
      centered: Boolean,
      bordered: Boolean,
      striped: Boolean,
      lineHeight: Boolean,
      narrowed: Boolean
    },
    mounted: function () {
      this.tableInfoList = this.tableInfo
    },
    methods: {
    }
  }
</script>
<style lang="less">
  @import './table.less';
</style>
