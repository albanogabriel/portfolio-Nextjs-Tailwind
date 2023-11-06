01 - npm Assets 

framer motion npm install framer-motion
    "use client"
    <motion.div
        initial={{ opacity: 0, y:100}}
        animate={{ opacity:1, y:0 }}
    ><motion.div/>
    <motion.p><motion.p/>

React Icons - npm install react-icons
    import { HiDownload } from 'react-icons/hi'
    import { FaGithub } from 'react-icons/fa'

Existem diversas bibliotecas basta saber como importa-los

02 - Ele utiliza o Prettier também. bom dar uma pesquisada

03 - Tirar o uso de Quot&Aspas&Quot:

    {
    "extends": "next/core-web-vitals",
    "rules": {
        "react/no-unescaped-entities": 0 // Aqui, utilzamos a regra
    }
    }

04 - Mobile First:
    <div className="flex flex-col sm:flex-row">
    Se percerbermos primeiro definimos as regras para mobile e depois como irá se comportar aumentando a tela