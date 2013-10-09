package ua.home.testknowledge

import grails.converters.JSON;

class AnswerController {
//	static scaffold = Contacts
    def index(String id) {
		println id
		
//		def answer = Answer.get(params.id) as JSON
		def answer  = Answer.find("from Answer  where id=:ids", [ids: id.toInteger()]).getIsCorrect()
		//def answer  = Answer.find("from Answer  where id=:ids", [ids: 11]).getAnswer()
		def res = " "
		res += answer;
		//println correct
		println res
		//println res
		//def answer = Answer.getAll() as JSON
		[answer: answer]
	}
}
