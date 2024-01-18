# Super simple exmaple of jwt token usage with local storage

`https://dummyjson.com/docs/auth` - this is documentation for mock-server with two enpoints :

- `https://dummyjson.com/auth/login` - login endpoint which sends back JWT token
- `https://dummyjson.com/auth/me` - send information about current user - only if user is authorized

## /auth/login
````javascript
{
"id": 15,
"username": "kminchelle",
"email": "kminchelle@qq.com",
"firstName": "Jeanne",
"lastName": "Halvorson",
"gender": "female",
"image": "https://robohash.org/Jeanne.png?set=set4",
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYXV0cXVpYXV0LnBuZz9zaXplPTUweDUwJnNldD1zZXQxIiwiaWF0IjoxNjM1NzczOTYyLCJleHAiOjE2MzU3Nzc1NjJ9.n9PQX8w8ocKo0dMCw3g8bKhjB8Wo7f7IONFBDqfxKhs"
}
````

## /auth/me
```json
{
  "id": 15,
  "username": "kminchelle",
  "email": "kminchelle@qq.com",
  "firstName": "Jeanne",
  "lastName": "Halvorson",
  "gender": "female",
  "image": "https://robohash.org/Jeanne.png?set=set4",
  ... // other user fields
}
```


## What we have? 

Only two pages: login and profile.

Profile page shows information about current user.

## Bearer

In the fetch on Profile page we send the Header `Authorization` and as a value we use token with prefix `Bearer ` (last symbol is space)


```javascript
fetch("https://dummyjson.com/auth/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    })
```

## Additional notes

Keep in mind that you can store in local storage not only token itself but also information about current user, so it would persist after refresh of the page.
