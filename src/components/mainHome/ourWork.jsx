import {useState} from 'react'
import productsData from '../../data/productsData'

import ButtonFilter from '../buttons/buttonsFilter'
import ProductOur from '../products/productOur'
import TitleHome from '../titles/titleHome'

const OurWork = () => {

  const [type, setType] = useState(productsData);
  const menuButons = [...new Set(productsData.map((type) => type.type ))];

  const filterType = (filType) => {
    const newType = productsData.filter((newTypeFilter) => newTypeFilter.type === filType)
    setType(newType)
  }


  return ( 
    <>
    <section className='container'>
    <div className="ourWorkContainer">
        <TitleHome 
          title="OurWork"
          titleText="eque porro quisquam est qui dolorem"
        />
    
     <ButtonFilter 
        menuButons={menuButons} 
        filterType={filterType}
        setType={setType}
      />
    <section className="ourWorkContainer__productsOur">
        <ProductOur type = {type}/>
    </section>

    </div>
    </section>
    </>
  )
}

export default OurWork 
