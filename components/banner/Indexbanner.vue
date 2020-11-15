<template>
    <div class='banner main'>
        <div class='slide_content'>
            <h4 class='w_text'>쉽고 빠른 농자재</h4>
            <h3>판매재고 프로그램의 기준!</h3>
            <h4>Walk Together, Win Together</h4>
          </div>
    </div>
</template>

<style lang="scss">
div.banner.main{
    height: 500px;
    background: url('../../assets/img/banner/home/slide1_bg.png');
        div.slide_content{
        width: 100%;
        height: 100%;
        background-color: rgba($color: #444, $alpha: 0.3);
            h3{
                text-align: center;
                font-weight: bold;;
                color: #fff;
                font-size: 3rem;
                margin: 10px 0px;
                margin-bottom: 30px;
                @media (max-width:767px) {
                    font-size: 1.75rem;
                }
            }
            h4{
                font-size: 2rem;
                text-align: center;
                color: darken($color: #00CED1, $amount: 10%);
                &.w_text{
                    color: #fff;
                    font-weight: 600;
                    padding-top: 160px;
                }
                @media (max-width:767px) {
                    font-size: 1.125rem;
                }
            }
    }
}
    
</style>