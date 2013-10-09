Ext.define('Sencha.view.Questions', {
    extend: 'Ext.List',
    xtype: 'questions',

    config: {
        cls: 'x-questions',
        store: 'Questions',
        itemTpl: new Ext.XTemplate(
            '<div class="question" >{question}</div>',
			'{[this.getAnswers(values.answers, values.id, values.question)]}',
			{
				getAnswers: function (answers,id,question) {
					var returnString = ' ';
					Ext.each(answers, function(answer){
						returnString += '<label><input type="radio" name="'+question+'" value="'+answer.id+'">   ' + answer.answer + ' </label><br>';
					 });
					return returnString;
				 }
			}
        )
    }
});
