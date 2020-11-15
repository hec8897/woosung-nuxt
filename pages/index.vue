<template>
  <div class="container">
    <AppHeader />
    <Banner />
    <section class='wrap flex'>
      <notice class='flex-item' :notices = "notices"/>
      <material class='flex-item' :meterials = "meterial"/>
    </section>

    <section class='wrap'>
        <FarmNews />

    </section>

  </div>
</template>

<script>
export default {
    async asyncData ({ $axios,params }) {
        const notice = await $axios.get(`api/support`)
        const material = await $axios.get(`api/meterial`)

        return { 
          notices : notice.data.result, 
          meterial: material.data.result 
        }
    }
}
</script>
<style lang="scss">
section.flex{
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   padding: 50px 0px;
   .flex-item{
     flex: 1;
     max-width: 48%;
   }
}
</style>

