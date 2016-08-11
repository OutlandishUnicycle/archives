# archives
Repository for archived Discollect listings

ARCHIVES

END POINTS

/api/postArchives

Sample:
POST request: /api/postArchives

Request body:[ 
  {'id': 34, title': 'something', 'zip': 12345, 'category' : 'something',
  'description': 'something blah blah blah', 'condition': 4, 'createdAt': 109283:0398:34, 'giverId': 3, 'takerId': 7},
  {} 
]

/api/getArchives

Sample:
GET request: /api/getArchives

e.g. Req.body.userId = 9

Response: [
 {'id': 34, title': 'something', 'zip': 12345, 'category' : 'something',
  'description': 'something blah blah blah', 'condition': 4, 'createdAt': 109283:0398:34, 'giverId': 9, 'takerId': 7},
 {'id': 34, title': 'something', 'zip': 12345, 'category' : 'something',
  'description': 'something blah blah blah', 'condition': 4, 'createdAt': 109283:0398:34, 'giverId': 3, 'takerId': 9}
]
