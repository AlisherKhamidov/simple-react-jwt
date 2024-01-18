import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function UserProfile() {
  const [user, setUser] = useState<
    { email: string; image: string } | undefined
  >(undefined)
  const navigate = useNavigate()
  useEffect(() => {
    fetch("https://dummyjson.com/auth/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        setUser(data)
      })
  }, [])
  const handleLogout = () => {
    // здесь должен быть запрос на логаут эндпоинт

    // очищаем локал сторедж
    localStorage.removeItem("access")
    navigate("/login")
  }
  return (
    <div>
      <h1>User Profile</h1>
      User info: {user?.email ? user.email : "not authorized"}
      <img src={user?.image} alt="" style={{ width: "50px" }} />
      <p>(Подсказка: в useEffect запрос на endpoint /auth/me)</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
