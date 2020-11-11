// Vue TodoList
// 1. definire una lista di todo e stamparli in pagina in un elenco
// 2. predisporre un input testuale per aggiungere un nuovo todo: al click di un pulsante, il testo inserito nell'input viene aggiunto alla lista dei todo
// 3. al click su un item della lista, il todo viene rimosso
// BONUS: intercettare anche il tasto "ENTER" per aggiungere un nuovo todo

var app = new Vue ({
    el: '#root',
    data: {
        list: ['mangiare', 'bere', 'dormire'],
        userInput: '',
        tipActive: '',
        tipMessage: '',
        inputDanger: ''
    },
    methods: {
        add: function (i){
            if (this.userInput != '' && !this.list.includes(this.userInput)) {
                this.list.push(this.userInput);
                this.userInput = '';
                this.tipActive = '';
                this.inputDanger = '';
            } else if (this.userInput == ''){
                this.tipActive = 'active';
                this.tipMessage = 'character not allowed';
            } else {
                this.tipActive = 'active';
                this.tipMessage = 'this todo already exist',
                this.inputDanger = 'active';
                this.userInput = '';

            };
        },
        remove: function (i){
            // console.log('item removed');
            // console.log(this.list[i]);
            this.list.splice(i,1);
        }
    }

});
