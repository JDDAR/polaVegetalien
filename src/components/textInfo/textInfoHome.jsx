import '../../styles/components/textInfo/textInfoHome.scss'

const TextInfoHome = (props) => {
  return (
  <>
    <section className="textInfoHome">
      <h2>{props.titleText}</h2>
      <p>{props.textInfoLeft}</p>
      <a href={props.src}>{props.button}</a>
    </section>
  </>
  )
};

export default TextInfoHome
