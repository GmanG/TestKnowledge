package ua.home.testknowledge

import grails.converters.JSON;

class ContactsController {
//	static scaffold = Contacts
    def index() {
		def clist = Contacts.list() as JSON
//		println(clist)
		[clist: clist]
	}
}
