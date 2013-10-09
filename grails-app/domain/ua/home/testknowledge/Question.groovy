package ua.home.testknowledge

class Question {
	
	int id
	String question
	static hasMany = [answers : Answer]
	
    static constraints = {
    }
}
