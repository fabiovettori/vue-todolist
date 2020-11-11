// Vue TodoList
// 1. definire una lista di todo e stamparli in pagina in un elenco
// 2. predisporre un input testuale per aggiungere un nuovo todo: al click di un pulsante, il testo inserito nell'input viene aggiunto alla lista dei todo
// 3. al click su un item della lista, il todo viene rimosso
// BONUS: intercettare anche il tasto "ENTER" per aggiungere un nuovo todo

var app = new Vue ({
    el: '#root',
    data: {
        list: ['mangiare', 'bere', 'dormire'],
        userInput: ''
    },
    methods: {
        add: function (){
            this.list.push(this.userInput);
        },
        remove: function (i){
            // console.log('item removed');
            // console.log(this.list[i]);
            this.list[i].splice(i,1);
        }
    }

});
