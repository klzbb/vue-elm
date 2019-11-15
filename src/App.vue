<template>
    <div id="app">
        <!-- <transition name="router-fade" mode="out-in">
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
        </transition>
        <transition name="router-fade" mode="out-in">
            <router-view v-if="!$route.meta.keepAlive"></router-view>
        </transition> -->
        <router-view></router-view>

    </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
html,body{
  color: #000;
}
.router-fade-enter-active,
.router-fade-leave-active {
    transition: opacity 0.3s;
}
.router-fade-enter,
.router-fade-leave-active {
    opacity: 0;
}
</style>
