<template>
    <header>
        <div class="wrap">
          <nuxt-link to="/" tag='h1'>
               <img src="@/assets/img/logo/logo_w.png" alt="우성소프트 로고">
          </nuxt-link>
          <ul>
              <nuxt-link to="/about" tag='li'>회사 소개 </nuxt-link>
              <nuxt-link to="/product" tag='li'>제품 소개 </nuxt-link>
              <nuxt-link to="/information" tag='li'>정보 공유 </nuxt-link>
              <nuxt-link to="/board" tag='li'>고객 지원 센터 </nuxt-link>
              <nuxt-link to="/" tag='li'>팜 카페 </nuxt-link>
          </ul>
          <div class="ham"></div>
        </div>
    </header>
</template>

<style lang="scss">
header{
    background: rgba(0,0,0,.3);
    position: fixed;
    width: 100%;
    z-index: 999;
    div.wrap{
        display: flex;
        align-items:center;
        justify-content:space-between;
        padding: 30px;
        h1{
            cursor: pointer;
            flex: 1;
            img{
                width: 150px;
            }
        }
        ul{
            text-align: center;
            flex: 8;
            li{
                font-size: 1.125rem;
                display: inline;
                color: #fff;
                font-weight: bold;
                margin: 0 20px;
                cursor: pointer;
            }
        }
        div.ham{
            flex: 1;
        }
    }
}
    
</style>