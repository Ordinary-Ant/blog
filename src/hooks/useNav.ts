import { useRouter } from "vue-router"

export default () => {
  const router = useRouter()

  const navTo = (path :any) => {
    router.push(path)
  }
  return {
    navTo
  }
}