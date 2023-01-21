import React from 'react'
import ProductsComp from '../../components/productsComp/ProductsComp'
import SearchComp from '../../components/searchComp/SearchComp'


function MainPage() {

    const productsInfo = [
        {
            name: "Apple",
            price: 100,
        },
        {
            name: "Banana",
            price: 150,
        },
        {
            name: "Orange",
            price: 200,
        },
    ]


  return (
    <div>
        <SearchComp/>
        <div>
            {productsInfo.map((item) => (
                <ProductsComp
                name={item.name}
                price={item.price}
                
                />
                
            ))}
        </div>
    </div>
  )
}

export default MainPage