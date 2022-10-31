console.log('hello')
const {createApp} = Vue;
createApp({
    data(){
        return{
            nuovoTodo:'',
            activeIndex: 0,
            lista:[
                {
                    text: 'oggetto',
                    done: false
                },
                {
                    text: 'ciao',
                    done: false
                },
                {
                    text: 'ok',
                    done: false
                },
            ]
        }
    },
    methods: {
        aggiungiTodo(){
            this.lista.unshift({text: this.nuovoTodo, done: false});
            this.nuovoTodo = '';
        },
        cancellaTodo(i){
            this.lista.splice(i, 1);
        },
    }
}).mount('#app')