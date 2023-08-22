import Marquee from "react-fast-marquee";
import {
  FaHeadset,
  FaRegCheckCircle,
  FaShippingFast,
  FaUndo,
} from "react-icons/fa";
import SectionTitle from "../../../../components/common/SectionTitle";

const Services = () => {
  return (
    <section className="my-20">
      <SectionTitle title="Our Services"></SectionTitle>
      <div className="my-10">
        <Marquee>
          <div className="flex gap-5 items-center w-[300px]">
            <div className="text-[#024E82] text-5xl ">
              <FaShippingFast />
            </div>
            <div>
              <div className="text-xl font-bold uppercase">
                Product Shipping
              </div>
              <div className="font-medium">
                Enjoy shipping on <br /> less payments
              </div>
            </div>
          </div>
          <div className="flex gap-5 items-center w-[300px]">
            <div className="text-[#024E82] text-5xl ">
              <FaHeadset />
            </div>
            <div>
              <div className="text-xl font-bold uppercase">SUPPORT 24/7</div>
              <div className="font-medium">
                24 hour support provide <br /> by support team
              </div>
            </div>
          </div>
          <div className="flex gap-5 items-center w-[300px]">
            <div className="text-[#024E82] text-5xl ">
              <FaUndo />
            </div>
            <div>
              <div className="text-xl font-bold uppercase">07 DAYS RETURN</div>
              <div className="font-medium">
                Simply return it within 07 <br /> days for an exchange
              </div>
            </div>
          </div>
          <div className="flex gap-5 items-center w-[300px]">
            <div className="text-[#024E82] text-5xl ">
              <FaRegCheckCircle />
            </div>
            <div>
              <div className="text-xl font-bold uppercase">Real Product</div>
              <div className="font-medium">
                Our products are 100% <br /> original brand
              </div>
            </div>
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Services;
