<template>
    <div class="new-list">
        <h2 class="list-title">最新音乐</h2>
        <ul class="songlist">
            <li class="songlist-item bor-btm bor-mobie" v-for="item in songList" :key="item.id">
                <div class="content-wrap bor-mobie bor-btm">
                    <div class="content">
                        <div class="title hid">
                            <h4 class="name">{{item.name}}</h4>
                            <span class="alias">{{item.alias && '('+item.alias+')'}}</span>
                        </div>
                        <span class="art hid">{{item.artists | artistsFormatter()}} - {{item.album}}</span>
                    </div>
                    <div class="play-btn">
                        <i class="icon-play2"></i>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        songList: {
            type: Array
        }
    }
}
</script>

<style lang="scss">
.new-list {
    .songlist {
        .songlist-item {
            position: relative;
            display: flex;
            margin-left: 10px;
            .content-wrap {
                display: flex;
                flex: 1 1 auto;
                .content {
                    padding: 6px 0;
                    flex: 1;
                    width: 0;
                    .title {
                        .name {
                            display: inline-block;
                            font-size: 17px;
                            line-height: 24px;
                            font-weight: 400;
                        }
                        .alias {
                            margin-left: 4px;
                            font-size: 16px;
                            color: #888;
                        }
                    }
                    .art {
                        display: block;
                        font-size: 12px;
                        line-height: 20px;
                        color: #888;
                    }
                }
            }
            .play-btn {
                display: flex;
                align-items: center;
                padding: 0 14px;
                i {
                    width: 24px;
                    height: 24px;
                    font-size: 24px;
                    color: #888;
                    opacity: 0.5;
                }
            }
        }
    }
}
</style>
