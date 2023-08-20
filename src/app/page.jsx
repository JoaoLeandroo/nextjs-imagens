'use client'

import Image from "next/image"

export default function Home() {

  const imageLoader = () => {
    return `https://img.olhardigital.com.br/wp-content/uploads/2019/12/20191204101729-1536x976.jpg`
  }

  const img2 = () => {
    return `https://images.pexels.com/photos/6963623/pexels-photo-6963623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
  }

  const img3 = () => {
    return `https://images.pexels.com/photos/8474450/pexels-photo-8474450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
  }
  return (
    <main className="w-full">
      <Image 
      loader={imageLoader}
      // src="https://img.olhardigital.com.br/wp-content/uploads/2019/12/20191204101729-1536x976.jpg"
      src="me.png"
      alt="universo"
      width={500}
      height={500}
      className="m-auto"
      />

      <Image
      loader={img2}
      src="eu.png"
      width={500}
      height={500}
      className="mt-2 m-auto"
      />

      <Image
      loader={img3}
      src="me.png"
      width={500}
      height={500}
      className="mt-2 m-auto"
      />


    </main>
  )
}
