Ext.define('Sencha.model.Question', {
    extend: 'Ext.data.Model',

//    requires: ['Sencha.model.Answer'],

    config: {
        fields: [
            'id', 'questionid', 'answers', 'question'
        ],

        proxy: {
            type: 'ajax',
			dataType: 'jsonp',
            //url: 'http://localhost:8080/TestKnowledge/question/index',
			url: 'contacts.json',
			
            reader : {
                type : 'json'
            }
        }
    }
});
