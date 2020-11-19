import requests

endpt = "http://127.0.0.1:4000/employees/addEmployee/"

res = requests.post(endpt, data={
    "firstName": "Here is some description",
    "lastName": "asdf",
    "email": "bdere12345@gmail.com",
    "phone":9192929,
})

print(res.json())
