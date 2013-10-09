Ext.define("Sencha.view.Main", {
    extend: 'Ext.navigation.View',
    requires: [  'Sencha.view.Questions'],

    config: {
        tabBarPosition: 'top',
		id:		'questionPanel',
        items: [
           {
                title: 'Questions',
                xtype: 'questions'
            },
			{
            xtype: 'button',
            text: 'Get result',
			docked: 'bottom',
			id: 'getResult',
			handler: function () {
				var result = '<h1>The result to the questions was:</h1>';
				var answer = Ext.query('input');
				for(var i=0;i<answer.length;i++){
					if(answer[i].checked){
						Ext.Ajax.request({
							url: 'http://localhost:8080/TestKnowledge/answer/index',
							method: 'POST',
							params: {
								id: answer[i].value
								},
								success: function (response, opts) {
									var isCorrect = response.responseText;
									if(isCorrect == 'true'){
										result += '<div class ="answerResult" style="color:green">correct</div> ';
									} if(isCorrect == 'false'){
										result += '<div class ="answerResult" style="color:red">incorrect</div> ';
									}
									var questionPanel = Ext.getCmp('questionPanel');
									questionPanel.push({										
										title: 'Result',
										html: result
										});
									}
						});
					}
				}
			}
			}
        ]
    }
});
