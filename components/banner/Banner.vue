<template>
    <div class='slider'>
      <carousel :perPage='1' :loop='true' :autoplay='true' :autoplayTimeout="3500">
        <slide>
          <Indexbanner />
        </slide>
        <slide>
          <Productbanner product='pro'/>
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
