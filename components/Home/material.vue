<template>
    <div class="farm_item">
        <h2 class='tit'>
            <span>농자재 정보</span>
            <span class='more'>
                <b>더보기 +</b>
            </span>
        </h2>

        <ul class="flex">
            <nuxt-link tag='li' v-for='item in items' :key='item.idx' v-bind:to="'information/info4/zoom/'+item.idx">
                <div class='inner'>
                    <img v-bind:src="'http://www.wssw.kr/'+item.img" :alt='item.name'>
                </div>
                <div class='text'>
                    <p>{{item.company}}</p>
                    <h4>{{item.name}}</h4>
                </div>
            </nuxt-link>
        </ul>
        
    </div>
</template>

<script>
export default {
    props:['meterials'],
    computed:{
        items(){
            let _List = this.meterials.filter((x)=>{
                return x.active == 1
            })
            return _List.slice(0,3)
        }
    },

    mounted(){
        console.log(this.items)
    }
}
</script>

<style lang="scss">
div.farm_item{
    ul{
        justify-content: space-between;
            li{
                width: 32%;
                text-align: center;
                margin-top: 10px;
                border: 1px solid #d0d0d0;
                cursor: pointer;
                img{
                    display: inline;
                    width: auto;
                    height: 100px;
                    padding: 10px 0px;
                }
                div.text{
                    border-top: 1px solid #d0d0d0;
                    padding: 10px 0px;
                    background-color: rgba(0, 0, 0, .03);
                    h4{
                        font-size: 0.875rem;
                        font-weight: bold;
                    }
                    p{
                        margin-bottom: 3px;
                        font-size: 0.75rem;
                    }
                }
            }
        }
}
    
</style>