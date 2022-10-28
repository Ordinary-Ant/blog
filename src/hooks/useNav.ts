import { useRouter } from "vue-router"

export default () => {
  const router = useRouter()

  const navTo = (path: string | Object) => {
    router.push(path)
  }
  return {
    navTo
  }
}