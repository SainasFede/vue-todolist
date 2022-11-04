const { createApp } = Vue;

createApp({
  data(){
    return{
      errorMsg: '',
      newString: '',
      logoImg: 'img/logo.png',
      tasks:[
        {
          attività: 'Studiare Vue',
          done: false
        },

        {
          attività: 'Ripassare Html e CSS',
          done: false
        },

        {
          attività: 'Svolgere esercizi',
          done: false
        }
      ]

    }
  },

  methods:{
    addRemDone(index){
      this.tasks[index].done = !this.tasks[index].done;
    },

    removeTask(index){
      this.errorMsg = '';
      if(this.tasks[index].done){
        this.tasks.splice(index,1);
      }else{
        this.errorMsg = 'Non puoi eliminare una task senza averla prima svolta'
        this.errorMsg = '';
      }
    },

    addTask(){
      this.errorMsg = '';
      if(this.newString.length < 5){
        this.errorMsg = 'Attenzione, la task deve avere almeno 5 caratteri!';
      }else{
        const newTask = {
          attività: this.newString,
          done: false
        }
        this.tasks.unshift(newTask);
        this.newString = '';
      }
    }
  }
}).mount('#app')