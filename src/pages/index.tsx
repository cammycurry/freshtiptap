import dynamic from "next/dynamic"

const Tiptap = dynamic(() => import("@/components/Tiptap"), { ssr: false })

export default function Home() {
  return (
    <>
      <Tiptap />
    </>
  )
}
