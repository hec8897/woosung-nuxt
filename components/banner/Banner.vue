<template>
    <div class='slider'>
      <carousel :perPage='1' :loop='true' :autoplay='true' :autoplayTimeout="3500">
        <slide>
            <Indexbanner />
        </slide>
        <slide>
          <!-- <ProBanner btn='true' product='pro' /> -->
          123
        </slide>
        <slide>
          <!-- <ProBanner btn='true' product='pos' /> -->
          123
        </slide>
        <slide>
            123
          <!-- <ProBanner btn='true' product='plus' /> -->
        </slide>

      </carousel>
    </div>
</template>

<script>
import { carousel,slide } from 'vue-carousel';


export default {
    
}
</script>