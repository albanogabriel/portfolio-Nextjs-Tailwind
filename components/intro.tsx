"use client"

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0}}
            animate={{ opacity:1, scale: 1}}
            transition={{
              type: 'tween',
              duration: 0.2
            }}  
            >
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
          <motion.span className="text-3xl bottom-0 right-[-0.2rem] absolute"
            initial={{ opacity: 0, scale: 0}}
            animate={{ opacity: 1, scale: 1}}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7
            }}
          >👻</motion.span>



        </div>
      </div>

      <motion.p 
        className="text-center mb-10 mt-4 px-4 text-2xl font-light !leading-[1.7] sm:text-xl"
        initial={{ opacity: 0, y:100}}
        animate={{ opacity:1, y:0 }}
      >
        <span className="font-bold">Olá! me chamo Gabriel.</span> Sou iniciante no <span className="font-bold">Desenvolvimento Front-end</span><br/>
        
        <span>Atuo como Scrum Master de um time de UX/UI.</span>{' '}

        <span className="font-light">Sou formado em Publicidade Propaganda e estou na 3º Fase de Análise e Desenvolvimento de Sistemas.</span> {' '} <br/> 

        <span>Meu foco é <span className="font-bold underline"> React <span className="font-light">(Next.js)</span></span></span>
      </motion.p>

      <motion.div 
        className="flex flex-col text-lg sm:flex-row sm:text-base items-center justify-center gap-3 px-4  font-medium"
        initial={{opacity: 0, y: 100}}
        animate={{ opacity:1, y: 0}}
        transition={{
          delay: 0.1
        }}
        >
        <Link 
          href="#contact"
          className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full
          outline-none focus:scale-110"
        >
          Me contate aqui <BsArrowRight />
        </Link>
        <a className="bg-white text-gray-600 px-7 py-3 flex items-center gap-2 rounded-full"> 
        Download CV <HiDownload /></a>
        <a className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full">
          <BsLinkedin/>
        </a>
        <a className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.2rem] rounded-full">
          <FaGithub/>
        </a>
      </motion.div>

    </section>
  )
}
