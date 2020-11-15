<template>
    <div class='slider'>
      <carousel :perPage='1' :loop='true' :autoplay='true' :autoplayTimeout="3500">
        <slide>
          <Indexbanner />
        </slide>
        <slide>
          <Productbanner product='pro' btn='true'/>
        </slide>
        <slide>
           <Productbanner product='pos'/>
        </slide>
        <slide>
          <Productbanner product='plus'/>
        </slide>
      </carousel>
    </div>
</template>


<style lang="scss">

      .VueCarousel-pagination {
        position: relative;
        top: -100px;
        @media (max-width: 1024px) {
          display: none;
          
        }
      }
  
</style>