<template lang="pug">
  .search
    Header
    main.row(style="margin-top:-7px!important")
      .col-lg-3.lateral(style="padding:40px 0;")
        section
          h2(style="font-weight:bold;padding-right:40px;padding-left:40px;") TODOS LOS TÉRMINOS
        section.listTerminos
          article(v-for="items in Terminos")
            h4  {{items["Nombre"]}}
      .col-lg-6.contenido(style="margin-top:30px;padding:0 20px")
        v-content
          h3 Buscar termino
          v-autocomplete(v-model="txtTerminos", :items="Terminos", :filter="activeFilter", item-text="Nombre", @change="obtenerTerminos")

          section(v-show="mostrar")
            article(v-for="item in filterTerminos")
              v-layout.itemT
                p
                  <strong>TÉRMINO:</strong> {{item.Nombre}}
              v-layout.itemT
                p
                  <strong>CONCEPTO:</strong>
              p(style="font-size:18px!important;") {{item.Descrip}}
              v-layout.itemT
                p
                  <strong>IMPACTO:</strong>  <span v-html="item.imgImpacto"></span>
              p(style="font-size:18px!important;") {{item.Impacto}}
              v-btn(color="primary",@click="verDetalle(item.Codigo, item)") Ver los detalles
      .col-lg-3.lateral(style="padding:30px;")
        section
          figure
            img(src="../assets/img/img5.png")


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
      mostrar: false,
      model: null,
      txtTerminos: '',
      Terminos: [
        {
        "Codigo": 1,
        "Nombre": "Animales en Peligro",
        "Descrip": "Especies de animales que pueden desaparecer, por la baja cantidad de individuos que se encuentran en cierta area natural. Esto se ocasiona por  la  eliminacion de su lugar de vida  y de su alimento.",
        "Impacto": "Perdida de los otros tipos de animales o permitir que otra especie aumente de indiviudos de manera rapida.",
        "imgImpacto": "<span style='color:red;'> NEGATIVO</span>",
        "Tipo Fuente": "Texto"

        },
        {
          "Codigo": 2,
          "Nombre": "Consulta Previa",
          "Descrip": "Derecho de lo pueblos indigenas que permite participar y conversar con el gobierno nacional en la toma de decisiones, con el apoyo de traductores;  antes de aprobar normas legales y proyectos que beneficien o perjudiquen  a su comunidad.",
          "Impacto": "Facilita la comunicación entre el gobierno nacional y los pueblos indigenas; para reducir  problemas sociales y ambientales.",
          "imgImpacto": "<span style='color:#3DB39E;'> POSITIVO</span>",
          "Tipo Fuente": "Excel",
          "Descripcion": [
            {
              "Nombre": "Antonio Fachin Tapayuri",
              "Región de residencia": "Loreto",
              "Lengua": "Achuar",
              "Categoría obtenida": "Intérprete y Traductor",
              "Teléfono 1": 965782828,
              "Teléfono 2": 954971005,
              "Email": "afachin.1971_01@hotmail.com"
            },
            {
              "Nombre": "Carlos Sandi Maynas",
              "Región de residencia": "Loreto",
              "Lengua": "Achuar",
              "Categoría obtenida": "Intérprete y Traductor",
              "Teléfono 1": 965623854,
              "Teléfono 2": "065-816735",
              "Email": "ralsoro_2012@yahoo.com.pe"
            },
            {
              "Nombre": "Eduardo Montero García",
              "Región de residencia": "Loreto",
              "Lengua": "Achuar",
              "Categoría obtenida": "Intérprete y Traductor",
              "Teléfono 1": 65251531,
              "Teléfono 2": 950016846,
              "Email": "edu_edmoga_26@hotmail.com"
            },
            {
              "Nombre": "Mateo Peas Ayui",
              "Región de residencia": "Loreto",
              "Lengua": "Achuar",
              "Categoría obtenida": "Intérprete y Traductor",
              "Teléfono 1": 987905554,
              "Teléfono 2": "",
              "Email": "peas_ayui@hotmail.com"
            },
            {
              "Nombre": "Alexander Churay Roque",
              "Región de residencia": "Loreto",
              "Lengua": "Bora",
              "Categoría obtenida": "Intérprete y Traductor",
              "Teléfono 1": "065-533526",
              "Teléfono 2": "",
              "Email": "churay0508@gmail.com"
            },
            {
              "Nombre": "Gerardo del Aguila Miveco",
              "Región de residencia": "Loreto",
              "Lengua": "Bora",
              "Categoría obtenida": "Intérprete y Traductor",
              "Teléfono 1": 987290568,
              "Teléfono 2": 65261146,
              "Email": "waajaku@hotmail.com"
            },
            {
              "Nombre": "José Saldaña Valles",
              "Región de residencia": "Loreto",
              "Lengua": "Bora",
              "Categoría obtenida": "Intérprete y Traductor",
              "Teléfono 1": 987426526,
              "Teléfono 2": "",
              "Email": ""
            },
            {
              "Nombre": "Abel Najar Cariajano",
              "Región de residencia": "Loreto",
              "Lengua": "Quechua",
              "Categoría obtenida": "Intérprete y Traductor",
              "Teléfono 1": "065-812086",
              "Teléfono 2": "065-813956",
              "Email": "abelnajar@hotmail.com"
            },
            {
              "Nombre": "David Chávez Chino",
              "Región de residencia": "Loreto",
              "Lengua": "Quechua",
              "Categoría obtenida": "Intérprete y Traductor",
              "Teléfono 1": 984752095,
              "Teléfono 2": "",
              "Email": "dachecho@hotmail.com, dachch_0575@yahoo.com"
            },
            {
              "Nombre": "Pedro Villacorta Pinchi",
              "Región de residencia": "Loreto",
              "Lengua": "Quechua",
              "Categoría obtenida": "Intérprete y Traductor",
              "Teléfono 1": 965730470,
              "Teléfono 2": "",
              "Email": "p_villacorta@hotmail.com"
            },
            {
              "Nombre": "Neyla Mozombite Sandoval",
              "Región de residencia": "Loreto",
              "Lengua": "Quechua",
              "Categoría obtenida": "Intérprete y Traductor",
              "Teléfono 1": 953639402,
              "Teléfono 2": "065-26750",
              "Email": "neylamosa@hotmail.com"
            },
            {
              "Nombre": "Arturo Tapayuri Murayari",
              "Región de residencia": "Loreto",
              "Lengua": "Kukama-Kukamiria",
              "Categoría obtenida": "Intérprete",
              "Teléfono 1": "065-812069",
              "Teléfono 2": "065-353021",
              "Email": "Artur_tapayuri@hotmail.com"
            },
            {
              "Nombre": "Ulderico Yahuarcani Soto",
              "Región de residencia": "Loreto",
              "Lengua": "Kukama-Kukamiria",
              "Categoría obtenida": "Intérprete",
              "Teléfono 1": "042- 633833",
              "Teléfono 2": 953631458,
              "Email": "ulderico_50@hotmail.com"
            },
            {
              "Nombre": "Elias Aquituari Chota",
              "Región de residencia": "Loreto",
              "Lengua": "Kukama-Kukamiria",
              "Categoría obtenida": "Intérprete y Traductor",
              "Teléfono 1": 965691192,
              "Teléfono 2": "",
              "Email": ""
            },
            {
              "Nombre": "José Murayari Saquiray",
              "Región de residencia": "Loreto",
              "Lengua": "Kukama-Kukamiria",
              "Categoría obtenida": "Intérprete",
              "Teléfono 1": "065-411040",
              "Teléfono 2": "",
              "Email": ""
            },
            {
              "Nombre": "Segundo Arquimedes Curitima Manihuari",
              "Región de residencia": "Loreto",
              "Lengua": "Kukama-Kukamiria",
              "Categoría obtenida": "Intérprete y Traductor",
              "Teléfono 1": 980601463,
              "Teléfono 2": "065-504226",
              "Email": "eran-kukama@hotmail.com"
            },
            {
              "Nombre": "Victor Canayo Pacaya",
              "Región de residencia": "Loreto",
              "Lengua": "Kukama-Kukamiria",
              "Categoría obtenida": "Intérprete",
              "Teléfono 1": 963545677,
              "Teléfono 2": "",
              "Email": ""
            },
            {
              "Nombre": "Wilson Manihuari Pereira",
              "Región de residencia": "Loreto",
              "Lengua": "Kukama-Kukamiria",
              "Categoría obtenida": "Intérprete",
              "Teléfono 1": 998459687,
              "Teléfono 2": "065-260320",
              "Email": "wilson-manihuari-pereyra@hotmail.com"
            },
            {
              "Nombre": "Cesar Rios Gonzales",
              "Región de residencia": "Loreto",
              "Lengua": "Maijuna",
              "Categoría obtenida": "Intérprete",
              "Teléfono 1": 944487827,
              "Teléfono 2": "065-638203",
              "Email": "cesar.interprete@hotmail.com"
            },
            {
              "Nombre": "Ederson Ríos Ushiñahua",
              "Región de residencia": "Loreto",
              "Lengua": "Maijuna",
              "Categoría obtenida": "Intérprete y Traductor",
              "Teléfono 1": 957647072,
              "Teléfono 2": "",
              "Email": "erumaijuna@hotmail.com"
            },
            {
              "Nombre": "Romero Ríos Ushiñahua",
              "Región de residencia": "Loreto",
              "Lengua": "Maijuna",
              "Categoría obtenida": "Intérprete",
              "Teléfono 1": 961723361,
              "Teléfono 2": "065-813897",
              "Email": "r.riosushinahua@gmail.com, romero.traductor@gmail.com"
            },
            {
              "Nombre": "Angel Uaqui Dunu Maya",
              "Región de residencia": "Loreto",
              "Lengua": "Matsés",
              "Categoría obtenida": "Intérprete",
              "Teléfono 1": 965846427,
              "Teléfono 2": "065-813456",
              "Email": "yaquerana@outlook.com rwakichta@hotmail.com"
            },
            {
              "Nombre": "Felicita Lea Tello Flores",
              "Región de residencia": "Loreto",
              "Lengua": "Murui-muinani",
              "Categoría obtenida": "Intérprete y Traductor",
              "Teléfono 1": "065-798718",
              "Teléfono 2": "",
              "Email": "ttelloflores2013@gmail.com"
            },
            {
              "Nombre": "Francisco Díaz Vega",
              "Región de residencia": "Loreto",
              "Lengua": "Murui-muinani",
              "Categoría obtenida": "Intérprete y Traductor",
              "Teléfono 1": "065-635011",
              "Teléfono 2": 998703503,
              "Email": "edrao_diaz12@yahoo.com"
            },
            {
              "Nombre": "José López Rodriguez",
              "Región de residencia": "Loreto",
              "Lengua": "Murui-muinani",
              "Categoría obtenida": "Intérprete y Traductor",
              "Teléfono 1": 949804260,
              "Teléfono 2": "",
              "Email": "lorrojo28@gmail.com"
            },
            {
              "Nombre": "Mauricio Rubio Rodríguez",
              "Región de residencia": "Loreto",
              "Lengua": "Murui-muinani",
              "Categoría obtenida": "Intérprete y Traductor",
              "Teléfono 1": "065-531755",
              "Teléfono 2": "",
              "Email": ""
            },
            {
              "Nombre": "Ruben Valles López",
              "Región de residencia": "Loreto",
              "Lengua": "Murui-muinani",
              "Categoría obtenida": "Intérprete y Traductor",
              "Teléfono 1": 965828042,
              "Teléfono 2": 980448041,
              "Email": "ruvalo@hotmail.com"
            },
            {
              "Nombre": "Jorge Chota Macanilla",
              "Región de residencia": "Loreto",
              "Lengua": "Secoya",
              "Categoría obtenida": "Intérprete y Traductor",
              "Teléfono 1": 965898036,
              "Teléfono 2": "",
              "Email": "jorge.chota.m@hotmail.com"
            },
            {
              "Nombre": "Fermín Payaguaje Piaguaje",
              "Región de residencia": "Loreto",
              "Lengua": "Secoya",
              "Categoría obtenida": "Intérprete y Traductor",
              "Teléfono 1": 975387525,
              "Teléfono 2": "065-813843",
              "Email": "fermin.payaguaje@hotmail.com"
            },
            {
              "Nombre": "Wilder Napo Huayunga",
              "Región de residencia": "Loreto",
              "Lengua": "Shawi",
              "Categoría obtenida": "Intérprete y Traductor",
              "Teléfono 1": 942058673,
              "Teléfono 2": "",
              "Email": "wilnapohua@hotmail.com"
            },
            {
              "Nombre": "Miller Vidal López Santillán",
              "Región de residencia": "Loreto",
              "Lengua": "Shawi",
              "Categoría obtenida": "Intérprete y Traductor",
              "Teléfono 1": "#974995568",
              "Teléfono 2": "",
              "Email": "resistencia-indigena2008@hotmail.com"
            },
            {
              "Nombre": "Rafael Chanchari Pizuri",
              "Región de residencia": "Loreto",
              "Lengua": "Shawi",
              "Categoría obtenida": "Intérprete y Traductor",
              "Teléfono 1": 965973691,
              "Teléfono 2": 940529380,
              "Email": "shawi_1962@yahoo.es"
            },
            {
              "Nombre": "Ling Cándido Serra",
              "Región de residencia": "Loreto",
              "Lengua": "Tikuna",
              "Categoría obtenida": "Intérprete",
              "Teléfono 1": "065-778092",
              "Teléfono 2": "",
              "Email": "ling_candido@outlook.com"
            },
            {
              "Nombre": "Werner Gustavo Pashia Moreno",
              "Región de residencia": "Loreto",
              "Lengua": "Tikuna",
              "Categoría obtenida": "Intérprete",
              "Teléfono 1": "065-764192",
              "Teléfono 2": "",
              "Email": "wpashiam@hotmail.com"
            },
            {
              "Nombre": "Samuel Sumpa Mayan",
              "Región de residencia": "Loreto",
              "Lengua": "Wampis",
              "Categoría obtenida": "Intérprete y Traductor",
              "Teléfono 1": 979766175,
              "Teléfono 2": "",
              "Email": "san_lorenzo_2012_datem@hotmail.com"
            },
            {
              "Nombre": "David Cahuachi Rodriguez",
              "Región de residencia": "Loreto",
              "Lengua": "Yagua",
              "Categoría obtenida": "Intérprete",
              "Teléfono 1": 976866349,
              "Teléfono 2": "065-780645",
              "Email": "davidcahuachi@hotmail.com"
            },
            {
              "Nombre": "José Yépez Santos",
              "Región de residencia": "Loreto",
              "Lengua": "Yagua",
              "Categoría obtenida": "Intérprete",
              "Teléfono 1": 799211,
              "Teléfono 2": "065-780645",
              "Email": "joseyepez@hotmail.com"
            },
            {
              "Nombre": "Gerlin Ramírez Santana",
              "Región de residencia": "Loreto",
              "Lengua": "Yagua",
              "Categoría obtenida": "Intérprete",
              "Teléfono 1": 956025141,
              "Teléfono 2": "065-813717",
              "Email": "gerlinramirez_1978@hotmail.com"
            },
            {
              "Nombre": "Richard Villacorta Ahuanari",
              "Región de residencia": "Loreto",
              "Lengua": "Yagua",
              "Categoría obtenida": "Intérprete",
              "Teléfono 1": 989984720,
              "Teléfono 2": "",
              "Email": "rvillacorta_1985@hotmail.com"
            },
            {
              "Nombre": "Manuel Ramírez Santana",
              "Región de residencia": "Loreto",
              "Lengua": "Yagua",
              "Categoría obtenida": "Intérprete y Traductor",
              "Teléfono 1": 950460403,
              "Teléfono 2": "",
              "Email": "santana_yagua@hotmail.com"
            },
            {
              "Nombre": "Leandro Jota Cahuachi",
              "Región de residencia": "Loreto",
              "Lengua": "Yagua",
              "Categoría obtenida": "Intérprete y Traductor",
              "Teléfono 1": 948449781,
              "Teléfono 2": "065-267682",
              "Email": ""
            },
            {
              "Nombre": "Julián Sachivo Ríos",
              "Región de residencia": "Loreto",
              "Lengua": "Capanahua",
              "Categoría obtenida": "Intérprete",
              "Teléfono 1": "065-813780",
              "Teléfono 2": "",
              "Email": ""
            },
            {
              "Nombre": "Hilter Güimack Panduro",
              "Región de residencia": "Loreto",
              "Lengua": "Ikitu",
              "Categoría obtenida": "Intérprete y Traductor",
              "Teléfono 1": "065-263635",
              "Teléfono 2": 980086781,
              "Email": "güimack22@gmail.com"
            },
            {
              "Nombre": "Marcelo Sinchija Inuma",
              "Región de residencia": "Loreto",
              "Lengua": "Ikitu",
              "Categoría obtenida": "Intérprete y Traductor",
              "Teléfono 1": "065-812007",
              "Teléfono 2": "",
              "Email": ""
            },
            {
              "Nombre": "Fidel Lomas Chota",
              "Región de residencia": "Loreto",
              "Lengua": "Shiwilu",
              "Categoría obtenida": "Intérprete",
              "Teléfono 1": 984828149,
              "Teléfono 2": "",
              "Email": "locho_di@hotmail.com"
            },
            {
              "Nombre": "Diomer Lopez Chota",
              "Región de residencia": "Loreto",
              "Lengua": "Shiwilu",
              "Categoría obtenida": "Intérprete y Traductor",
              "Teléfono 1": 965018849,
              "Teléfono 2": 958844973,
              "Email": "gboranos@hotmail.com, germanbsanchez@gmail.com"
            },
            {
              "Nombre": "Germán Boraños Sánchez",
              "Región de residencia": "Loreto",
              "Lengua": "Ocaina",
              "Categoría obtenida": "Intérprete y Traductor",
              "Teléfono 1": 940999029,
              "Teléfono 2": "065-638087",
              "Email": "enocmogoma@hotmail.es"
            },
            {
              "Nombre": "Guillermo Mogoma Suárez",
              "Región de residencia": "Loreto",
              "Lengua": "Ocaina",
              "Categoría obtenida": "Intérprete",
              "Teléfono 1": "065-632970",
              "Teléfono 2": "",
              "Email": ""
            },
            {
              "Nombre": "Isabel Quispe Ramos",
              "Región de residencia": "Loreto",
              "Lengua": "Quechua",
              "Categoría obtenida": "",
              "Teléfono 1": "",
              "Teléfono 2": "",
              "Email": ""
            },
            {
              "Nombre": "Carlos Macusi Inuma",
              "Región de residencia": "Loreto",
              "Lengua": "Urarina",
              "Categoría obtenida": "",
              "Teléfono 1": "",
              "Teléfono 2": "",
              "Email": ""
            },
            {
              "Nombre": "Demetrio Macusi Vela",
              "Región de residencia": "Loreto",
              "Lengua": "Urarina",
              "Categoría obtenida": "",
              "Teléfono 1": "",
              "Teléfono 2": "",
              "Email": ""
            }
          ]
        },
        {
          "Codigo": 3,
          "Nombre": "Deforestación",
          "Descrip": "Eliminacion de un grupo de arboles o bosques para realizar diferentes actividades en el suelo despejado, por ejemplo: ganaderia, agricultura",

          "Impacto": "Perdida de especies de animales y plantas, bajas reservas de agua, desgaste del suelo.",
          "imgImpacto": "<span style='color:red;'> NEGATIVO</span>",
          "Tipo Fuente": "Grafica",
          
        },

        {
          "Codigo":4,
          "Nombre": "Tala Ilegal",
          "Descrip": "Corte de arboles que se realiza muy cerca de las raices, que no tiene los permisos dado por el gobierno nacional.",
          "Impacto": "Perdida de los beneficios que nos da los arboles: oxigeno, perdida de paisajes, pérdida de especies de animales, etc. ",
          "imgImpacto": "<span style='color:red;'> NEGATIVO</span>",
          "Tipo Fuente": "Otro",

        }
      ],
      filters: [
          {
            value: 0,
            fn: (item, queryText, itemText) => item.indexOf(queryText) > -1,
            text: 'Exact Match',
          },
          {
            value: 1,
            fn: (item, queryText, itemText) => queryText.length > 2 && item.toLowerCase().indexOf(queryText) > -1,
            text: 'Search Length > 2 & Loose Match',
          },
        ],

    }
  ),
  computed:{
      activeFilter () {
        if (this.model == null) return undefined
        return this.filters[this.model].fn
      },

    filterTerminos(){
      return this.Terminos.filter(post => {
        return post.Nombre.toLowerCase().includes(this.txtTerminos.toLowerCase())})
    }
  },
  methods:{
    obtenerTerminos(item){
      this.mostrar = true
      console.log('vamos peru',item)
    },
    verDetalle(id,item){
      localStorage.setItem('termino', JSON.stringify(item));
      this.$router.push({name: "detalle"});
    }

  }
};
</script>
<style lang="stylus">
  .lateral
    background #F2F2F2
  .search
    h2
    h3
    h4
      color #4D4D4D
    h2
      font-size 2.5em
    h4
      font-size 1.2em
  .itemT
    p
      font-size 1.8em
  .listTerminos
    margin-top 40px
    article
      border-top 2px solid #B3B3B3
      padding 10px 40px
      &:last-child
        border-bottom 2px solid #B3B3B3


</style>
