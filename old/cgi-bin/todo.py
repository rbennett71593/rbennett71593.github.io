#!/usr/bin/python

print "Content-type: text/html"
print ""
print "<body>"
print "<h1>ToDo list</h1>"

file = open ('cgi-bin/todo.txt')
items = file.readlines()
file.close()


for i in items:
	print '<input type="checkbox">' + i + '<br />'

print "</body>"