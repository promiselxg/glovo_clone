import ImageWrapper from "../../ImageWrapper/ImageWrapper";

const TopResturants = () => {
  return (
    <>
      <section className="h-fit bg-white">
        <div className="mx-auto w-[900px]  py-20">
          <div className="flex flex-col justify-center text-center">
            <h1 className="text-4xl pb-8 font-bold">
              Top restaurants and more in Glovo
            </h1>
            <div className="grid grid-cols-4 gap-5 place-content-center place-items-center">
              <ImageWrapper
                img="https://images.deliveryhero.io/image/customer-assets-glovo/countries/Stores/bghikwl7kiy5zyytrhp3?t=W3siYXV0byI6eyJxIjoibG93In19XQ=="
                label="McDonal's"
              />
              <ImageWrapper
                img="https://images.deliveryhero.io/image/customer-assets-glovo/countries/Stores/bjqayhyh0x0trsnujkfn?t=W3siYXV0byI6eyJxIjoibG93In19XQ=="
                label="KFC"
              />
              <ImageWrapper
                img="https://images.deliveryhero.io/image/customer-assets-glovo/countries/Stores/htnphwqorq4rl3zhcr1z?t=W3siYXV0byI6eyJxIjoibG93In19XQ=="
                label="BurgerKing"
              />
              <ImageWrapper
                img="https://images.deliveryhero.io/image/customer-assets-glovo/countries/Stores/hvpjrukzrzcx2fr7aivr?t=W3siYXV0byI6eyJxIjoibG93In19XQ=="
                label="Carrefour"
              />
              <ImageWrapper
                img="https://images.deliveryhero.io/image/customer-assets-glovo/countries/Stores/ytwytqxp9iracoscs2jf?t=W3siYXV0byI6eyJxIjoibG93In19XQ=="
                label="PizzaHut"
              />
              <ImageWrapper
                img="https://images.deliveryhero.io/image/customer-assets-glovo/countries/Stores/igq1ghjtalh1hzzu3wx1.png?t=W3siYXV0byI6eyJxIjoibG93In19XQ=="
                label="PapaJohn's"
              />
              <ImageWrapper
                img="https://images.deliveryhero.io/image/customer-assets-glovo/countries/Stores/fgxofdbzk1n0mpxqfxwu?t=W3siYXV0byI6eyJxIjoibG93In19XQ=="
                label="Subway"
              />
              <ImageWrapper
                img="https://images.deliveryhero.io/image/customer-assets-glovo/countries/Stores/grdqndkujhpgjt88ionz?t=W3siYXV0byI6eyJxIjoibG93In19XQ=="
                label="TacoBell"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopResturants;
