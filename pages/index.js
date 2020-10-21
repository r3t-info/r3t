import Head from "next/head";
import Client from "../components/client";
import { getSortedClientsData } from "../lib/getSortedClientsData";

const name = "R3T";

export default function Home(props) {
  const allClientsAsCards = props.allClientsData.map((clientData) => {
    return <Client clientData={clientData} key={clientData.id}></Client>;
  });

  return (
    <>
      <Head>
        <title>{name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container p-2 space-y-8">
        <header className="py-2 px-1 bg-teal-300 rounded-md">
          <h1 className="text-6xl text-gray-900 font-bold tracking-tighter">{name}</h1>
        </header>

        <main className="space-y-10">
          <section id="who-we-are">
            <p className="text-2xl font-medium tracking-tight">
              We are a digital services company changing the way digital strategies, management, and consulting are
              delivered. We work with the 3T method which is based on Swedish research.*
            </p>
            <p className="pl-0">
              *A 9-year collaboration between 40+ companies and public organisations, together with researchers from
              Stockholm University and KTH/Royal Institute of Technology.
            </p>
          </section>
          <section id="cartoon">
            <img src="images/the-executive.png" alt="The Executive, [name of the author]" className="w-full h-auto" />
          </section>
          <section id="our-method">
            <p>
              <span className="font-medium">The 3T method</span> begins by scouting the most committed decision makers
              and domain experts in your organisation.
            </p>
            <p>
            Together we define opportunities such as improving your business strategies or creating new digitised products or services.
            </p>
            <p>Then we implement these opportunities through iterations via rapid prototyping with weekly dialogues.</p>
            <p>
            What makes us different is our scientifically-designed integration tools which guarantee sustainable and scalable solutions.
            </p>
          </section>
          <section id="our-clients" className="space-y-5">
            {allClientsAsCards}
          </section>
        </main>

        <footer id="contact">
          <div className="mb-4 h-20">
            <img src="images/arrow-down.svg" alt="arrow down" className="h-full mx-auto" />
          </div>
          <h2 className="text-center text-3xl font-medium mb-6">Let’s realise your opportunities!</h2>
          <address className="my-4 not-italic">
            <h4>
              Jens Ohlsson
              <p className="text-lg text-gray-600 font-normal tracking-tight leading-tight">
                Chief Executive Officer <span className="text-gray-900">at</span> {name}
              </p>
            </h4>
            <a href="mailto:jens.ohlsson@r3t.info">jens.ohlsson@r3t.info</a><br />
            <a href="tel:+46706445732">070-644 57 32</a><br /><br />
            <a href="https://www.linkedin.com/company/realtreat-ab/" target="_blank" rel="noopener noreferrer">
              {name} LinkedIn
            </a>
          </address>
          <div className="my-4">
            <img src="images/jens-ohlsson.jpg" alt="Jens Ohlsson" className="rounded-xl" />
          </div>
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
