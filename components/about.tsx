"use client"

import SectionHeading from "./section-heading";
import { motion } from "framer-motion"

export default function About(){
    return (
        <motion.section className="mb-28 max-w-[45rem] text-[0.75rem] text-center leading-8 sm:mb-40"
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            transition={{ delay: 0.175}}
            >

            <SectionHeading>Sobre mim</SectionHeading>

            <p className="mb-3">
                Me formei em publicidade e Propaganda em 2022,
                Decidi ingressar na área do Desenvolvimento Front-end por ter afinidade com a parte de UI / UI Design e Tecnologia.
                Atualmente sou Scrum master em uma squad de desenvolvimento mobile. 
                Para me especilizar faço os cursos: Rocketseat Ignite(Java, React, React Native, NextJS, Tailwind, Frame Motion, Figma para Devs, SEO, Node) e EBAC Full Stack Design(UX / UI Design e Front end Development)
            </p>

            <p className="">
                Atualmente busco me consolidar como um profissional do desenvolvimento web focado no front-end. 
                Desejo conseguir minhas primeira vaga, para crescer como profissional e ser capaz de resolver problemas
                demandado pelo mercado e contribuir para a empresa no qual estou inserido.
            </p>
        </motion.section>
    )
}