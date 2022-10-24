import { useRouter } from "vue-router"

export default () => {
  const router = useRouter()

  const navTo = (path: string) => {
    router.push(path)
  }
  return {
    navTo
  }
}