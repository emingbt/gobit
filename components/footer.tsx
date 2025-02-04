import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-card w-full">
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-400 bg-clip-text">
              gobit
            </span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-400 text-sm">Simple web app to talk with friends.</span>
          </div>
          <Link href={"https://www.github.com/emingbt/gobit"} className="flex mt-4 sm:mt-0 space-x-2">
            <Image src="/github-mark-white.svg" alt="GitHub" width={24} height={24} />
          </Link>
        </div>
      </div>
    </footer>
  )
}