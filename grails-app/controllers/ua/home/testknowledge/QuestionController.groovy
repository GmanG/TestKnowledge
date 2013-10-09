package ua.home.testknowledge

import grails.converters.JSON;



class QuestionController {

    def index() { 
		//JSON.use('deep')
		def questionList = Question.executeQuery('from Question order by rand()', [max: 3]) as JSON
		[questionList: questionList]
	}
	 
	
}
