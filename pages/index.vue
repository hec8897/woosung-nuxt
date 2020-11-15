<template>
  <div class="container">
    <AppHeader />
    <Banner />
    <section class='wrap flex'>
      <notice class='flex-item' :notices = "notices"/>
      <material class='flex-item'/>
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
  },
  //     asyncData ({ $axios,params }) {
  //   return $axios.get(`api/support`)
  //     .then((res) => {
  //       console.log(res)
  //     })
  // }
}
</script>
<style lang="scss">
section.flex{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.flex-item{
  flex: 1;
  margin: 0px 20px;
}
</style>

