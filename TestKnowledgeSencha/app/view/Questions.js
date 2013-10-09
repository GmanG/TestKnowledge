Ext.define('Sencha.view.Questions', {
    extend: 'Ext.List',
    xtype: 'questions',

    config: {
        cls: 'x-questions',
		xtype: 'radiofiled',
        store: 'Questions',
        itemTpl: new Ext.XTemplate(
            '<div class="question" >{question}</div>',
			//'{[this.getAnswers(values.answers, values.id)]}',  // <==== Call of the method
			'{[this.getAnswers(values.answers, values.id, values.question)]}',
			{
				getAnswers: function (answers,id,question) {  //  <===== Method
					//var returnString ='<div class="x-component-outer">        <div class="x-unsized x-field-input">';
					var returnString = ' ';
					var i = 0;
					++i;
					//console.dir(values);
					Ext.each(answers, function(answer){
						
						 //returnString += '<input type="radio" name="' + answer.id + '" value="'+answer.isCorrect+'">' + answer.answer + '<br>';
						 returnString += '<label><input type="radio" name="'+question+'" value="'+answer.id+'">   ' + answer.answer + ' </label><br>';
						//returnString +=  '{xtype: \'radiofield\', name: \'product\', label: \''+answer.answer+'\',value: \''+answer.answer+'\'},';
                    	 //console.log(returnString);
					 });
					//returnString += '</div>    </div>';
					
					//console.log(returnString);
					return returnString;
				 }
			}
        )
    }
});
