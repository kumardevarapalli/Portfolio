import {AnimatePresence, motion} from 'framer-motion'
import {useState,useEffect,useMemo} from 'react'
import About from '../About'
import Skills from '../Skills'
import Contact from '../Contact'
import Projects from '../Projects'
import './index.css'

const Home=()=>{
    const [hoverFacebook,setHoverFacebook]=useState(false)
    const [hoverTwitter,setHoverTwitter]=useState(false)
    const [hoverInstagram,setHoverInstagram]=useState(false)
    const [hoverLinkedin,setHoverLinkedin]=useState(false)
    const [hoverWhatsapp,setHoverWhatsapp]=useState(false)

    const [shadow,setShadow]=useState(false)
    
    const devArray=useMemo(()=>["Frontend Developer","Backend Developer","Fullstack Developer"],[])

    const [array,setArray]=useState(devArray[0])


    const visible={opacity:1,x:0,transition:{duration:0.5}}

    const homeVariants={
        hidden:{
            opacity:0,
            x:-100
        },
        visible
    }

    const iconsVariants={
        hidden:{
            opacity:0,y:20
        },
        visible:{
            opacity:1,y:0,transition:{duration:1}
        }
    }

    const handleHoverEnterFacebook=()=>{
        setHoverFacebook(true)
    }
    const handleHoverLeaveFacebook=()=>{
        setHoverFacebook(false)
    }



    const handleHoverEnterTwitter=()=>{
        setHoverTwitter(true)
    }

    const handleHoverLeaveTwitter=()=>{
        setHoverTwitter(false)
    }

    const handleHoverEnterInstagram=()=>{
        setHoverInstagram(true)
    }

    const handleHoverLeaveInstagram=()=>{
        setHoverInstagram(false)
    }

    const handleHoverEnterLinkedin=()=>{
        setHoverLinkedin(true)
    }

    const handleHoverLeaveLinkedin=()=>{
        setHoverLinkedin(false)
    }

    const handleHoverEnterWhatsapp=()=>{
        setHoverWhatsapp(true)
    }

    const handleHoverLeaveWhatsapp=()=>{
        setHoverWhatsapp(false)
    }

    const colorfacebook=hoverFacebook?"rgb(16, 215, 36)":"rgb(236, 1, 161)"
    const colorTwitter=hoverTwitter?"rgb(16, 215, 36)":"rgb(236, 1, 161)"
    const colorInstagram=hoverInstagram?"rgb(16, 215, 36)":"rgb(236, 1, 161)"
    const colorLinkedin=hoverLinkedin?"rgb(16, 215, 36)":"rgb(236, 1, 161)"
    const colorWhatsapp=hoverWhatsapp?"rgb(16, 215, 36)":"rgb(236, 1, 161)"
 

    const handleDownload=()=>{
        const anchor=document.createElement('a')
        anchor.href="https://e7.pngegg.com/pngimages/81/570/png-clipart-profile-logo-computer-icons-user-user-blue-heroes-thumbnail.png"
        anchor.download="profile_image.jpg"
        anchor.click()
    }
    
    

    useEffect(()=>{
        const interval=setInterval(()=>{
            const currentValue=devArray.indexOf(array)
            const nextIndex=(currentValue+1)%devArray.length

            setArray(devArray[nextIndex])
        },14000)

        return ()=>clearInterval(interval)
    },[array,devArray])

    const onButtonHoverShadowEnter=()=>{
        setShadow(true)
    }

    const onButtonHoverShadowLeave=()=>{
        setShadow(false)
    }

    const shadowButton=shadow?"0 0 5px #ee0505 , 0 0 25px #ee0505 , 0 0 50px #ee0505 , 0 0 200px #ee0505":""
    
    return (
       <div className='main-bg-container'> 
        <div className="home-container">
           <AnimatePresence >
            <motion.div initial="hidden" animate="visible" exit={{opacity:0,transition:{duration:1}}} variants={{visible:{transition:{staggerChildren:0.3}}}} className="home-names-container">
                 <motion.h1 variants={homeVariants} className="home-names1"><span className="hello-span">Hello</span>, It's me</motion.h1>
                 <motion.h1 variants={homeVariants} className="home-names2">KUMAR DEVARAPALLI</motion.h1>
                 <motion.div variants={homeVariants} className="span-h1-container">
                    <div className="span-container">
                        <span className="home-span-name">And I'm </span>
                    </div>
                     <h1 className="text">{array}</h1>
                 </motion.div>
                 <motion.h1 variants={homeVariants} className="home-names4"><span className="home-span-name">From</span> BAPATLA</motion.h1>

                 <motion.p variants={homeVariants} className="home-para">
                    Aliquip irure anim officia esse culpa cillum. Culpa reprehenderit sit laboris reprehenderit excepteur officia minim sit voluptate. Deserunt ea aliquip quis veniam ullamco mollit cillum ipsum sint veniam magna.
                 </motion.p>

                <motion.div initial="hidden" animate="visible" exit={{opacity:0,transition:{duration:1}}} variants={{visible:{transition:{staggerChildren:0.3}}}} className='svg-logos'>
                 <motion.svg whileTap={{scale:0.9}} whileHover={{scale:1.5}} onMouseEnter={handleHoverEnterFacebook} onMouseLeave={handleHoverLeaveFacebook} variants={iconsVariants} className='logo' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z" style={{fill:colorfacebook}}></path></motion.svg>

                 <motion.svg whileTap={{scale:0.9}} whileHover={{scale:1.5}} onMouseEnter={handleHoverEnterTwitter} onMouseLeave={handleHoverLeaveTwitter} variants={iconsVariants} className='logo' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z" style={{fill:colorTwitter}}></path></motion.svg>

                 <motion.svg whileTap={{scale:0.9}} whileHover={{scale:1.5}} onMouseEnter={handleHoverEnterInstagram} onMouseLeave={handleHoverLeaveInstagram} variants={iconsVariants} className='logo' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z" style={{fill:colorInstagram}}></path><circle cx="11.994" cy="11.979" r="3.003" style={{fill:colorInstagram}}></circle></motion.svg>


                 <motion.svg whileTap={{scale:0.9}} whileHover={{scale:1.5}} onMouseEnter={handleHoverEnterLinkedin} onMouseLeave={handleHoverLeaveLinkedin} variants={iconsVariants} className='logo' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="4.983" cy="5.009" r="2.188" style={{fill:colorLinkedin}}></circle><path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z" style={{fill:colorLinkedin}}></path></motion.svg>

                 <motion.svg whileTap={{scale:0.9}} whileHover={{scale:1.5}} onMouseEnter={handleHoverEnterWhatsapp} onMouseLeave={handleHoverLeaveWhatsapp} variants={iconsVariants} className='logo' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263" style={{fill:colorWhatsapp}}></path></motion.svg>
                 </motion.div>

                 <motion.button onMouseEnter={onButtonHoverShadowEnter} onMouseLeave={onButtonHoverShadowLeave} style={{boxShadow:shadowButton,transition:'0.3s'}} whileTap={{scale:0.9}} initial={{opacity:0,y:30}} animate={{opacity:1,y:0,transition:{duration:2}}} exit={{opacity:0,transition:{duration:1}}} type="button" className='cv-button' onClick={handleDownload} >Resume</motion.button>
            </motion.div>

           <div className='image-container'>
             <motion.img className="profile-image" src="https://i.imgur.com/pvbK1ke.png" alt="profile" />
            </div>   
            </AnimatePresence>  
            
        </div>
        <div className="about-container">
                <About />
                <Skills />
                <Projects />
                <Contact />
            </div>
       </div> 
    )
}

export default Home