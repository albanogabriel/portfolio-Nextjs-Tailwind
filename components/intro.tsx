import Image from 'next/image'
import React from 'react'

export default function Intro() {
  return (
    <section className="flex items-center justify-center">
      <div className="relative">
        <motion.div>
          <Image 
          src="https://avatars.githubusercontent.com/u/126198713?s=400&u=397261c66fadb7d649781e77343c3239d88ed556&v=4" 
          alt={''}
          width="250"
          height="250"
          quality="95"
          priority={true}
          className="h-24 w-24 rounded-full object-cover border-[0.15rem]
          border-white shadow-xl"
          />
        </motion.div>

        <span className="text-3xl bottom-0 right-[-0.2rem] absolute">👻</span>
      </div>
    </section>
  )
}
