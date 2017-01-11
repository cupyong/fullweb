<template>
   <div>searchtop</div>
</template>

<script>
    export default {
        props: {
            model: '',
        },
        mounted () {
            console.log(this.model)
        },
    }
</script>