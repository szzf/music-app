<template>
    <div class="hot-list">
        <div class="hot-pic">
            <div class="content">
                <div class="title-pic"></div>
                <div class="time">更新日期：{{updateTime | dateFormatter()}}</div>
            </div>
        </div>
        <ul class="songlist">
            <li class="songlist-item" v-for="item in songList" :key="item.id">
                <div class="order" :class="{'red':item.order<=3, 'smaller':item.order>99}">{{item.order}}</div>
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
        <div class="hot-btm">
            <span>查看完整榜单 &gt;</span>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            songList: [],
            updateTime: ''
        }
    },
    created() {
        axios.get('http://192.168.0.106:3000/top/list?idx=1').then((data) => {
            var data = data.data.playlist
            this.updateTime = data.updateTime
            var order = 0
            data.tracks.slice(0, 20).forEach((item) => {
                order++
                if (order < 10) {
                    order = '0' + order
                }
                var temp = {
                    id: item.id,
                    name: item.name,
                    alias: item.alia[0] || '',
                    artists: item.ar,   // 有可能是个数组
                    album: item.al.name,
                    order: order
                }
                this.songList.push(temp)
            })
        })
    },
}
</script>

<style lang="scss">
.hot-list {
    .hot-pic {
        position: relative;
        background: url("../assets/images/hot_music_bg_3x.jpg") no-repeat;
        background-size: contain;
        padding-bottom: 38.93%;
        .content {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 20px;
            .title-pic {
                background: url("../assets/images/index_icon_3x.png") no-repeat;
                background-size: 166px 97px;
                width: 142px;
                height: 67px;

                // margin-top: -33.5px;
                background-position: -24px -30px;
            }
            .time {
                margin-top: 10px;
                color: #fff;
            }
        }
    }
    .songlist {
        .songlist-item {
            display: flex;
            align-items: center;
            padding-left: 10px;
            .order {
                width: 28px;
                font-size: 16px;
                color: #999;
            }
            .red {
                color: #df3436;
            }
            .smaller {
                font-size: 12px;
            }
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
                            color: #888;
                            font-size: 16px;
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
    .hot-btm {
        height: 55px;
        line-height: 55px;
        text-align: center;
        span {
            display: inline-block;
            padding-right: 10px;
            color: #888;
            font-size: 14px;
        }
    }
}
</style>
