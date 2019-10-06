<template lang="pug">
  .home
    Header
    main
      v-container
        section

          h2.text-center Elige a tu Guía
        v-layout.home-list
          .col-sm-3
            router-link(to="/busqueda")
              img(src="../assets/img/img1.png")
          .col-sm-3
            router-link(to="/busqueda")
              img(src="../assets/img/img2.png")
          .col-sm-3
            router-link(to="/busqueda")
              img(src="../assets/img/img3.png")
          .col-sm-3
            router-link(to="/busqueda")
              img(src="../assets/img/img4.png")

</template>

<script>
import Header from '../components/Header';

export default {
  components: {
    Header,
  },
};
</script>

<style lang="stylus">
  .home
    h2
      color #7F0B53
      font-size 3em
  .home-list
    a
      display block
      transition all 0.3s
      margin-top 20px
      &:hover

        transform scale(1.1)
        img
          box-shadow 2px 2px 5px gray

    img
      height 300px
</style>
