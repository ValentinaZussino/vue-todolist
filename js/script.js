console.log('hello')
const {createApp} = Vue;
createApp({
    data(){
        return{
            activeIndex: 0,
            lista:[
                {
                    text: 'oggetto',
                    done: true
                },
            ]
        }
    }
}).mount('#app')