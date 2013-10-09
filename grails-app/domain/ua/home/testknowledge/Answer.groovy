package ua.home.testknowledge

class Answer {

	int id
	String answer
	boolean isCorrect
	static belongsTo = [question: Question]
	
    static constraints = {
    }
	
	static mapping = {
		table 'Answer'
		isCorrect column: 'isCorrect'
		question column: 'QuestionID'
	}
}
