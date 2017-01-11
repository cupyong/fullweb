<template>
    <div>
       <search_top :model.sync="model"></search_top>
        <table_content :model.sync="model"></table_content>
        
    </div>
</template>
<script>
    import table_content from '../../components/Common/content.vue'
     import search_top from '../../components/Common/searchtop.vue'
    export default {
        data() {
            return {
                model: 'user'
            }
        },
        components: { table_content,search_top},
      }
</script>