<template>
    <div class="main">
        <div class="header">
            导航
        </div>
        <div class="nav">
          <el-menu :router=true default-active="user" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                <el-menu-item v-for="item in menu" :index="item.router">
                    <i :class="item.icon"></i>{{item.name}}
                </el-menu-item>
          </el-menu>
        </div>
        <div class="main-cnt">
            <div class="content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
    import menu from '../menu.js'
    export default {
        data() {
            return {
                menu: menu
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>