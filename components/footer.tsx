import Container from "@/components/container";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-white ">
      <Container>
        <div className="w-full  bg-hero grid grid-cols-2 md:grid-cols-4 px-4 md:px-12 py-8">
          <div className="flex flex-col items-start justify-start gap-3">
            <h2 className="text-3xl font-semibold">Menu</h2>
            <p className="text-white text-sm">Trang chủ</p>
            <p className="text-white text-sm">LT Coffee có gì ?</p>
            <p className="text-white text-sm">Special Menu</p>
            <p className="text-white text-sm">Special Chefs</p>
          </div>

          <div className="flex flex-col items-start justify-start gap-3">
            <h2 className="text-3xl font-semibold">Trợ giúp</h2>
            <p className="text-white text-sm">Điều khoản & Điều kiện</p>
            <p className="text-white text-sm">Chính sách</p>
          </div>

          <div className="flex flex-col items-start justify-start gap-3">
            <h2 className="text-3xl font-semibold">Liên hệ</h2>
            <p className="text-white text-sm">+000 0000 0000</p>
            <p className="text-white text-sm">letan085@gmail.com</p>
            <p className="text-white text-sm">1 Phù Đổng Thiên Vương, Đà Lạt</p>
          </div>

          <div className="flex flex-col items-start justify-start gap-3">
            <h2 className="text-3xl font-semibold">Đăng ký để nhận ưu đãi mới nhất</h2>
            <div className="w-full rounded-md border-2 border-primary flex items-center justify-center">
              <input
                type="text"
                placeholder="Enter your Email"
                className="h-full bg-transparent pl-4 text-sm text-white w-full outline-none border-none placeholder:text-white"
              />
              <Button className=" bg-slate-800 rounded-tr-none rounded-br-none hover:bg-green-400">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <div className="mx-auto py-8 ">
          <p className="text-center text-xs text-black">
            &copy; 2024 LT Coffee, Inc. All rights reserved
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
