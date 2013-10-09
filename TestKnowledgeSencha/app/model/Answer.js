Ext.define('Sencha.model.Answer', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
             'id', 'answers', 'question'
        ],

        belongsTo: "Sencha.model.Question"
    }
});
