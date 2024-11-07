
const app = Vue.createApp({
    template:`
    <h2>Frameworkler</h2>
    <ul>
      <li v-for="f in frameworks" class="list" :class="{selected:f.selected}" @click="selectTag(f)">
      {{f.name}}
      </li>
    </ul>

    <h3>Seçilen Frameworkler</h3>
    <ul>
      <li v-for="s in selectTags">
      {{s.name}}
      </li>
    </ul>

    
    
    `,
    data() {
      return {
        frameworks: [
          {name:"Vue",selected:true},
          {name:"React",selected:false},
          {name:"Svelte",selected:false},
          {name:"Angular",selected:false}
        ]
      }
    },
    methods: {
      selectTag(f) {
        if(f.selected=!f.selected){
            console.log("seçilen framework : " + f.name);
        }else{
            console.log("seçimi geri alınan framework : " + f.name)
        } 
      }
    },
    computed:{
      selectTags() {
        // console.log("değişik oldu");
        return selecteds=this.frameworks.filter(i=>i.selected)
      }
    }
  });
    
  app.mount('#app')