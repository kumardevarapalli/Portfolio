import {motion} from 'framer-motion'
import './index.css'

const Contact=()=>{

    const variants2={
        hidden:{
            opacity:0,
            x:100
        },
        visible:{
            opacity:1,
            x:0,
            transition:{
                duration:1
            }
        }
    }

    const variants1={
        hidden:{
            opacity:0,
            x:-100
        },
        visible:{
            opacity:1,
            x:0,
            transition:{
                duration:1
            }
        }
    }

    const variants3={
        hidden:{
            opacity:0,
            y:20
        },
        visible:{
            opacity:1,
            y:0,
            transition:{
                duration:1
            }
        }
    }

    return(
        <div className="contact-main-container">
            <motion.h1 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0,transition:{duration:1}}} className="contact-heading">Contact Me</motion.h1>
            <div className="contact-heading-inner-container">
                <motion.div initial="hidden" whileInView="visible" exit={{opacity:0,  transition:{duration:1}}} variants={{visible:{transition:{staggerChildren:0.3}}}}  className="contact-inner-container-first">
                    <motion.h1 variants={variants1} className="first-container-heading">Let's work together</motion.h1>
                    <motion.p variants={variants1} className="first-container-para">Adipisicing et elit nostrud nulla magna commodo fugiat aliqua veniam quis cupidatat aute. Aute commodo voluptate sint et enim commodo aute. Adipisicing deserunt irure exercitation aliquip elit. Reprehenderit consequat ullamco ea ullamco consectetur voluptate aliquip duis et. Lorem qui ad reprehenderit dolore tempor dolor ut ut.</motion.p>
                    
                    <motion.p variants={variants1} className="first-container-para">Eiusmod tempor adipisicing ex duis duis ullamco fugiat sunt aliqua aute dolore aute excepteur. Excepteur duis enim fugiat amet est voluptate in ullamco incididunt. Aute aute esse ullamco consectetur elit eiusmod nisi minim eu mollit eiusmod esse.</motion.p>
                    <motion.div variants={variants1} className="icon-detail-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "rgb(0, 203, 254)"}}><path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"></path></svg>
                        <p className="icon-para">kumaraslk99@gmail.com</p>
                    </motion.div>
                    <motion.div variants={variants1} className="icon-detail-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "rgb(0, 203, 254)"}}><path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z"></path><path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a1 1 0 0 0-.086-1.391l-4.064-3.696z"></path></svg>
                        <p className="icon-para">+91 9618781770</p>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" exit={{opacity:0,  transition:{duration:1}}} variants={{visible:{transition:{staggerChildren:0.3}}}} className="social-media-icons">
                        <motion.svg variants={variants3} xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" style={{fill: "rgb(168, 255, 7)"}}><path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325 1.42-3.592 3.5-3.592.699-.002 1.399.034 2.095.107v2.42h-1.435c-1.128 0-1.348.538-1.348 1.325v1.735h2.697l-.35 2.725h-2.348V21H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"></path></motion.svg>

                        <motion.svg variants={variants3} xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" style={{fill: "rgb(168, 255, 7)"}}><path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path></motion.svg>
                        

                        <motion.svg variants={variants3} xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" style={{fill: "rgb(168, 255, 7)"}}><path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"></path><circle cx="11.994" cy="11.979" r="3.003"></circle></motion.svg>


                        <motion.svg variants={variants3} xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" style={{fill: "rgb(168, 255, 7)"}}><path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path></motion.svg>


                        <motion.svg variants={variants3} xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" style={{fill: "rgb(168, 255, 7)"}}><path d="M12.043 6.925a4.985 4.985 0 0 0-4.98 4.979c-.001.94.263 1.856.761 2.649l.118.188-.503 1.837 1.885-.494.181.108a4.97 4.97 0 0 0 2.535.693h.001a4.986 4.986 0 0 0 4.979-4.978 4.946 4.946 0 0 0-1.456-3.522 4.946 4.946 0 0 0-3.521-1.46zm2.928 7.118c-.125.35-.723.668-1.01.711a2.044 2.044 0 0 1-.943-.059 8.51 8.51 0 0 1-.853-.315c-1.502-.648-2.482-2.159-2.558-2.26-.074-.1-.61-.812-.61-1.548 0-.737.386-1.099.523-1.249a.552.552 0 0 1 .4-.186c.1 0 .199.001.287.005.092.004.215-.035.336.257.125.3.425 1.036.462 1.111.037.074.062.162.013.262-.05.101-.074.162-.15.25-.074.088-.157.195-.224.263-.075.074-.153.155-.066.305.088.149.388.64.832 1.037.572.51 1.055.667 1.204.743.15.074.237.063.325-.038.087-.101.374-.437.474-.586.1-.15.199-.125.337-.076.137.051.873.412 1.022.487.148.074.249.112.287.175.036.062.036.361-.088.711z"></path><path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-7.96 14.896h-.002a5.98 5.98 0 0 1-2.862-.729L6 18l.85-3.104a5.991 5.991 0 0 1 5.19-8.983 5.95 5.95 0 0 1 4.238 1.757 5.95 5.95 0 0 1 1.751 4.237 5.998 5.998 0 0 1-5.989 5.989z"></path></motion.svg>
                    </motion.div>
                </motion.div>
                <motion.div initial="hidden" whileInView="visible" exit={{opacity:0,transition:{duration:1}}} variants={{visible:{transition:{staggerChildren:0.3}}}}  className="contact-inner-container-second">
                    <motion.input variants={variants2} type="text" placeholder="Enter your Name" className="input-name" />

                    <motion.input variants={variants2} type="text" placeholder="Enter your Email" className="input-name" />

                    <motion.input variants={variants2} type="text" placeholder="Enter your Subject" className="input-name" />

                    <motion.textArea variants={variants2} placeholder="Enter your Message" className="text-area" rows="8" cols="67"></motion.textArea>
                    <motion.button variants={variants2} type="submit" className="submit-button">Submit</motion.button>
                </motion.div>
            </div>
            <footer className="footer">
                <motion.div initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0,transition:{duration:1}}} viewBox={{amount:0.8}} className="footer-div">
                <h2 className="address">Address :</h2>
                <p className="address-details">1-15/1  Perali, Karlapalem Mandal</p>
                <p className="address-details">Bapatla District, Andhra Pradesh</p>
                <p className="address-details">India</p>
                <p className="address-details">Pin: 522111</p>
                </motion.div>
            </footer>
        </div>
    )
}

export default Contact