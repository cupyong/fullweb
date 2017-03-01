<template>
    <div>
        <div class="el-table el-table--fit el-table--striped el-table--enable-row-hover el-table--enable-row-transition"
             style="width: 100%;">
            <div class="el-table__body-wrapper">
                 <table cellspacing="0" cellpadding="0" border="0" class="el-table__body" style="width: 1035px;">
                   <thead>
                    <tr>
                        <th colspan="1" v-for="item in tableData.topList" class="el-table_1_column_1 is-leaf">
                            <div class="cell">{{item}}</div>
                        </th>
                     </tr>
                    </thead>
                    <tbody>
                    <tr v-for="tr in tableData.bodyList" >
                        <td  v-for="td in tr" class="el-table_1_column_1">
                            <div class="cell">{{td}}</div>
                        </td>
                      </tr>
                    </tbody>
                </table></div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        props: {
            model: '',
        },
        data() {
            return {
                test: 111
            }
        },
        mounted () {
            this.$store.dispatch('fetchList', {path: this.model,model:this.model})
        },
        computed: {
          ...mapGetters({
              tableData: 'getList'
        }),
    }
    }
</script>