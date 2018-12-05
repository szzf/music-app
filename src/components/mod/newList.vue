<template>
    <div class="new-list">
        <h2 class="list-title">最新音乐</h2>
        <ul class="songlist">
            <li class="songlist-item" v-for="item in songList" :key="item.id">
                <div class="content">
                    <h4 class="title hid">{{item.name}}</h4>
                    <span class="sub-title hid">{{item.subTitle}}</span>
                </div>
                <div class="play-btn">
                    <i class="icon-play2"></i>
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
            border-bottom: 1px solid #f5f5f5;
            .content {
                flex: 1;
                padding: 6px 0;
                .title {
                    font-size: 16px;
                    line-height: 24px;
                    font-weight: 400;
                }
                .sub-title {
                    display: block;
                    font-size: 12px;
                    // font-weight: 100;
                    color: #888;
                }
            }
            .play-btn {
                position: relative;
                padding: 0 12px;
                i {
                    position: relative;
                    top: 13px;
                    margin-top: -12px;
                    width: 24px;
                    height: 24px;
                    font-size: 24px;
                    color: #888;
                    opacity: 0.5;
                    vertical-align: middle;
                }
            }
        }
    }
}

.hid {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: normal;
}

// @media screen and (-webkit-min-device-pixel-ratio: 2) {
//     .bor-b::after {
//         content: "";
//         position: absolute;
//         height: 1px;
//         width: 100%;
//         border-bottom: 1px solid rgba(0, 0, 0, 0.1);
//         top: 0;
//         left: 0;
//         transform: scale(0.5);
//         z-index: 10;
//     }
// }

// @media screen and (-webkit-min-device-pixel-ratio: 3) {
//     .bor-b::after {
//         content: "";
//         position: absolute;
//         height: 1px;
//         width: 100%;
//         border-bottom: 1px solid rgba(0, 0, 0, 0.1);
//         bottom: 0;
//         left: 0;
//         transform: scale(0.3333333);
//         z-index: 10;
//     }
// }
</style>
