package ua.home.testknowledge

import grails.converters.JSON;



class QuestionController {

//	 static scaffold = Question
    def index() { 
		JSON.use('deep')
		def questionLists = Question.executeQuery('from Question order by rand()', [max: 3])
		println questionLists
		def questionList = Question.executeQuery('from Question order by rand()', [max: 3]) as JSON
//		def questionList = Question.get(1)
//		for(Answer in questionList.answers){
//			printls(Answer)
//		}
		
		
		[questionList: questionList]
	}
	 
	
}
