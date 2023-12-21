
import '../../styles/components/buttons/buttonsFilter.scss';

const ButtonFilter = ({menuButons, filterType, active, setType}) => {
  return (
    <> 
    <section className="buttonProducts">
    {
      menuButons.map(type => ( 
        <button 
        key={type}
        onClick={() => filterType(type)}
        className={ filterType === type.type ? "active" : ""} 
        >
        {type}
        </button>
      ))
    }
    </section>
    </>
  )
}


export default ButtonFilter
