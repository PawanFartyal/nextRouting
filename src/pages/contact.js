import style from '@/styles/contact.module.css';
export default function Contact(){
    return (
        <div className={style.contactContainer}>
            <h1>Contact Us</h1>
            <form className={style.contactForm}>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
                <textarea rows={20} cols={30} placeholder='Message' />
                <button className={style.submitBtn} >Submit</button>
            </form>
            </div>
    )
  }
  