import style from '@/styles/Home.module.css'
export default function Home(){
  return (
    <div className={style.homeContaier}>
      <h4>AMBITION IS THE FIRST STEP TOWARDS</h4>
      <h1 className={style.heading}>SUCCESS</h1>
      <p>Now Available for Online Coaching</p>
      <img src="cloud.png"  className={style.image}/>
      </div>
  )
}
