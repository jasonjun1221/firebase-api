# commands
curl http://localhost:8080/api/age
curl -X POST -H "Content-Type: text/plain" -d "32" http://localhost:8080/api/age
curl -X POST -H "Content-Type: text/plain" -d "4" http://localhost:8080/api/age
curl http://localhost:8080/api/age
curl http://localhost:8080/api/mark
curl -X POST -H "Content-Type: text/plain" -d "4" http://localhost:8080/api/mark
curl http://localhost:8080/api/mark
curl -X PUT -H "Content-Type: text/plain" -d "0" http://localhost:8080/api/age
curl http://localhost:8080/api/age
curl http://localhost:8080/api/mark
curl -X DELETE http://localhost:8080/api/mark
curl http://localhost:8080/api/mark