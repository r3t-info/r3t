import Head from "next/head";
import Client from "../components/client";
import { getSortedClientsData } from "../lib/getSortedClientsData";

const name = "R3T";
const url = "https://www.r3t.info/";
const socialTitle = `${name} — Changing the delivery of digital strategies, management, and consulting.`;
const socialImage = "images/r3t-social-image.png";
const socialDescription =
  "We are a digital services company changing the way digital strategies, management, and consulting are delivered. We work with the 3T method which is based on Swedish research.";

export default function Home(props) {
  const allClientsAsCards = props.allClientsData.map((clientData) => {
    return <Client clientData={clientData} key={clientData.id}></Client>;
  });

  return (
    <>
      <Head>
        <title>{socialTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="title" content={socialTitle} />
        <meta name="description" content={socialDescription} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={socialTitle} />
        <meta property="og:description" content={socialDescription} />
        <meta property="og:image" content={socialImage} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={socialTitle} />
        <meta property="twitter:description" content={socialDescription} />
        <meta property="twitter:image" content={socialImage} />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto p-2 lg:py-4 space-y-8 lg:space-y-20">
        <header className="py-2 xl:py-4 px-1 bg-teal-300 rounded-md sm:px-16 md:px-20 lg:px-40 xl:px-56">
          <h1 className="text-6xl text-gray-900 font-bold tracking-tighter">{name}</h1>
        </header>

        <main className="space-y-10 lg:space-y-20">
          <section id="who-we-are" className="sm:px-16 md:px-20 lg:px-48 xl:px-56">
            <p className="text-2xl font-medium tracking-tight lg:tracking-normal lg:leading-normal">
              We are a digital services company changing the way digital strategies, management, and consulting are
              delivered. We work with the 3T method which is based on Swedish research.*
            </p>
            <p className="pl-0 md:w-3/4 md:ml-auto xl:w-3/5 xl:text-lg">
              *A 9-year collaboration between 40+ companies and public organisations, together with researchers from
              Stockholm University and KTH/Royal Institute of Technology.
            </p>
          </section>
          <section id="3t-border">
            <div className="h-4 sm:h-6 bg-teal-300 rounded-md flex justify-around sm:justify-evenly">
              <div className="bg-white w-8 md:w-6 h-full"></div>
              <div className="bg-white w-8 md:w-6 h-full"></div>
              <div className="bg-white w-8 md:w-6 h-full"></div>
            </div>
          </section>
          <section id="our-method" className="sm:px-16 md:px-20 lg:px-48 xl:px-56">
            <p>
              <span className="font-medium">The 3T method</span> begins by scouting the most committed decision makers
              and domain experts in your organisation.
            </p>
            <p>
              Together we define opportunities such as improving your business strategies or creating new digitised
              products or services.
            </p>
            <p>Then we implement these opportunities through iterations via rapid prototyping with weekly dialogues.</p>
            <p>
              What makes us different is our scientifically-designed integration tools which guarantee sustainable and
              scalable solutions.
            </p>
          </section>
          <section
            id="our-clients"
            className="space-y-5 sm:space-y-8 lg:space-y-0 sm:px-32 md:px-48 lg:px-0 lg:flex lg:flex-row lg:flex-wrap lg:justify-center"
          >
            {allClientsAsCards}
          </section>
        </main>

        <footer id="contact">
          <div className="mb-4 h-20">
            <img src="images/arrow-down.svg" alt="arrow down" className="h-full mx-auto" />
          </div>
          <h2 className="text-center text-3xl xl:text-4xl font-medium mb-6 lg:mb-20 sm:px-32">
            Let’s realise your opportunities!
          </h2>
          <div id="address-and-portrait" className="lg:flex lg:flex-wrap lg:px-20 lg:justify-center">
            <address className="my-4 md:mt-12 lg:mt-20 lg:pl-4 not-italic sm:px-16 lg:px-0 sm:text-center lg:text-left md:text-xl md:leading-relaxed lg:w-1/2 lg:self-start lg:order-2">
              <h4 className="md:text-2xl">
                Jens Ohlsson
                <p className="text-lg md:text-xl text-gray-600 font-normal tracking-tight leading-tight">
                  Chief Executive Officer <span className="text-gray-900">at</span> {name}
                </p>
              </h4>
              <a href="mailto:jens.ohlsson@real3t.se">jens.ohlsson@real3t.se</a>
              <br />
              <a href="tel:+46706445732">070-644 57 32</a>
              <br />
              <br />
              <a href="https://www.linkedin.com/company/realtreat-ab/" target="_blank" rel="noopener noreferrer">
                {name} LinkedIn
              </a>
            </address>
            <div className="mt-4 sm:mt-8 mb-2 lg:mb-10 sm:px-32 md:px-40 lg:px-0 lg:pr-4 xl:pl-24 lg:w-1/2 lg:order-1">
              <img src="images/jens-ohlsson.jpg" alt="Jens Ohlsson" className="rounded-xl sm:rounded-2xl lg:mx-auto" />
            </div>
          </div>
          <div className="h-4 sm:h-6 bg-teal-300 rounded-md sm:rounded-lg sm:mx-32 md:mx-40 lg:mx-0"></div>
        </footer>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const allClientsData = getSortedClientsData();
  return {
    props: {
      allClientsData,
    },
  };
}
