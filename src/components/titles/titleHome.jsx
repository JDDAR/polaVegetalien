import '../../styles/components/titles/titleHome.scss'

const TitleHome = (props) => {
  return(
    <>
    <section className="titleHome">
      <h2 className="titleHome__title">{props.title}</h2>
      <span className='titleHome__title-text'>{props.titleText}</span>
    </section>      
    </>
  )
}

export default TitleHome
