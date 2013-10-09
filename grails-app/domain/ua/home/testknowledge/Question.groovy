package ua.home.testknowledge

class Question {
	
	int id
	String question
//	List<Answer> answers
	static hasMany = [answers : Answer]
	
    static constraints = {
    }

//	int id
//	String question
////	List<Answer> answers
//	static hasMany = [answers : Answer]
//	
////	answers lazy: false
////	static mappedby = { answers fetch: 'join' }
//    static constraints = {
//		answers lazy: false
//    }
//	String toString() {
//		"${answers}"
//	}
}
