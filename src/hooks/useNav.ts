import { useRouter } from "vue-router"
import { useUserStore } from "@/store/user"

export default () => {
  const router = useRouter()
  const user = useUserStore()

  const navTo = (path : any) => {
    user.setPageCate(typeof path == 'string' ? path : path.name)
    router.push(path)
  }
  return {
    navTo
  }
}