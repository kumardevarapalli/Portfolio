import { AnimatePresence, motion} from "framer-motion"
import './index.css'

const About=()=>{
    const variants1={
        offscreen:{
            opacity:0,
            x:100
        },
        onscreen:{
            opacity:1,
            x:0,
            transition:{
                duration:1
            }
        }
    }





    return(
        <div className="about-main-container">
            <motion.img initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0,transition:{type:"spring",bounce:0.2,duration:1,delay:0.5}}}  src="https://i.imgur.com/HCTdLfX.jpeg" alt="profile" className="profile" />
           <AnimatePresence>
            <motion.div initial="offscreen" whileInView="onscreen" exit={{opacity:0,transition:{duration:1.5}}} variants={{onscreen:{transition:{staggerChildren:0.3}}}} viewport={{amount:0.8}}  className="about-inner-container">
                <motion.div variants={variants1}>
                   <h1  className="about-heading">About me</h1>
                   <h1  className="about-full">FULLSTACK DEVELOPER</h1>
                </motion.div>
                    <motion.div variants={variants1}>
                        <motion.p  className="about-data-side-heading">Introduction :</motion.p>
                        <motion.p className="about-data-para">Aliqua deserunt adipisicing ad fugiat sit laborum amet culpa do minim. Minim est irure esse nisi qui. Cillum dolore do incididunt velit ex esse quis nulla elit excepteur sunt veniam. Voluptate id elit cupidatat enim adipisicing occaecat est dolor cillum. Non dolore pariatur dolore duis labore fugiat tempor. Ea sint cupidatat consequat deserunt adipisicing elit nostrud tempor dolore proident ullamco in id.</motion.p>
                    </motion.div>
                    <motion.div variants={variants1}>
                        <motion.p  className="about-data-side-heading">Background :</motion.p>
                        <motion.p  className="about-data-para">Aute irure cillum cillum aute veniam non excepteur laboris laboris. Sit fugiat cillum ullamco est reprehenderit fugiat labore officia ex et anim. Sint adipisicing nostrud cupidatat ea nostrud cupidatat. Dolor est ex Lorem voluptate amet aliqua nisi ex culpa. Ea consequat adipisicing id aute. Qui adipisicing sint non incididunt occaecat enim cupidatat non.</motion.p>
                    </motion.div>
                    <motion.div variants={variants1}>
                        <motion.p className="about-data-side-heading">Hobbies :</motion.p>
                        <motion.p className="about-data-para">Eiusmod cupidatat duis do sit cupidatat eiusmod. Nulla laborum veniam consectetur occaecat culpa aliqua elit commodo duis. Eu deserunt labore ea pariatur ipsum velit minim do qui.</motion.p>
                    </motion.div>
            </motion.div>
            </AnimatePresence>  
        </div>
    )
}

export default About