import getProducts from "@/actions/get-products";
import Container from "@/components/container";
import { PopularContent } from "@/components/popular-content";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Coffee, FileHeart, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });

  return (
    <>
      <Container className="px-4 md:px-12">
        <section className="grid grid-cols-1 md:grid-cols-2 py-12 pt-16">
          <div className="flex flex-col items-start justify-start gap-4">
            <p className="px-6 py-1 rounded-full text-neutral-500 border border-gray-300">
              Cảm thấy buồn chán?
            </p>
            <h2 className="text-5xl font-bold tracking-wider uppercase text-neutral-700 my-4">
              Hãy đến ngay
              <span className="block py-4">LT Coffee và chọn món thôi!!!</span>
            </h2>

            <p className="text-base text-center md:text-left text-neutral-500 my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              accusamus voluptas sint corrupti repudiandae? Dicta, repellendus.
              Voluptatibus tempore ipsam consectetur aspernatur dolore, earum
              nulla deleniti non ullam nostrum quae impedit!
            </p>

            <div className="my-4 flex text-center justify-center gap-6 w-full md:w-auto">
              <Link href={"/menu"}>
                <Button className="px-8 md:px-16 py-4 md:py-6 rounded-full bg-hero">
                  Chọn món
                </Button>
              </Link>
              <Link href={"/"}>
                <Button
                  variant={"outline"}
                  className="px-8 md:px-16 py-4 md:py-6 rounded-full"
                >
                  Khám phá thêm
                </Button>
              </Link>
            </div>
          </div>
          <div className="">
            <div className="relative w-full h-[560px] flex items-center justify-center">
              <Image
                src="/img/Coffee.png"
                alt="Hero"
                className="w-full object-contain absolute"
                fill
              />
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 gap-y-20 md:gap-12 my-4 py-12">
          {products?.slice(0, 4).map((item) => (
            <PopularContent data={item} key={item.id} />
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
                className="w-full h-full object-contain"
              />
            </Card>

            <Card className="shadow-lg relative rounded-md border-none flex flex-col items-center justify-end h-96 md:h-[520px] bg-hero/30">
              <Image
                fill
                src="/img/center.png"
                alt="chef one"
                className="w-full h-full object-contain"
              />
            </Card>

            <Card className="shadow-lg relative rounded-md border-none flex flex-col items-center justify-end h-96 md:h-[520px] bg-hero/30">
              <Image
                fill
                src="/img/right.png"
                alt="chef one"
                className="w-full h-full object-contain"
              />
            </Card>
          </div>
        </section>
      </Container>
    </>
  );
};

export default HomePage;
