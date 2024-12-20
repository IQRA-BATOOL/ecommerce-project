import React from "react";
import styled from "styled-components";
import Productlist from "./components/ProductList";
import sort from "./components/Sort";
import { useFilterContext } from "./context/filter_context";
const Products = () => {
// const {filter_products} = useFilterContext();

  return <Wrapper>
  <div className="conatiner grid grid-filter-column">
 <div>
   <FilterSection/>
  
  </div>  
  <section className = " product-view--sort">
    <div  className=" sort-filter">
      <Sort/>
    </div>
    <div  className="main-product">
<ProductList/>


    </div>
  </section>
  </div>

  </Wrapper>;p
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
