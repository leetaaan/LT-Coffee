import getProducts from "@/actions/get-products";
import Container from "@/components/container";
import { PopularContent } from "@/components/popular-content";
import SwiperComponent from "@/components/swiper";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Coffee, FileHeart, Truck } from "lucide-react";
import Image from "next/image";


export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const productsTea = await getProducts({ category: "Trà" });


  return (
    <>
      <Container className="px-4 md:px-12">
        <section className="w-full h-[500px] py-2">
          <SwiperComponent />
        </section>

        <h2 className="text-xl md:text-2xl font-bold tracking-wider uppercase text-neutral-700 my-10">
          Sản phẩm phổ biến
        </h2>
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 gap-y-20 md:gap-12 my-4 py-12">
          {products?.slice(0, 4).map((item) => (
            <>
              <PopularContent data={item} key={item.id} />
            </>
          ))}
        </section>

        <section className="my-4 py-12 flex flex-col items-center justify-center">
          <h2 className="text-5xl md:text-5xl font-bold tracking-wider uppercase text-neutral-700 my-4">
            LT Coffee có gì ?
          </h2>
          <p className="w-full text-center md:w-[560px] text-base text-neutral-500 my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
            assumenda quae dolor eligendi veritatis
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full my-6 mt-20">
            <Card className="shadow-lg rounded-md border-none p-4 py-12 flex flex-col items-center justify-center gap-4">
              <Coffee className="w-8 h-8 text-hero" />
              <CardTitle className="text-neutral-600">
                Đồ uống tốt cho sức khỏe
              </CardTitle>
              <CardDescription className="text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tenetur nobis magni
              </CardDescription>
            </Card>

            <Card className="shadow-lg rounded-md border-none p-4 py-12 flex flex-col items-center justify-center gap-4">
              <FileHeart className="w-8 h-8 text-hero" />
              <CardTitle className="text-neutral-600">
                Chất lượng từng giọt
              </CardTitle>
              <CardDescription className="text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tenetur nobis magni
              </CardDescription>
            </Card>

            <Card className="shadow-lg rounded-md border-none p-4 py-12 flex flex-col items-center justify-center gap-4">
              <Truck className="w-8 h-8 text-hero" />
              <CardTitle className="text-neutral-600">
                Giao hàng nhanh
              </CardTitle>
              <CardDescription className="text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tenetur nobis magni
              </CardDescription>
            </Card>
          </div>
        </section>

        <h2 className="text-xl md:text-2xl font-bold tracking-wider uppercase text-neutral-700 my-10">
          Trưa nóng bức đã có trà thanh mát
        </h2>
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 gap-y-20 md:gap-12 my-4 py-12">
          {productsTea?.slice(0, 4).map((item) => (
            <>
              <PopularContent data={item} key={item.id} />
            </>
          ))}
        </section>

        <section className="my-4 py-12 flex flex-col items-center justify-center">
          <h2 className="text-5xl md:text-5xl font-bold tracking-wider uppercase text-neutral-700 my-4">
            Các chuyên gia của LT Coffee
          </h2>
          <p className="w-full text-center md:w-[560px] text-base text-neutral-500 my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
            assumenda quae dolor eligendi veritatis
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full my-6 mt-20">
            <Card className="shadow-lg relative rounded-md border-none flex flex-col items-center justify-end h-96 md:h-[520px] bg-hero/30">
              <Image
                fill
                src="/img/left.png"
                alt="chef one"
                className="w-full h-full object-contain hover:scale-110"
              />
            </Card>

            <Card className="shadow-lg relative rounded-md border-none flex flex-col items-center justify-end h-96 md:h-[520px] bg-hero/30">
              <Image
                fill
                src="/img/center.png"
                alt="chef one"
                className="w-full h-full object-contain hover:scale-110"
              />
            </Card>

            <Card className="shadow-lg relative rounded-md border-none flex flex-col items-center justify-end h-96 md:h-[520px] bg-hero/30">
              <Image
                fill
                src="/img/right.png"
                alt="chef one"
                className="w-full h-full object-contain hover:scale-110"
              />
            </Card>
          </div>
        </section>
      </Container>
    </>
  );
};

export default HomePage;
