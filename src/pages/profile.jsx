import Navbar from "../components/layouts/Navbar"
import { useLogin } from "../hooks/useLogin"

const ProfilePage = () => {
  const username = useLogin()
  return (
    <div>
      <Navbar />
      <h1>Profile Page</h1>
      <h3>{username}</h3>
    </div>
  )
}

export default ProfilePage