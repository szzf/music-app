<template>
    <div class="nav">
        <ul class="nav-list">
            <li class="nav-item" :class='{"selected":tabIndex==1}' @click='active(1)'>
                <a href="#" class="recom">新歌推荐</a>
            </li>
            <li class="nav-item" :class='{"selected":tabIndex==2}' @click='active(2)'>
                <a href="#" class="toplist">排行榜</a>
            </li>
            <li class="nav-item" :class='{"selected":tabIndex==3}' @click='active(3)'>
                <a href="#" class="search">搜索</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tabIndex: 1
        }
    },
    methods: {
        active(index) {
            this.tabIndex = index
            if (index === 1) {

            } else if (index === 2) {

            } else if (index === 3) {

            }
        }
    }
}
</script>

<style lang="scss">
.nav {
    position: fixed;
    top: 64px;
    width: 100%;
    z-index: 999;
    background-color: #fff;
    .nav-list {
        display: flex;
        .nav-item {
            flex: 1;
            width: 33%;
            text-align: center;
            a {
                font-size: 15px;
                line-height: 40px;
                text-decoration: none;
            }
        }
    }
    .selected {
        a {
            color: #d33a31;
        }
        &.nav-item::after {
            content: "";
            display: block;
            left: 0;
            bottom: 0px;
            right: 0;
            top: 0;
            height: 2px;
            background-color: #d33a31;
        }
    }
    &::after {
        position: absolute;
        content: "";
        top: -1px;
        left: 0;
        pointer-events: none;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        transform-origin: top left;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
}
</style>
