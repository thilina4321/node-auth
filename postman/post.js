if(pm.response.code == 200){
    pm.environment.set('authToken', pm.response.json().token)
}

// right click karala edit gihin BEARER token eka {{authToken}} kiyala denna