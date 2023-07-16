import dynamic from "next/dynamic"
import Script from "next/script"

const Tiptap = dynamic(() => import("@/components/Tiptap"), { ssr: false })

export default function Home() {
  return (
    <>
      <Script src="https://kit.fontawesome.com/1984de3054.js" />
      <Tiptap />
    </>
  )
}
