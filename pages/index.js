import Image from "next/image";
import Link from "next/link";
import "swiper/swiper.min.css";
import { aboutUs, services } from "data/util";
import Header from "@layouts/partials/Header";
import ContactForm from "@layouts/components/contact";
import Faq from "@layouts/Faq";
import Footer from "@layouts/partials/Footer";
import Guidelines from "@layouts/Guidelines";
import Team from "@layouts/Team";
import { committeedata } from "data/util";


const Home = () => {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Banner */}
      <section
        className="relative mt-20 h-[400px] overflow-hidden"
        data-aos="fade-up"
        id="home"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.8)), url('/images/DESPU.webp')`,
          }}
        ></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl text-white font-bold mb-4">
            International Symposium on Data-AI Harmonies for Society (Resonance
            2026)
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">
            International Symposium in Honor of Prof. Rajendra
            Akerkar&rsquo;s 60th Birthday
          </p>
        </div>
      </section>

      {/* Details */}
      {aboutUs.map((detail, index) => {
        const isOdd = index % 2 > 0;
        return (
          <section
            id="about"
            key={`service-${index}`}
            className={`section ${isOdd && "bg-theme-light"}`}
            data-aos="fade-right"
          >
            <div className="container">
              <div className="items-center gap-8 md:grid md:grid-cols-2">
                <div
                  className={`service-carousel ${!isOdd && "md:order-2"}`}
                >
                  <Image
                    src={detail?.image}
                    alt=""
                    width={600}
                    height={500}
                  />
                </div>
                <div
                  className={`service-content mt-5 md:mt-0 ${
                    !isOdd && "md:order-1"
                  }`}
                >
                  <h2 className="font-bold leading-[40px]">
                    {detail?.title}
                  </h2>
                  <p className="mt-4 mb-2">{detail?.description}</p>
                  <p className="font-bold">{detail?.desc}</p>
                  <p className="font-bold">{detail?.desc1}</p>
                  <p className="font-bold">{detail?.desc2}</p>
                  <p className="mb-2 font-bold">{detail?.desc3}</p>

                  {detail?.link && (
                    <Link
                      href={detail.link}
                      className="cta?-link inline-flex items-center text-primary"
                    >
                      {detail?.linkTitle}
                      <Image
                        className="ml-1"
                        src="/images/arrow-right.svg"
                        width={18}
                        height={14}
                        alt="arrow"
                      />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Services */}
      <section id="dates" className="section bg-theme-light">
        <div className="container">
          <div className="text-left">
            <h2 data-aos="fade-up ">Important Dates:</h2>
          </div>
          <div
            className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-2"
            data-aos="fade-left"
          >
            {services.map((item, i) => (
              <div
                className="feature-card rounded-xl bg-white p-5 pb-8 text-left"
                key={`feature-${i}`}
              >
                {item?.icon && (
                  <div className="text-3xl mx-auto">{item.icon}</div>
                )}
                <div className="mt-4">
                  <h3 className="h5">{item.title}</h3>
                  <p className="mt-3">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div data-aos="fade-left">
        <Guidelines />
      </div>

      {/* FAQ */}
      <div data-aos="fade-left">
        <Faq />
      </div>

      <div data-aos="fade-left">
        <Team />
      </div>

          <section id="committee" className="section bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold capitalize mb-8" data-aos="fade-up">
          committee members
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" data-aos="fade-up">
          {committeedata.Committee.map((member, index) => (
            <div
              key={`committee-${index}`}
              className="bg-theme-light rounded-lg p-6 shadow-md"
            >
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="mt-2 text-gray-700">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>


      {/* Contact */}
      <div data-aos="fade-up">
        <ContactForm />
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
