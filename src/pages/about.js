import style from "@/styles/about.module.css";
export default function About() {
  return (
    <div className={style.aboutContainer}>
      <div className={style.content}>
        <h1>About Me</h1>
        <p>
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. Feel free to drag and drop me
          anywhere you like on your page. ​ ​</p>
         <p>This is a great space to write long text about your company and your services. You can use this space
          to go into a little more detail about your company. Talk about your
          team and what services you provide.
        </p>
      </div>
      <img src="profile.webp" />
    </div>
  );
}
