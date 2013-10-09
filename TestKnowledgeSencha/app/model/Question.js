Ext.define('Sencha.model.Question', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            'id', 'questionid', 'answers', 'question'
        ],

        proxy: {
            type: 'ajax',
			dataType: 'jsonp',
            url: 'http://localhost:8080/TestKnowledge/question/index',			
            reader : {
                type : 'json'
            }
        }
    }
});
