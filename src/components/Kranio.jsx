import img1 from "../assets/IMG_2910.png";
import { Element } from "react-scroll";
import { texts } from "../data";
import { useGlobalContext } from "../context";

const Kranio = () => {
  const { selectedLanguage } = useGlobalContext();
  return (
    <Element name="kranio">
      <section className="section kranio" id="kranio">
        <h3>{texts[selectedLanguage].h_kranio}</h3>
        {texts[selectedLanguage].p_kranio.map((p, i) => (
          <article key={i}>
            <p key={i}>{p}</p>
          </article>
        ))}
      </section>
    </Element>
  );
};
export default Kranio;
