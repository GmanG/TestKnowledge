Ext.define('Sencha.view.Answer', {
    extend: 'Ext.form.Panel',
    xtype: 'answer',

    config: {
        title: 'Answer',
        cls: 'x-questions',

        store: 'Questions',
        /*itemTpl: [
        '<div>{answer}</div>'
        ].join('')*/
		items:[
			 xtype: 'radiofield',
			 value: {answer}
		]
    }
});
