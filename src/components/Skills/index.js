import {AnimatePresence, motion} from 'framer-motion'
import { useEffect,useState} from 'react'
import './index.css'

const Skills=()=>{
    const [count1,setCount1]=useState(0)

    useEffect(()=>{
       const interval= setInterval(()=>{
            if (count1<88){
                setCount1(count1=>count1+1)
            }else{
                clearInterval(interval)
            }
        },2)

        return ()=>clearInterval(interval)
    })


    const [count2,setCount2]=useState(0)

    useEffect(()=>{
       const interval= setInterval(()=>{
            if (count2<86){
                setCount2(count2=>count2+1)
            }else{
                clearInterval(interval)
            }
        },2)

        return ()=>clearInterval(interval)
    })


    const [count3,setCount3]=useState(0)

    useEffect(()=>{
       const interval= setInterval(()=>{
            if (count3<75){
                setCount3(count3=>count3+1)
            }else{
                clearInterval(interval)
            }
        },2)

        return ()=>clearInterval(interval)
    })



    const [count4,setCount4]=useState(0)

    useEffect(()=>{
       const interval= setInterval(()=>{
            if (count4<80){
                setCount4(count4=>count4+1)
            }else{
                clearInterval(interval)
            }
        },2)

        return ()=>clearInterval(interval)
    })


    const [count5,setCount5]=useState(0)

    useEffect(()=>{
       const interval= setInterval(()=>{
            if (count5<68){
                setCount5(count5=>count5+1)
            }else{
                clearInterval(interval)
            }
        },2)

        return ()=>clearInterval(interval)
    })


    const [count6,setCount6]=useState(0)

    useEffect(()=>{
       const interval= setInterval(()=>{
            if (count6<89){
                setCount6(count6=>count6+1)
            }else{
                clearInterval(interval)
            }
        },2)

        return ()=>clearInterval(interval)
    })


    const [count7,setCount7]=useState(0)

    useEffect(()=>{
       const interval= setInterval(()=>{
            if (count7<76){
                setCount7(count7=>count7+1)
            }else{
                clearInterval(interval)
            }
        },2)

        return ()=>clearInterval(interval)
    })



    const [count8,setCount8]=useState(0)

    useEffect(()=>{
       const interval= setInterval(()=>{
            if (count8<90){
                setCount8(count8=>count8+1)
            }else{
                clearInterval(interval)
            }
        },2)

        return ()=>clearInterval(interval)
    })


    const [count9,setCount9]=useState(0)

    useEffect(()=>{
       const interval= setInterval(()=>{
            if (count9<85){
                setCount9(count9=>count9+1)
            }else{
                clearInterval(interval)
            }
        },2)

        return ()=>clearInterval(interval)
    })


    const [count10,setCount10]=useState(0)

    useEffect(()=>{
       const interval= setInterval(()=>{
            if (count10<89){
                setCount10(count10=>count10+1)
            }else{
                clearInterval(interval)
            }
        },2)

        return ()=>clearInterval(interval)
    })


    const [count11,setCount11]=useState(0)

    useEffect(()=>{
       const interval= setInterval(()=>{
            if (count11<95){
                setCount11(count11=>count11+1)
            }else{
                clearInterval(interval)
            }
        },2)

        return ()=>clearInterval(interval)
    })


    return(
        <div className="skills-main-container">
            <motion.h1 initial={{opacity:0,y:40}} animate={{opacity:1,y:20,transition:{duration:1}}} className="skills-heading">My Skills</motion.h1>
            <div className="skills-inner-container">
                <div className="skills-progress-bar-container">
                  <AnimatePresence>
                    <div className="skills-range-logo-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" style={{fill: "rgb(1, 179, 255)"}}><path d="M4.136 3.012h15.729l-1.431 16.15-6.451 1.826-6.414-1.826-1.433-16.15zm5.266 7.302-.173-2.035 7.533.002.173-1.963-9.87-.002.522 5.998h6.835l-.243 2.566-2.179.602-2.214-.605-.141-1.58H7.691l.247 3.123L12 17.506l4.028-1.08.558-6.111H9.402v-.001z"></path></svg>
                        <p className="skill-name">HTML</p>
                        <div className='progress-container'>
                            <motion.div layout className="skill-progress-bar">
                                <motion.div initial={{width:"0px"}}  whileInView={{width:"420px",transition:{duration:1,ease:"linear"}}} viewBox={{amount:0.8}} className="progress-bar">
                                </motion.div>
                            </motion.div>

                            <p className='percentage'>{count1}%</p>
                        </div>
                    </div>

                    <div className="skills-range-logo-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" style={{fill: "rgb(1, 179, 255)"}}><path d="M4.192 3.143h15.615l-1.42 16.034-6.404 1.812-6.369-1.813L4.192 3.143zM16.9 6.424l-9.8-.002.158 1.949 7.529.002-.189 2.02H9.66l.179 1.913h4.597l-.272 2.62-2.164.598-2.197-.603-.141-1.569h-1.94l.216 2.867L12 17.484l3.995-1.137.905-9.923z"></path></svg>
                        <p className="skill-name">CSS</p>
                        <div className='progress-container'>
                            <motion.div layout className="skill-progress-bar">
                                <motion.div initial={{width:"0px"}}  whileInView={{width:"390px",transition:{duration:1,ease:"linear"}}} viewBox={{amount:0.8}} className="progress-bar">
                                </motion.div>
                            </motion.div>

                            <p className='percentage'>{count2}%</p>
                        </div>
                    </div>

                    <div className="skills-range-logo-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" style={{fill: "rgb(1, 179, 255)"}}><path d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.113-.484.687-.629 1.137-.495.293.09.563.315.732.676.775-.507.775-.507 1.316-.844-.203-.314-.304-.451-.439-.586-.473-.528-1.103-.798-2.126-.775l-.528.067c-.507.124-.991.395-1.283.754-.855.968-.608 2.655.427 3.354 1.023.765 2.521.933 2.712 1.653.18.878-.652 1.159-1.475 1.058-.607-.136-.945-.439-1.316-1.002l-1.372.788c.157.359.337.517.607.832 1.305 1.316 4.568 1.249 5.153-.754.021-.067.18-.528.056-1.237l.034.049zm-6.737-5.434h-1.686c0 1.453-.007 2.898-.007 4.354 0 .924.047 1.772-.104 2.033-.247.517-.886.451-1.175.359-.297-.146-.448-.349-.623-.641-.047-.078-.082-.146-.095-.146l-1.368.844c.229.473.563.879.994 1.137.641.383 1.502.507 2.404.305.588-.17 1.095-.519 1.358-1.059.384-.697.302-1.553.299-2.509.008-1.541 0-3.083 0-4.635l.003-.042z"></path></svg>
                        <p className="skill-name">JAVA SCRIPT</p>
                        <div className='progress-container'>
                            <motion.div layout className="skill-progress-bar">
                                <motion.div initial={{width:"0px"}}  whileInView={{width:"375px",transition:{duration:1,ease:"linear"}}} viewBox={{amount:0.8}} className="progress-bar">
                                </motion.div>
                            </motion.div>

                            <p className='percentage'>{count3}%</p>
                        </div>
                    </div>

                    <div className="skills-range-logo-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" style={{fill: "rgb(1, 179, 255)"}}><path d="M9.585 11.692h4.328s2.432.039 2.432-2.35V5.391S16.714 3 11.936 3C7.362 3 7.647 4.983 7.647 4.983l.006 2.055h4.363v.617H5.92s-2.927-.332-2.927 4.282 2.555 4.45 2.555 4.45h1.524v-2.141s-.083-2.554 2.513-2.554zm-.056-5.74a.784.784 0 1 1 0-1.57.784.784 0 1 1 0 1.57z"></path><path d="M18.452 7.532h-1.524v2.141s.083 2.554-2.513 2.554h-4.328s-2.432-.04-2.432 2.35v3.951s-.369 2.391 4.409 2.391c4.573 0 4.288-1.983 4.288-1.983l-.006-2.054h-4.363v-.617h6.097s2.927.332 2.927-4.282-2.555-4.451-2.555-4.451zm-3.981 10.436a.784.784 0 1 1 0 1.57.784.784 0 1 1 0-1.57z"></path></svg>
                        <p className="skill-name">PYTHON</p>
                        <div className='progress-container'>
                            <motion.div layout className="skill-progress-bar">
                                <motion.div initial={{width:"0px"}}  whileInView={{width:"380px",transition:{duration:1,ease:"linear"}}} viewBox={{amount:0.8}} className="progress-bar">
                                </motion.div>
                            </motion.div>

                            <p className='percentage'>{count4}%</p>
                        </div>
                    </div>

                    <div className="skills-range-logo-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" style={{fill: "rgb(1, 179, 255)"}}><path d="M12 21.985c-.275 0-.532-.074-.772-.202l-2.439-1.448c-.365-.203-.182-.277-.072-.314.496-.165.588-.201 1.101-.493.056-.037.129-.02.185.017l1.87 1.12c.074.036.166.036.221 0l7.319-4.237c.074-.036.11-.11.11-.202V7.768c0-.091-.036-.165-.11-.201l-7.319-4.219c-.073-.037-.165-.037-.221 0L4.552 7.566c-.073.036-.11.129-.11.201v8.457c0 .073.037.166.11.202l2 1.157c1.082.548 1.762-.095 1.762-.735V8.502c0-.11.091-.221.22-.221h.936c.108 0 .22.092.22.221v8.347c0 1.449-.788 2.294-2.164 2.294-.422 0-.752 0-1.688-.46l-1.925-1.099a1.55 1.55 0 0 1-.771-1.34V7.786c0-.55.293-1.064.771-1.339l7.316-4.237a1.637 1.637 0 0 1 1.544 0l7.317 4.237c.479.274.771.789.771 1.339v8.458c0 .549-.293 1.063-.771 1.34l-7.317 4.236c-.241.11-.516.165-.773.165zm2.256-5.816c-3.21 0-3.87-1.468-3.87-2.714 0-.11.092-.221.22-.221h.954c.11 0 .201.073.201.184.147.971.568 1.449 2.514 1.449 1.54 0 2.202-.35 2.202-1.175 0-.477-.185-.825-2.587-1.063-1.999-.2-3.246-.643-3.246-2.238 0-1.485 1.247-2.366 3.339-2.366 2.347 0 3.503.809 3.649 2.568a.297.297 0 0 1-.056.165c-.037.036-.091.073-.146.073h-.953a.212.212 0 0 1-.202-.164c-.221-1.012-.789-1.34-2.292-1.34-1.689 0-1.891.587-1.891 1.027 0 .531.237.696 2.514.99 2.256.293 3.32.715 3.32 2.294-.02 1.615-1.339 2.531-3.67 2.531z"></path></svg>
                        <p className="skill-name">NODE JS & EXPRESS JS</p>
                        <div className='progress-container'>
                            <motion.div layout className="skill-progress-bar">
                                <motion.div initial={{width:"0px"}}  whileInView={{width:"372px",transition:{duration:1,ease:"linear"}}} viewBox={{amount:0.8}} className="progress-bar">
                                </motion.div>
                            </motion.div>

                            <p className='percentage'>{count5}%</p>
                        </div>
                    </div>

                    <div className="skills-range-logo-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "rgb(1, 179, 255)"}}><circle cx="12" cy="11.245" r="1.785"></circle><path d="m7.002 14.794-.395-.101c-2.934-.741-4.617-2.001-4.617-3.452 0-1.452 1.684-2.711 4.617-3.452l.395-.1.111.391a19.507 19.507 0 0 0 1.136 2.983l.085.178-.085.178c-.46.963-.841 1.961-1.136 2.985l-.111.39zm-.577-6.095c-2.229.628-3.598 1.586-3.598 2.542 0 .954 1.368 1.913 3.598 2.54.273-.868.603-1.717.985-2.54a20.356 20.356 0 0 1-.985-2.542zm10.572 6.095-.11-.392a19.628 19.628 0 0 0-1.137-2.984l-.085-.177.085-.179c.46-.961.839-1.96 1.137-2.984l.11-.39.395.1c2.935.741 4.617 2 4.617 3.453 0 1.452-1.683 2.711-4.617 3.452l-.395.101zm-.41-3.553c.4.866.733 1.718.987 2.54 2.23-.627 3.599-1.586 3.599-2.54 0-.956-1.368-1.913-3.599-2.542a20.683 20.683 0 0 1-.987 2.542z"></path><path d="m6.419 8.695-.11-.39c-.826-2.908-.576-4.991.687-5.717 1.235-.715 3.222.13 5.303 2.265l.284.292-.284.291a19.718 19.718 0 0 0-2.02 2.474l-.113.162-.196.016a19.646 19.646 0 0 0-3.157.509l-.394.098zm1.582-5.529c-.224 0-.422.049-.589.145-.828.477-.974 2.138-.404 4.38.891-.197 1.79-.338 2.696-.417a21.058 21.058 0 0 1 1.713-2.123c-1.303-1.267-2.533-1.985-3.416-1.985zm7.997 16.984c-1.188 0-2.714-.896-4.298-2.522l-.283-.291.283-.29a19.827 19.827 0 0 0 2.021-2.477l.112-.16.194-.019a19.473 19.473 0 0 0 3.158-.507l.395-.1.111.391c.822 2.906.573 4.992-.688 5.718a1.978 1.978 0 0 1-1.005.257zm-3.415-2.82c1.302 1.267 2.533 1.986 3.415 1.986.225 0 .423-.05.589-.145.829-.478.976-2.142.404-4.384-.89.198-1.79.34-2.698.419a20.526 20.526 0 0 1-1.71 2.124z"></path><path d="m17.58 8.695-.395-.099a19.477 19.477 0 0 0-3.158-.509l-.194-.017-.112-.162A19.551 19.551 0 0 0 11.7 5.434l-.283-.291.283-.29c2.08-2.134 4.066-2.979 5.303-2.265 1.262.727 1.513 2.81.688 5.717l-.111.39zm-3.287-1.421c.954.085 1.858.228 2.698.417.571-2.242.425-3.903-.404-4.381-.824-.477-2.375.253-4.004 1.841.616.67 1.188 1.378 1.71 2.123zM8.001 20.15a1.983 1.983 0 0 1-1.005-.257c-1.263-.726-1.513-2.811-.688-5.718l.108-.391.395.1c.964.243 2.026.414 3.158.507l.194.019.113.16c.604.878 1.28 1.707 2.02 2.477l.284.29-.284.291c-1.583 1.627-3.109 2.522-4.295 2.522zm-.993-5.362c-.57 2.242-.424 3.906.404 4.384.825.47 2.371-.255 4.005-1.842a21.17 21.17 0 0 1-1.713-2.123 20.692 20.692 0 0 1-2.696-.419z"></path><path d="M12 15.313c-.687 0-1.392-.029-2.1-.088l-.196-.017-.113-.162a25.697 25.697 0 0 1-1.126-1.769 26.028 26.028 0 0 1-.971-1.859l-.084-.177.084-.179c.299-.632.622-1.252.971-1.858.347-.596.726-1.192 1.126-1.77l.113-.16.196-.018a25.148 25.148 0 0 1 4.198 0l.194.019.113.16a25.136 25.136 0 0 1 2.1 3.628l.083.179-.083.177a24.742 24.742 0 0 1-2.1 3.628l-.113.162-.194.017c-.706.057-1.412.087-2.098.087zm-1.834-.904c1.235.093 2.433.093 3.667 0a24.469 24.469 0 0 0 1.832-3.168 23.916 23.916 0 0 0-1.832-3.168 23.877 23.877 0 0 0-3.667 0 23.743 23.743 0 0 0-1.832 3.168 24.82 24.82 0 0 0 1.832 3.168z"></path></svg>
                        <p className="skill-name">REACT JS</p>
                        <div className='progress-container'>
                            <motion.div layout className="skill-progress-bar">
                                <motion.div initial={{width:"0px"}}  whileInView={{width:"420px",transition:{duration:1,ease:"linear"}}} viewBox={{amount:0.8}} className="progress-bar">
                                </motion.div>
                            </motion.div>

                            <p className='percentage'>{count6}%</p>
                        </div>
                    </div>

                    <div className="skills-range-logo-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "rgb(1, 179, 255)"}}><path d="M10.74 12.89v-.11c.06-.15.12-.29.19-.43a5.15 5.15 0 0 0 .26-3.74.86.86 0 0 0-.66-.74 3.12 3.12 0 0 0-2.08.61v.18a11.34 11.34 0 0 1-.06 2.41 2.37 2.37 0 0 0 .62 2 2 2 0 0 0 1.43.63 8.05 8.05 0 0 1 .3-.81zM10 8.58a.36.36 0 0 1-.09-.23.19.19 0 0 1 .09-.12.74.74 0 0 1 .48-.07c.25 0 .5.16.48.34a.51.51 0 0 1-.49.33h-.06a.63.63 0 0 1-.41-.25z"></path><path d="M7.88 11a12.58 12.58 0 0 0 .06-2.3v-.28a7 7 0 0 1 1.54-4.55c-1-.32-3.4-1-4.87.1-.9.64-1.32 1.84-1.23 3.55a24.85 24.85 0 0 0 1 4.4c.68 2.22 1.45 3.62 2.11 3.85.1 0 .41.13.86-.41.64-.76 1.23-1.41 1.5-1.7l-.19-.19A2.89 2.89 0 0 1 7.88 11zm3.5 3.4c-.16-.06-.24-.1-.42.11a2.52 2.52 0 0 0-.29.35c-.35.43-.5.58-1.51.79a2 2 0 0 0-.4.11 1 1 0 0 0 .37.16 2.21 2.21 0 0 0 2.5-.8.41.41 0 0 0 0-.35.59.59 0 0 0-.25-.37zm6.29-5.82a5.29 5.29 0 0 0 .08-.79c-.66-.08-1.42-.07-1.72.36-.58.83.56 2.88 1 3.75a4.34 4.34 0 0 1 .26.48 1.79 1.79 0 0 0 .15.31 3.72 3.72 0 0 0 .16-2.13 7.51 7.51 0 0 1-.07-1.05 6 6 0 0 1 .14-.93zm-.56-.16a.6.6 0 0 1-.32.17h-.06a.47.47 0 0 1-.44-.3c0-.14.2-.24.44-.28s.48 0 .5.15a.38.38 0 0 1-.12.26z"></path><path d="M17 4.88a6.06 6.06 0 0 1 1.37 2.57.71.71 0 0 1 0 .15 5.67 5.67 0 0 1-.09 1.06 7.11 7.11 0 0 0-.09.86 6.61 6.61 0 0 0 .07 1 4 4 0 0 1-.36 2.71l.07.08c2.22-3.49 3-7.54 2.29-8.43a4.77 4.77 0 0 0-3.81-1.8 7.34 7.34 0 0 0-1.63.16A6.17 6.17 0 0 1 17 4.88z"></path><path d="M21.65 14c-.07-.2-.37-.85-1.47-.62a6.28 6.28 0 0 1-1 .13 19.74 19.74 0 0 0 2.06-4.88c.37-1.45.66-3.39-.11-4.38A5.91 5.91 0 0 0 16.37 2a8.44 8.44 0 0 0-2.46.35 9.38 9.38 0 0 0-1.45-.14 4.8 4.8 0 0 0-2.46.62 12.22 12.22 0 0 0-1.77-.44A5.44 5.44 0 0 0 4 3.05c-1.24.87-1.81 2.39-1.71 4.52a26.28 26.28 0 0 0 1 4.67A15.76 15.76 0 0 0 4.4 15a3.39 3.39 0 0 0 1.75 1.83 1.71 1.71 0 0 0 1.69-.37 2 2 0 0 0 1 .59 3.65 3.65 0 0 0 2.35-.14v.81a8.46 8.46 0 0 0 .31 2.36 1 1 0 0 1 0 .13 3 3 0 0 0 .71 1.24 2.08 2.08 0 0 0 1.49.56 3 3 0 0 0 .7-.08 3.27 3.27 0 0 0 2.21-1.27 7.34 7.34 0 0 0 .91-4v-.26h.17a5.24 5.24 0 0 0 2.4-.4c.45-.23 1.91-1 1.56-2zm-1.81 1.47a4.7 4.7 0 0 1-1.8.34 2.62 2.62 0 0 1-.79-.1c-.1.94-.32 2.69-.45 3.42a2.47 2.47 0 0 1-2.25 2.3 3.23 3.23 0 0 1-.66.07A2 2 0 0 1 12 20a16.77 16.77 0 0 1-.28-4.06 2.56 2.56 0 0 1-1.78.66 3.94 3.94 0 0 1-.94-.13c-.09 0-.87-.23-.86-.73s.66-.59.9-.64c.86-.18.92-.25 1.19-.59a2.79 2.79 0 0 1 .19-.24 2.56 2.56 0 0 1-1.11-.3c-.23.25-.86.93-1.54 1.74a1.43 1.43 0 0 1-1.11.63 1.23 1.23 0 0 1-.35 0C5.43 16 4.6 14.55 3.84 12a25.21 25.21 0 0 1-1-4.53c-.1-1.92.4-3.28 1.47-4 1.92-1.36 5-.31 5.7-.06a4 4 0 0 1 2.41-.66 5.58 5.58 0 0 1 1.4.18 7.51 7.51 0 0 1 2.5-.4 5.35 5.35 0 0 1 4.32 2c.69.88.23 3 0 3.89a18.84 18.84 0 0 1-2.41 5.41c.16.11.65.31 2 0 .46-.1.73 0 .82.25.22.55-.7 1.13-1.21 1.37z"></path><path d="M17.43 13.59a4 4 0 0 1-.62-1c0-.07-.12-.24-.23-.43-.58-1-1.79-3.22-1-4.34a2.16 2.16 0 0 1 2.12-.61 6.28 6.28 0 0 0-1.13-1.94 5.41 5.41 0 0 0-4.13-2 3.34 3.34 0 0 0-2.55.95A5.82 5.82 0 0 0 8.51 7.8l.15-.08A3.7 3.7 0 0 1 10 7.3a1.45 1.45 0 0 1 1.76 1.19 5.73 5.73 0 0 1-.29 4.09 3.29 3.29 0 0 0-.17.39v.11c-.1.27-.19.52-.25.73a.94.94 0 0 1 .57.07 1.16 1.16 0 0 1 .62.74v.16a.28.28 0 0 1 0 .09 22.22 22.22 0 0 0 .22 4.9 1.5 1.5 0 0 0 2 1.09A1.92 1.92 0 0 0 16.25 19c.15-.88.45-3.35.49-3.88 0-1.06.52-1.27.84-1.36z"></path><path d="m18 14.33-.08-.06h-.12c-.26.07-.5.14-.47.8a1.9 1.9 0 0 0 .93.12 4.29 4.29 0 0 0 1.38-.29 3 3 0 0 0 .79-.52 3.47 3.47 0 0 1-2.43-.05z"></path></svg>
                        <p className="skill-name">SQLITE</p>
                        <div className='progress-container'>
                            <motion.div layout className="skill-progress-bar">
                                <motion.div initial={{width:"0px"}} whileInView={{width:"375px",transition:{duration:1,ease:"linear"}}} viewBox={{amount:0.8}} className="progress-bar">
                                </motion.div>
                            </motion.div>

                            <p className='percentage'>{count7}%</p>
                        </div>
                    </div>
                   </AnimatePresence>  
                </div>
                <div className="skills-progress-round-container">
                        <div className='skill-para-container'>
                          <div className="circular-progress">
                            <svg className='progress-ring' width="120" height="130">
                                <motion.circle initial={{strokeDashoffset:314}} whileInView={{strokeDashoffset:314-(314/100)*90,transition:{duration:1.5}}} viewBox={{amount:0.8}} className='progress-ring-circle' cx="60" cy="60" r="50"></motion.circle>
                                <text className='text' x="50%" y="50%" text-anchor="middle" fill='white'>{count8}%</text>
                            </svg>
                          </div>
                          <p className="skill">Creativity</p>
                        </div>

                        <div className='skill-para-container'>
                          <div className="circular-progress">
                            <svg className='circular-ring' width="120" height="130">
                                <motion.circle initial={{strokeDashoffset:314}} whileInView={{strokeDashoffset:314-(314/100)*85,transition:{duration:1.5}}} viewBox={{amount:0.8}} className='progress-ring-circle' cx="60" cy="60" r="50"></motion.circle>
                                <text className='text' x="50%" y="50%" text-anchor="middle" fill='white'>{count9}%</text>
                            </svg>
                          </div>
                          <p className="skill">Communication</p>
                        </div>

                        <div className='skill-para-container'>
                          <div className="circular-progress">
                            <svg className='circular-ring' width="120" height="130">
                                <motion.circle initial={{strokeDashoffset:314}} whileInView={{strokeDashoffset:314-(314/100)*89,transition:{duration:1.5}}} viewBox={{amount:0.8}} className='progress-ring-circle' cx="60" cy="60" r="50"></motion.circle>
                                <text className='text' x="50%" y="50%" text-anchor="middle" fill='white'>{count10}%</text>
                            </svg>
                          </div>
                          <p className="skill">Problem Solving</p>
                        </div>

                         <div className='skill-para-container'>
                          <div className="circular-progress">
                            <svg className='circular-ring' width="120" height="130">
                                <motion.circle initial={{strokeDashoffset:314}} whileInView={{strokeDashoffset:314-(314/100)*95,transition:{duration:1.5}}} viewBox={{amount:0.8}} className='progress-ring-circle' cx="60" cy="60" r="50"></motion.circle>
                                <text className='text' x="50%" y="50%" text-anchor="middle" fill='white'>{count11}%</text>
                            </svg>
                          </div>
                          <p className="skill">Teamwork</p>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Skills