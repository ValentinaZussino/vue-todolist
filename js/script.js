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
                    done: true
                },
                {
                    text: 'ok',
                    done: false
                },
                {
                    text: 'buongiorno',
                    done: true
                },
                {
                    text: 'elemento',
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
        toggleTodo(i){
            this.lista[i].done = !this.lista[i].done;
            console.log('prova')
        },
    }
}).mount('#app')