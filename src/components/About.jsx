import img1 from "../assets/IMG_2910.png";
import { Element } from "react-scroll";
import { texts } from "../data";
import { useGlobalContext } from "../context";

const About = () => {
  const { selectedLanguage } = useGlobalContext();
  return (
    <Element name="about">
      <section className="section about" id="about">
        <h3>{texts[selectedLanguage].h_about}</h3>
        <img className="grid-item" src={img1} alt="" />
        {texts[selectedLanguage].p_about.map((p, i) => (
          <article key={i}>
            <p key={i}>{p}</p>
          </article>
        ))}
      </section>
    </Element>
  );
};
export default About;
