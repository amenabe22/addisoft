import requests

endpt = "http://127.0.0.1:4000/emp/add/"

res = requests.post(endpt, data={
    "description": "Here is some description",
    "responsible": "asdf",
    "completed": True
})

print(res.json())