# STEP 1 - Run app.js
node app.js

# STEP 2 - Type all the commands with http://localhost:8080/
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

# STEP 2 - Type all the commands with https://firebase-api-dot-sse-task-2-firebase.as.r.appspot.com/
curl https://firebase-api-dot-sse-task-2-firebase.as.r.appspot.com/api/age
curl -X POST -H "Content-Type: text/plain" -d "32" https://firebase-api-dot-sse-task-2-firebase.as.r.appspot.com/api/age
curl -X POST -H "Content-Type: text/plain" -d "4" https://firebase-api-dot-sse-task-2-firebase.as.r.appspot.com/api/age
curl http://https://firebase-api-dot-sse-task-2-firebase.as.r.appspot.com/api/age
curl https://firebase-api-dot-sse-task-2-firebase.as.r.appspot.com/api/mark
curl -X POST -H "Content-Type: text/plain" -d "4" https://firebase-api-dot-sse-task-2-firebase.as.r.appspot.com/api/mark
curl https://firebase-api-dot-sse-task-2-firebase.as.r.appspot.com/api/mark
curl -X PUT -H "Content-Type: text/plain" -d "0" https://firebase-api-dot-sse-task-2-firebase.as.r.appspot.com/api/age
curl https://firebase-api-dot-sse-task-2-firebase.as.r.appspot.com/api/age
curl https://firebase-api-dot-sse-task-2-firebase.as.r.appspot.com/api/mark
curl -X DELETE http://localhost:8080/api/mark
curl https://firebase-api-dot-sse-task-2-firebase.as.r.appspot.com/api/mark