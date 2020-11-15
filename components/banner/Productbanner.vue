<template>
    <div class='banner product'>
        <div class="wrap flex">
            <div class="imgs">
                <img v-if="product == 'pro'" src="@/assets/img/banner/home/pro.png" />
                <img v-else-if="product == 'pos'" src="@/assets/img/banner/home/pos.png" />
                <img v-else-if="product == 'plus'" src="@/assets/img/banner/home/plus.png" />
            </div>

            <div class='text_area'>
                <h3 v-if="product == 'pro'" v-html="pro.tit"></h3>
                <h3 v-else-if="product == 'pos'" v-html="pos.tit"></h3>
                <h3 v-else-if="product == 'plus'" v-html="plus.tit"></h3>

                <h2 v-if="product == 'pro'">Win-Win Pro</h2>
                <h2 v-else-if="product == 'pos'">Win-Win pos</h2>
                <h2 v-else-if="product == 'plus'">Win-Win Pro 결제연동</h2>

                <p v-if="product == 'pro'" v-html="pro.desc">복잡하고 어려워진 농약판매 우성 소프트가 해결 해드리겠습니다.</p>
                <p v-if="product == 'pos'" v-html="pos.desc">복잡하고 어려워진 농약판매 우성 소프트가 해결 해드리겠습니다.</p>
                <p v-if="product == 'plus'" v-html="plus.desc">복잡하고 어려워진 농약판매 우성 소프트가 해결 해드리겠습니다.</p>
                
                <nuxt-link :to="'/product/'+product"  tag='div' class="btn">자세히 보기</nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['product','btn'],
    data(){
        return{
            pro:{
                tit:'작물 유통 프로그램의 기준!!',
                subTit:'Win-Win Pro',
                desc:'복잡하고 어려워진 농약판매 우성소프트가 해결해 드리겠습니다.'
            },
            pos:{
                tit:'국내 최초 농약 유통 포스 프로그램!!',
                subTit:'Win-Win 포스',
                desc:'복잡하고 어려워진 농약판매 우성소프트가 해결해 드리겠습니다.'
            },
            plus:{
                tit:'편리함에 편리함을 더하여',
                subTit:'Win-Win Pro 결제 연동',
                desc:'Win-Win Pro 편리한 기능을 그대로 사용하면서 <br>결제연동 기능과 각종 증빙관련 서명관리를 전자기록으로 더욱 편리하게!'
            }
        }
    }
}
</script>

<style lang="scss">
div.banner.product{
    height: 500px;
    background: url('../../assets/img/banner/home/pos_banner_bg.jpg');
    display: flex;
    flex-direction: column;
    justify-content:center;

    div.flex{
        display: flex;
        flex-direction: row;
        align-items:center;
        div.imgs{
            // flex: 1;
            max-width: 350px;
            img{
                width: 100%;
            }
        }
        div.text_area{
            flex: 3;
            margin-top: 20px;
            margin-left: 50px;
            h3 {
                font-size: 1.556rem;
                color: #444;
                span {
                    text-decoration: underline;
                }
            }
            h2 {
                color: #444;
                font-weight: bold;
                font-size: 2.556rem;
            }
            p {
                text-align: left;
                margin-top: 40px;
                color: IndianRed;
                font-weight: bold;
                font-size: 1.35rem;
                line-height: 2rem;
                @media (max-width:1024px) {
                    text-align: center;
                }
            }
            div.btn{
            	// display: inline-block;
                margin: 20px 0;
                color: #444;
                box-sizing: border-box;
                background-color: #4682b4;
                color: #fff;
                cursor: pointer;
                border-radius: 3px;
            }
        }

    }
}
    
</style>