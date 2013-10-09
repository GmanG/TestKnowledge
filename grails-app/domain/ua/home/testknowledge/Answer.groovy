package ua.home.testknowledge

class Answer {

	int id
	
	String answer
	
	boolean isCorrect
	static belongsTo = [question: Question]
//	Question question
	
    static constraints = {
    }
	
	static mapping = {
		table 'Answer'
		isCorrect column: 'isCorrect'
		question column: 'QuestionID'
	}
//	int id
//	
//	String answer
//	
//	boolean isCorrect
////	static belongsTo = [ question: Question]
////	static belongsTo = Question
//	Question question
	
//	
//	String toString() {
//		"${question} , ${id}"
//	}
}
