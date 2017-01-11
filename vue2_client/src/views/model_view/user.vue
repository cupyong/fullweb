<template>
    <div>
        <table_content :model.sync="model"></table_content>
    </div>
</template>
<script>
    import table_content from '../../components/Common/content.vue'
    export default {
        data() {
            return {
                model: 'user'
            }
        },
        components: { table_content},
      }
</script>