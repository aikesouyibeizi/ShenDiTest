<template>
    <div class="home">
        <div class="menu">
            <el-menu
            :default-active="$route.path"
            class="el-menu-demo el-menu"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
                <li class="logo"><div class="img"><img src="../../common/images/logo.png" alt=""></div></li>
                <el-menu-item :route="{path: '/WorkBench'}" index="/WorkBench">工作台</el-menu-item>
                <el-menu-item index="2">标签管理</el-menu-item>
                <el-menu-item index="3">模型管理</el-menu-item>
                <el-menu-item index="4">活动管理</el-menu-item>
                <el-menu-item index="5">评估中心</el-menu-item>
                <el-menu-item index="6">劳动竞赛</el-menu-item>
                <el-menu-item index="7">系统管理</el-menu-item>
                <li class="manage">
                    <div class="manage">
                        <img src="../../common/images/nav-iconuser.png" alt="">
                        <span>admin</span>
                        <img src="../../common/images/jiantou.png" alt="">
                    </div>
                </li>
            </el-menu>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        handleSelect(key, keyPath) {
            this.$router.push({
                path:key
            })
        }
    }
}
</script>
<style>
/* ==菜单== */
.el-menu{
    display: flex;
    color: #95B0E0;
    font-size: 14px;
}
.el-menu .logo{
    margin-right: 100px;
}
.el-menu .logo .img{
    height: 100%;
    margin: auto 0;
    line-height: 60px;
}
.el-menu .logo .img img{
    vertical-align: middle;
}
.el-menu-item,.el-menu-demo{
    background-color:#1D3262 !important;
}
.el-menu-item:hover,
.el-menu .is-active{
    border-bottom-color:#547CD8 !important;
    color: #fff !important;
    background-color: #1F356A !important;
}

.el-menu li:last-child{
    position: absolute;
    right: 20px;
}
.el-menu li:last-child .manage{
    line-height: 60px;
    cursor: pointer;
}
.el-menu li:last-child img{
    vertical-align: middle;
}
</style>