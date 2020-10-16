import Head from "next/head";
import Client from "../components/client";
import { getSortedClientsData } from "../lib/getSortedClientsData";

const name = "R3T";

export default function Home(props) {
  const allClientsAsCards = props.allClientsData.map((clientData) => {
    return <Client children={clientData} key={clientData.id}></Client>;
  });

  return (
    <>
      <Head>
        <title>{name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container p-2 space-y-10">
        <header className="h-20 mb-16">
          <img src="images/r3t-logo.svg" alt={`${name} Logo`} className="h-full m-2" />
        </header>

        <main className="space-y-16">
          <section id="who-we-are">
            <h1 className="text-6xl font-bold tracking-tighter">{name}</h1>
            <h4>
              We are a digital service company changing the way digital strategies, management and consulting are
              delivered. We work with the 3T method based on Swedish research.*
            </h4>
            <p>
              *A 9-years collaboration between 40+ industry companies, public organisations and researchers from
              Stockholm University and KTH Royal Institute of Technology.
            </p>
          </section>
          <section id="cartoon">
            <img src="images/the-emperor.png" alt="The Emperor, [name of the author]" />
          </section>
          <section id="our-method">
            <h5>
              Our method starts by scouting the most committed decision makers and domain experts in your organisation.
              Together we define a business challenge, such as implementing a new business strategy or creating new
              digitised products or services. Then we start to solve the challenge by iterations by rapid prototyping
              and weekly dialogues.
              <br />
              <br />
              What makes us different is our scientifically designed and smart integration tools which guarantees
              sustainable and scalable solutions.
            </h5>
          </section>
          <section id="our-clients" className="space-y-12">
            {allClientsAsCards}
          </section>
        </main>

        <footer id="contact">
          <h2>Let's solve a problem!</h2>
          <address className="not-italic text-xl text-right px-4">
            Jens Olhsson<br />
            <span className="text-gray-600">CEO at {name}</span>
            <br />
            <br />
            <a href="mailto:jens.olhsson@r3t.info">jens.olhsson@r3t.info</a>
            <br />
            <a href="tel:+46706445732">070-644 57 32</a><br />
            <a href="https://www.linkedin.com/company/realtreat-ab/" target="_blank" rel="noopener noreferrer">
              {name} LinkedIn
            </a>
          </address>
          <div className="my-6 px-8">
            <img src="images/jens-olhsson.jpg" alt="Jens Olhsson" className="rounded-lg" />
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
