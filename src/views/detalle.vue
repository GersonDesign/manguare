<template lang="pug">
  .search
    Header
    main.row
      v-container
        .row
          .col-lg-9.contenido.ht
            v-content
              div
                v-layout
                  h2 TÉRMINO: <span style="font-weight:normal!important;">{{itemTermino.Nombre}}</span>
                v-layout(style="margin-top:10px")
                  h2 CONCEPTO:
                p(style="font-size:18px!important;") {{itemTermino.Descrip}}
                v-layout.itemT
                  h2 IMPACTO: <span v-html="itemTermino.imgImpacto"></span>
                p(style="font-size:18px!important;") {{itemTermino.Impacto}}

                div(v-show="itemTermino['Tipo Fuente'] == 'Texto'")
                  h3 Estado:
                  .listAnimales
                    section
                      h4 En Peligro
                      ul
                        li(v-for="item3 in enPeligro") {{item3.Nombre}}
                    section
                      h4 En Peligro Critico
                      ul
                        li(v-for="item4 in enPeligroCritico") {{item4.Nombre}}
                    section
                      h4 Extinto
                      ul
                        li(v-for="item5 in extinto") {{item5.Nombre}}
                    section
                      h4 Extinto en estado salvaje
                      ul
                        li(v-for="item6 in extintoSalvaje") {{item6.Nombre}}
                    section
                      h4 Vulnerable
                      ul
                        li(v-for="item7 in vulnerable") {{item7.Nombre}}
                div(v-show="itemTermino['Tipo Fuente'] == 'Grafica'")
                  table(width="100%", border="1")
                    tr
                      td.text-center
                        h3 2011
                      td.text-center
                        h3 2011
                      td.text-center
                        h3 2012
                      td.text-center
                        h3 2013
                      td.text-center
                        h3 2014
                      td.text-center
                        h3 2015
                      td.text-center
                        h3 2016
                      td.text-center
                        h3 2017
                      td.text-center
                        h3 2018
                    tr
                      td.text-center(v-for="(items10 in tiempo") {{items10['time']}}

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
      tiempo: [
        {
          "time": "3,985.04"
        },
        {
          "time": "1,622.32"
        },
        {
          "time": "2,278.35"
        },
        {
          "time": "1,365.86"
        },
        {
          "time": "5,468.79"
        },
        {
          "time": "1,336.57"
        },
        {
          "time": "37,012.88"
        },
        {
          "time": "4,097.74"
        },
        {
          "time": "713.8"
        }

      ],
      itemTermino: [],
      enPeligro: [
        {
          "Nombre": "Gato andino (Leopardus jacobita)",
          "Foto":" "
        },
        {
          "Nombre": "Jaguar (Panthera onca)",
          "Foto":" "
        },
        {
          "Nombre": "Lemur de collar blanco (Eulemur cinereiceps)",
          "Foto":" "
        },
        {
          "Nombre": "Nutria gigante (Pteronura brasiliensis)",
          "Foto":" "
        },
        {
          "Nombre": "Tapir (Tapirus sp.)",
          "Foto":" "
        }

      ]
      ,
      enPeligroCritico: [
        {
          "Nombre": "Chinchilla de cola larga (Chinchilla lanigera)",
          "Foto":" "
        },
        {
          "Nombre": "Monos choro de cola amarilla (Oreonax flavicauda)",
          "Foto":" "
        },
        {
          "Nombre": "Rana arlequín (Atelopus varius )",
          "Foto":" "
        },
        {
          "Nombre": "Sapo de Perú o Peru stubfoot toad ( Atelopus peruensis)",
          "Foto":" "
        }

      ],

      extinto: [
        {
          "Nombre": "Loro del paraíso (Psephotus pulcherrimus)",
          "Foto":" "
        },
        {
          "Nombre": "Sapo Dorado de Monteverde(Bufo periglenes)",
          "Foto":" "
        }
      ],
      extintoSalvaje: [
        {
          "Nombre": "Rana Darwin de Chile (Rhinoderma rufum)",
          "Foto":" "
        }
      ],
      vulnerable: [
        {
          "Nombre": "Armadillo gigante o tatu carreta (Priodontes maximus)",
          "Foto": ""
        },{
          "Nombre": "Cocodrilo americano (Crocodylus acutus)",
          "Foto": ""
        }
        ,{
          "Nombre": "Delfín rosado (Inia geoffrensis)",
          "Foto": ""
        },
        {
          "Nombre": "Flamenco andino (Phoenicopterus andinus)",
          "Foto": ""
        },
        {
          "Nombre": "Guacamayo verde (Ara militaris)",
          "Foto": ""
        },
        {
          "Nombre": "Oso de anteojos (Tremarctos ornatus)",
          "Foto": ""
        }
      ]

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
<style lang="stylus">
  .ht
    h2
      font-size 30px!important
    h3
      font-size 28px!important
    h4
      font-size 25px!important
  .listAnimales
    margin-left 10px
    section
      margin-top 10px
</style>
