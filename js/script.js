// console.log('hello')
const {createApp} = Vue;
createApp({
    data(){
        return{
            nuovoTodo:'',
            inputVuoto: false,
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
            const alertError = document.createElement('div');
            if(this.nuovoTodo.length > 0){
               this.lista.unshift({text: this.nuovoTodo, done: false}); 
               this.inputVuoto = false;
               const alertDaRimuovere = document.querySelector('.alert-danger');
               if(alertDaRimuovere) alertDaRimuovere.remove();
            }else{
               this.inputVuoto = true;
               const aggiungiAlert = document.querySelector('.add-div');
               alertError.className='alert alert-danger vz_alert';
               alertError.innerHTML = 'Add a Todo';
               aggiungiAlert.append(alertError);
            }
            this.nuovoTodo = '';
        },
        cancellaTodo(i){
            this.lista.splice(i, 1);
        },
        toggleTodo(i){
            this.lista[i].done = !this.lista[i].done;
        },
        toggleHamburger(){
            document.body.classList.toggle('vz_menu-open');
        }
    }
}).mount('#app')

// let menuHamburger = document.querySelector('.vz_hamburger');
// menuHamburger.addEventListener('click', function(){
//     document.body.classList.toggle('vz_menu-open');
// });

