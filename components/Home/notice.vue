<template>
    <div class='notice'>

        <h2 class='tit'>
            <span>공지사항</span>
            <span class='more'>
                <b>더보기 +</b>
            </span>
        </h2>

        <ul class='notices'>
            <li v-for='notice in notices' :key='notice.idx'>
                <nuxt-link tag='p' v-bind:to="'/board/zoom/'+notice.idx" v-html="notice.title" />
                <span>{{$moment(notice.date).format('YYYY-MM-DD')}}</span>
            </li>
        </ul>

    </div>
</template>

<script>
    export default {
        props:['notices']
 
    }
</script>

<style lang="scss">

div.notice{
    ul.notices{
        li{
            text-align: left;
            font-size: 1rem;
            margin: 15px 0px;
            overflow: hidden;
            cursor: pointer;
            position: relative;
                p{
                    width: 80%;
                    height: 100%;
                    display: inline-block;
                    vertical-align: middle;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    &:hover{
                        text-decoration: underline;
                    }
                }
                span{
                    position: absolute;
                    right: 0;
                    font-size: 0.875rem;
                }
            }
        }
}
    
</style>