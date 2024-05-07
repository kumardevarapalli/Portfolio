import {AnimatePresence, motion} from 'framer-motion'
import {Link} from 'react-router-dom'
import './index.css'

const NavBar=()=>{

    const visible={opacity:1,y:0,transition:{duration:0.7}}

    const ItemVariants={
        hidden:{opacity:0,y:30},
        visible
    }

    const onHandleHomeButton=(event)=>{
        event.stopPropagation()
    }

    const onHandleAboutButton=(event)=>{
        event.stopPropagation()
    }
    const onHandleSkillsButton=(event)=>{
        event.stopPropagation()
    }
    const onHandleProjectsButton=(event)=>{
        event.stopPropagation()
    }
    const onHandleContactButton=(event)=>{
        event.stopPropagation()
    }

    return(
        <div className='nav-main-container'>
            <nav className="nav-bar">
                <motion.img 
                    whileHover={{x:10,y:-5,cursor:"pointer"}}
                    initial={{opacity:0,y:35}} animate={{opacity:1,y:0,transition:{duration:1.5}}} exit={{opacity:0,transition:{duration:1}}} src="https://i.imgur.com/Lg54au3.png" alt="portfolio" className="nav-logo" 
                />
               
             <AnimatePresence>
                <motion.div initial="hidden" animate="visible" exit={{opacity:0,transition:{duration:1}}} variants={{visible:{transition:{staggerChildren:0.3}}}}  className="nav-inner-container">
                    <motion.div whileTap={{scale:0.9}} onClick={onHandleHomeButton} variants={ItemVariants} >
                            <Link to='/'  style={{textDecoration:"none",color:"#ffffff"}} className="link" ><span  >Home</span></Link>
                    </motion.div>

                    <motion.div whileTap={{scale:0.9}} onClick={onHandleAboutButton} variants={ItemVariants}  >
                    <Link to='/About' style={{textDecoration:"none",color:"#ffffff"}} className="link"  > <span  >About</span></Link>
                    </motion.div>

                    <motion.div whileTap={{scale:0.9}} onClick={onHandleSkillsButton} variants={ItemVariants}  >
                    <Link to='/skills' style={{textDecoration:"none",color:"#ffffff"}} className="link" > <span>Skills</span></Link>
                    </motion.div>
                    
                    <motion.div  whileTap={{scale:0.9}} onClick={onHandleProjectsButton} variants={ItemVariants}  >
                    <Link to='/projects' style={{textDecoration:"none",color:"#ffffff"}} className="link"  > <span >Projects</span></Link>
                    </motion.div>

                    <motion.div whileTap={{scale:0.9}} onClick={onHandleContactButton} variants={ItemVariants}>
                    <Link to='/contact' style={{textDecoration:"none",color:"#ffffff"}} className="link" > <span    >Contact</span></Link>
                    </motion.div>
                </motion.div>
             </AnimatePresence>
            </nav>
        </div>
    )
}

export default NavBar