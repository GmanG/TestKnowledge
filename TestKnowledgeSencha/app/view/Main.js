Ext.define("Sencha.view.Main", {
    extend: 'Ext.navigation.View',
    requires: [  'Sencha.view.Questions'],

    config: {
        tabBarPosition: 'top',
		id: 'mmmss',
		
        items: [
           {
                title: 'Questions',
               /* iconCls: 'home',*/

                xtype: 'questions'
            },
			{
            xtype: 'button',
            text: 'Get result',
			docked: 'bottom',
			id: 'myBtn',
			handler: function () {
				//Ext.Msg.alert('You clicked the button');
				var text = Ext.create('Ext.Panel', {
					html: 'text'
				 });
				 var pan = new Ext.Panel({
					//fullscreen: true;
					html: 'info'
				 });
				 Ext.Viewport.add(text);
			//	 this.setActiveItem(pan);
				// Ext.getCmp('x-questions').add('Hello');
				 
				var resul = '';
				var qq = Ext.query('.question');
				//console.log(qq[1]);
			//	for(var j=0; j < qq.length; j++){
					//console.log('fro loop'+j);
					var tmp = '<h1>The result to the questions was:</h1>';
					resul += '<h1>The Answers was:</h1>' ;
					var answer = Ext.query('input');
					//console.log('answer   : '+answer.length);
					for(var i=0;i<answer.length;i++){
						//console.log(answer.length+'OOOOOOOO');
						//console.log();
						//console.log(answer[i]);
						//if(answer[i].checked && answer[i].value == 'true'){
						if(answer[i].checked){
							//console.log('yes '+answer[i].name);
						//	console.log(' sss '+question[0]);
							//tmp += answer[i].name+'{'+j+'} ';
						//	tmp += '<div style="color:green">'+answer[i].text+'</div> ';
							var some = answer[i].name;
							Ext.Ajax.request({
								url: 'http://localhost:8080/TestKnowledge/answer/index',
								method: 'POST',
								params: {
									id: answer[i].value
									//id: 11
									},
									success: function (response, opts) {
									//for(var h = 0; h<response.responseText.len )
										var is = response.responseText;
										if(is == 'true'){
											tmp += '<div class ="answerResult" style="color:green">correct</div> ';
											console.log('correct!!!'+some);
										}if(is == 'false'){
											tmp += '<div class ="answerResult" style="color:red">incorrect</div> ';
											console.log('false!!'+some);
										}
										console.log(tmp);
										
										var vv = Ext.getCmp('mmmss');
										var ar = Ext.query('answerResult');
										console.log(ar.length);
									vv.push({
										//var navigationBar = this.getNavigationBar();
										//navigationBar.query('button')[0].hide();
										
										title: 'Result',
										html: tmp,
										
										launch: function(){
											var navigationBar = this.getNavigationBar();
											navigationBar.query('button')[0].hide();
										}
										});
									}
							});
						
						}/*
						if(answer[i].checked && answer[i].value == 'false'){
							//console.log('no');
							tmp += '<div style="color:red">'+answer[i].name+'</div> ';
						}*/
					}
					console.log(tmp+' before');
					tmp += ' ';
					//console.log(qq[j]);
					console.log(tmp+' after');
					resul += tmp+' ';
				//}
				
				//console.log(resul);
				//Ext.Msg.alert(resul);
				//console.log(answer.value);
				//console.log(faceRatingValueArray.getValues());
				Ext.ComponentQuery.query('answeeer'), function(answeeer) {
                    // if the button is the change iconCls button, continue
                   if(answeeer)
					console.log(answeeer);
					console.log('ssss');
                };
				//console.log('str func');
				/*var obj = Ext.get('answer');
				var faceRatingValueArray= Ext.query('[name=answeeer]');
				for(var i=0;i<faceRatingValueArray.length;i++){
					if(faceRatingValueArray[i].isChecked())
					console.log(faceRatingValueArray[i].getValue());
				}*/
				//var products = Ext.ComponentQuery.query('[name=answeeer]');
				
				//Ext.Msg.alert('You clicked the button');
				
				
			}
			}
        ]
    }
	
	/*,
	items: [
		{
			xtype: 'button',
			text: '5ext',
			ui:	'forward'
		}
	]*/
});
