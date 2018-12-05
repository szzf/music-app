<template>
    <div class="main">
        <recomList :songList='recomList'></recomList>
        <newList :songList='newList'></newList>
    </div>
</template>

<script>
import recomList from '@/components/mod/recomlist'
import newList from '@/components/mod/newList'
import axios from 'axios'

export default {
    data() {
        return {
            recomList: [],
            newList: [],
        }
    },
    components: {
        recomList,
        newList
    },
    methods: {
        getRecomList(count) {
            axios.get('http://192.168.0.104:3000/personalized').then((data) => {
                var dataArr = data.data.result.slice(0, count)
                var thumbImg = '?imageView&thumbnail=369x0&quality=75&tostatic=0'
                dataArr.forEach(item => {
                    var temp = {
                        id: item.id,
                        name: item.name,
                        thumbUrl: item.picUrl + thumbImg,
                        playCount: this.playCountAbbr(item.playCount)
                    }
                    this.recomList.push(temp)
                })
            })
        },
        getNewList(count) {
            axios.get('http://192.168.0.104:3000/personalized/newsong').then((data) => {
                var dataArr = data.data.result.slice(0, count)
                dataArr.forEach(item => {
                    var temp = {
                        id: item.id,
                        name: item.name,
                        alias: item.song.alias[0],
                        subTitle: this.artistsToStr(item.song.artists) + ' - ' + item.name,
                        // artists: this.artistsToStr(item.song.artists),
                    }
                    this.newList.push(temp)
                })
                console.log(this.newList)
                console.log(dataArr)
            })
        },
        playCountAbbr(num) {
            var str = ''
            if (num > 10000) {
                str = ' ' + (num / 10000).toFixed(1) + '万'
            }
            return str
        },
        artistsToStr(arr) {
            var str = ''
            arr.forEach((item, index) => {
                if (index > 0) {
                    str += ' / ' + item.name
                } else {
                    str += item.name
                }
            })
            return str
        }
    },
    created() {
        this.getRecomList(6)
        this.getNewList(10)
    }
}
</script>

<style lang="scss">
.main {
    padding-top: 106px;
}
</style>
