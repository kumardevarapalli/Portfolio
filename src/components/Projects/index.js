import {motion} from "framer-motion"
import './index.css'
import { useState } from "react"

const Projects=()=>{
    const [enter1,setEnter1]=useState(false)
    const [enter2,setEnter2]=useState(false)
    const [enter3,setEnter3]=useState(false)
    const [enter4,setEnter4]=useState(false)
    const [enter5,setEnter5]=useState(false)
    const [enter6,setEnter6]=useState(false)
    const [enter7,setEnter7]=useState(false)
    const [enter8,setEnter8]=useState(false)
    const [enter9,setEnter9]=useState(false)


    const handleEnter1Start=()=>{
        setEnter1(true)
    }

    const handleEnter1End=()=>{
        setEnter1(false)
    }

    const handleEnter2Start=()=>{
        setEnter2(true)
    }

    const handleEnter2End=()=>{
        setEnter2(false)
    }

    const handleEnter3Start=()=>{
        setEnter3(true)
    }

    const handleEnter3End=()=>{
        setEnter3(false)
    }

    const handleEnter4Start=()=>{
        setEnter4(true)
    }

    const handleEnter4End=()=>{
        setEnter4(false)
    }

    const handleEnter5Start=()=>{
        setEnter5(true)
    }

    const handleEnter5End=()=>{
        setEnter5(false)
    }

    const handleEnter6Start=()=>{
        setEnter6(true)
    }

    const handleEnter6End=()=>{
        setEnter6(false)
    }

    const handleEnter7Start=()=>{
        setEnter7(true)
    }

    const handleEnter7End=()=>{
        setEnter7(false)
    }

    const handleEnter8Start=()=>{
        setEnter8(true)
    }

    const handleEnter8End=()=>{
        setEnter8(false)
    }

    const handleEnter9Start=()=>{
        setEnter9(true)
    }

    const handleEnter9End=()=>{
        setEnter9(false)
    }

    const variants={
        hidden:{
            opacity:0,
            x:-50
        },
        visible:{
            opacity:1,
            x:0,
            transition:{
                duration:1
            }
        }
    }

    return(
        <div className="projects-main-container">
            <motion.h1 initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0,transition:{duration:1}}} exit={{opacity:0,transition:{duration:1}}} className="projects-heading">Latest Projects</motion.h1>
            <motion.div initial="hidden" whileInView="visible" exit={{opacity:0,transition:{duration:1}}} variants={{visible:{transition:{staggerChildren:0.3}}}} className="projects-inner-container">
                <motion.div variants={variants}  onHoverStart={handleEnter1Start} onHoverEnd={handleEnter1End} className="image-data-container">
                    <motion.img initial={{ filter: "brightness(100%)"}}
                     animate={{filter:enter1?"brightness(60%)":"brightness(100%)",scale:enter1?1.1:1}}  transition={{duration:1}} src="https://i.imgur.com/FSBygjm.jpeg" className="projects-images" alt="projects" />
                   <motion.div initial={{opacity:0}} animate={{opacity:enter1?1:0}}  transition={{duration:1}}   className="projects-images-container">
                      <h1 className="projects-images-heading">Project</h1>
                       <p className="projects-images-paragraph">Proident proident elit voluptate cillum officia pariatur adipisicing Id laboris occaecat culpa cillum voluptate nostrud veniam magna...</p>
                   </motion.div>
                </motion.div>

                <motion.div variants={variants} onHoverStart={handleEnter2Start} onHoverEnd={handleEnter2End}className="image-data-container">
                    <motion.img initial={{ filter: "brightness(100%)" }}
                     animate={{filter:enter2?"brightness(60%)":"brightness(100%)",scale:enter2?1.1:1}}  transition={{duration:1}} src="https://i.imgur.com/BgYRnq9.png" className="projects-images" alt="projects" />
                   <motion.div initial={{opacity:0}} animate={{opacity:enter2?1:0}}  transition={{duration:1}}   className="projects-images-container">
                      <h1 className="projects-images-heading">Project</h1>
                       <p className="projects-images-paragraph">Proident proident elit voluptate cillum officia pariatur adipisicing Id laboris occaecat culpa cillum voluptate nostrud veniam magna...</p>
                   </motion.div>
                </motion.div>

                <motion.div variants={variants} onHoverStart={handleEnter3Start} onHoverEnd={handleEnter3End}className="image-data-container">
                    <motion.img initial={{ filter: "brightness(100%)" }}
                     animate={{filter:enter3?"brightness(60%)":"brightness(100%)",scale:enter3?1.1:1}}  transition={{duration:1}} src="https://i.imgur.com/PROkvH5.jpeg" className="projects-images" alt="projects" />
                   <motion.div initial={{opacity:0}} animate={{opacity:enter3?1:0}}  transition={{duration:1}}   className="projects-images-container">
                      <h1 className="projects-images-heading">Project</h1>
                       <p className="projects-images-paragraph">Proident proident elit voluptate cillum officia pariatur adipisicing Id laboris occaecat culpa cillum voluptate nostrud veniam magna...</p>
                   </motion.div>
                </motion.div>

                <motion.div variants={variants} onHoverStart={handleEnter4Start} onHoverEnd={handleEnter4End}className="image-data-container">
                    <motion.img initial={{ filter: "brightness(100%)" }}
                     animate={{filter:enter4?"brightness(60%)":"brightness(100%)",scale:enter4?1.1:1}}  transition={{duration:1}} src="https://i.imgur.com/42cVHZC.jpeg" className="projects-images" alt="projects" />
                   <motion.div initial={{opacity:0}} animate={{opacity:enter4?1:0}}  transition={{duration:1}}   className="projects-images-container">
                      <h1 className="projects-images-heading">Project</h1>
                       <p className="projects-images-paragraph">Proident proident elit voluptate cillum officia pariatur adipisicing Id laboris occaecat culpa cillum voluptate nostrud veniam magna...</p>
                   </motion.div>
                </motion.div>

                <motion.div variants={variants} onHoverStart={handleEnter5Start} onHoverEnd={handleEnter5End}className="image-data-container">
                    <motion.img initial={{ filter: "brightness(100%)" }}
                     animate={{filter:enter5?"brightness(60%)":"brightness(100%)",scale:enter5?1.1:1}}  transition={{duration:1}} src="https://i.imgur.com/AGFZ3wO.jpeg" className="projects-images" alt="projects" />
                   <motion.div initial={{opacity:0}} animate={{opacity:enter5?1:0}}  transition={{duration:1}}   className="projects-images-container">
                      <h1 className="projects-images-heading">Project</h1>
                       <p className="projects-images-paragraph">Proident proident elit voluptate cillum officia pariatur adipisicing Id laboris occaecat culpa cillum voluptate nostrud veniam magna...</p>
                   </motion.div>
                </motion.div>

                <motion.div variants={variants} onHoverStart={handleEnter6Start} onHoverEnd={handleEnter6End}className="image-data-container">
                    <motion.img initial={{ filter: "brightness(100%)" }}
                     animate={{filter:enter6?"brightness(60%)":"brightness(100%)",scale:enter6?1.1:1}}  transition={{duration:1}} src="https://i.imgur.com/WvhcMec.jpeg" className="projects-images" alt="projects" />
                   <motion.div initial={{opacity:0}} animate={{opacity:enter6?1:0}}  transition={{duration:1}}   className="projects-images-container">
                      <h1 className="projects-images-heading">Project</h1>
                       <p className="projects-images-paragraph">Proident proident elit voluptate cillum officia pariatur adipisicing Id laboris occaecat culpa cillum voluptate nostrud veniam magna...</p>
                   </motion.div>
                </motion.div>

                <motion.div variants={variants} onHoverStart={handleEnter7Start} onHoverEnd={handleEnter7End}className="image-data-container">
                    <motion.img initial={{ filter: "brightness(100%)" }}
                     animate={{filter:enter7?"brightness(60%)":"brightness(100%)",scale:enter7?1.1:1}}  transition={{duration:1}} src="https://i.imgur.com/nCCrCC8.jpeg" className="projects-images" alt="projects" />
                   <motion.div initial={{opacity:0}} animate={{opacity:enter7?1:0}}  transition={{duration:1}}   className="projects-images-container">
                      <h1 className="projects-images-heading">Project</h1>
                       <p className="projects-images-paragraph">Proident proident elit voluptate cillum officia pariatur adipisicing Id laboris occaecat culpa cillum voluptate nostrud veniam magna...</p>
                   </motion.div>
                </motion.div>


                <motion.div variants={variants} onHoverStart={handleEnter8Start} onHoverEnd={handleEnter8End}className="image-data-container">
                    <motion.img initial={{ filter: "brightness(100%)" }}
                     animate={{filter:enter8?"brightness(60%)":"brightness(100%)",scale:enter8?1.1:1}}  transition={{duration:1}} src="https://i.imgur.com/szckaaA.jpeg" className="projects-images" alt="projects" />
                   <motion.div initial={{opacity:0}} animate={{opacity:enter8?1:0}}  transition={{duration:1}}   className="projects-images-container">
                      <h1 className="projects-images-heading">Project</h1>
                       <p className="projects-images-paragraph">Proident proident elit voluptate cillum officia pariatur adipisicing Id laboris occaecat culpa cillum voluptate nostrud veniam magna...</p>
                   </motion.div>
                </motion.div>


                <motion.div variants={variants} onHoverStart={handleEnter9Start} onHoverEnd={handleEnter9End}className="image-data-container">
                    <motion.img initial={{ filter: "brightness(100%)" }}
                     animate={{filter:enter9?"brightness(60%)":"brightness(100%)",scale:enter9?1.1:1}}  transition={{duration:1}} src="https://i.imgur.com/pg3G3yx.jpeg" className="projects-images" alt="projects" />
                   <motion.div initial={{opacity:0}} animate={{opacity:enter9?1:0}}  transition={{duration:1}}   className="projects-images-container">
                      <h1 className="projects-images-heading">Project</h1>
                       <p className="projects-images-paragraph">Proident proident elit voluptate cillum officia pariatur adipisicing Id laboris occaecat culpa cillum voluptate nostrud veniam magna...</p>
                   </motion.div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Projects