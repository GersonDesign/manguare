<template lang="pug">
  .search
    Header
    main.row
      v-container
        .row
          .col-lg-9.contenido
            v-content
              div
                v-layout.itemT
                  p
                    <strong>TÉRMINO:</strong> {{itemTermino.Nombre}}
                v-layout.itemT
                  p
                    <strong>CONCEPTO:</strong> {{itemTermino.Descrip}}
                v-layout.itemT
                  p
                    <strong>IMPACTO:</strong> {{itemTermino.Impacto}}

                div(v-show="itemTermino['Tipo Fuente'] == 'Texto'")
                  h4 Estado
                  div(v-for="items3 in itemTermino['Estado']")
                    p {{item3}}
                  //article(v-for="item3 in itemTermino['Estado']")
                    h3 {{item3['En peligro']}}
                div(v-show="itemTermino['Tipo Fuente'] == 'Grafica'")
                  p hola 2
                div(v-show="itemTermino['Tipo Fuente'] == 'Excel'")
                  h2 Traductores de Lengua
                  table(width="100%", border="1")
                    tr
                      td
                        h3.text-center #
                      td(style="padding-left:6px")
                        h3 Nombre
                      td.text-center
                        h3 Lengua
                      td.text-center
                        h3 Teléfono
                      td.text-center
                        h3 Categoria
                    tr(v-for="(items2, k) in itemTermino['Descripcion']")
                      td.text-center {{k +1 }}
                      td(style="padding-left:6px") {{items2['Nombre']}}
                      td.text-center {{items2['Lengua']}}
                      td.text-center {{items2['Teléfono 1']}}
                      td.text-center {{items2['Categoría obtenida']}}
          .col-lg-3.menu
            section
              figure
                img(src="../assets/img/img5.png")
              v-layout
                v-btn(color="primary",@click="irBusquedad", style="float:none; margin-top:30px; margin-right:auto; margin-left:auto;") Regresar

</template>
<script>
import Header from '../components/Header';
export default {
  name: 'App',
  components: {
    Header,
  },
  data: () => (
    {
      itemTermino: []

    }
  ),
  created() {
    var datos = JSON.parse(localStorage.getItem('termino'));
    this.itemTermino = datos;
    console.log(datos)

  },
  computed:{



    filterTerminos(){
      return this.Terminos.filter(post => {
        return post.Nombre.toLowerCase().includes(this.txtTerminos.toLowerCase())})
    }
  },
  methods:{
    obtenerTerminos(item){
      console.log('vamos peru',item)
    },
    irBusquedad(){
      this.$router.push({name:'about'})
    }


  }
};
</script>
