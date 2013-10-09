package ua.home.testknowledge

import grails.converters.JSON;

class AnswerController {
    def index(String id) {
		def answer  = Answer.find("from Answer  where id=:id", [id: id.toInteger()]).getIsCorrect()
		[answer: answer]
	}
}
