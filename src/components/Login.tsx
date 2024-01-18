import type { FormEvent } from "react"
import { useState } from "react"

export default function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  function handleForm(event: FormEvent<HTMLFormElement>) {
    const credentials = { username, password }
    event.preventDefault()
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    })
      .then(res => res.json())
      .then(data => localStorage.setItem("access", data.token))
  }

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleForm}>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="text"
          name="password"
          placeholder="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>

      <p>(Подсказка: username: "kminchelle", password: "0lelplR")</p>
    </div>
  )
}
