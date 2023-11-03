import React from "react";
import { styled } from "styled-components";
import FilterSection from "../component2/FilterSection";
import Sort from "../component2/Sort";
import ProductList from "../component2/ProductList";
import { useFilterContext } from "../context/Filter_Context";

const Product = () => {
  // const { filter_products } = useFilterContext();

  return (
    <Wrapper>
      <div className="container grid grid-filter-column">
        <div>
          <FilterSection />
        </div>
        <section className="product-view--sort">
          <div className="sort-filter">
            <Sort />
          </div>
          <div className="main-product">
            <ProductList />
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-templete-columns: 0.2fr 1fr;
  }
  @media (max-width ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-templete-columns: 1fr;
    }
  }
`;
export default Product;
