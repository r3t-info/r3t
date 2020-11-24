import React from "react";
import Head from "next/head";
import Client from "../components/client";
import { getSortedClientsData } from "../lib/getSortedClientsData";
import { getDataByFileName } from "../lib/getDataByFileName";
import ReactMarkdown from "react-markdown";
import R3tLogo from "../components/svgs/r3t-logo";
import DataToAction from "../components/svgs/data-to-action";
import Direction from "../components/svgs/border/direction";
import DirectionMask from "../components/svgs/border/direction-mask";
import Icons from "../components/svgs/icons/icons";

export function IntroductionParagraph(props) {
  return <p className="text-xl leading-snug sm:px-10 sm:leading-normal">{props.children}</p>;
}

export function ClientsParagraph(props) {
  return <p className="text-xl leading-tight lg:leading-snug mx-auto text-center w-48">{props.children}</p>;
}

export function ClientsList(props) {
  return <ul className="text-xl font-medium leading-normal text-center pb-4">{props.children}</ul>;
}

export function OurMethodParagraph(props) {
  return (
    <p className="text-white text-xl leading-snug text-center lg:max-w-sm lg:mx-10 xl:mx-5 xl:w-1/4">
      {props.children}
    </p>
  );
}

export function Strong(props) {
  return <strong className="font-medium">{props.children}</strong>;
}

export function Icon(props) {
  return <Icons className="h-10 xl:h-12 mx-auto mb-2 xl:mb-6 stroke-current text-title" title={props.alt} />;
}

export default function Home({
  socialData,
  introductionData,
  ourClientsIntroductionData,
  ourMethodData,
  clientsData,
  contactData,
}) {
  const allClientsAsCards = clientsData.map((clientData) => {
    return <Client clientData={clientData} key={clientData.id}></Client>;
  });

  return (
    <>
      <Head>
        <title>{socialData.socialTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="title" content={socialData.socialTitle} />
        <meta name="description" content={socialData.socialDescription} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={socialData.url} />
        <meta property="og:title" content={socialData.socialTitle} />
        <meta property="og:description" content={socialData.socialDescription} />
        <meta property="og:image" content={socialData.socialImage} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={socialData.url} />
        <meta property="twitter:title" content={socialData.socialTitle} />
        <meta property="twitter:description" content={socialData.socialDescription} />
        <meta property="twitter:image" content={socialData.socialImage} />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="px-2 pt-4 pb-3 sm:pt-6 xl:pt-8 lg:pb-0 bg-light">
        <div className="h-16 sm:h-20">
          <R3tLogo className="h-full mx-auto fill-current text-primary" />
        </div>
      </header>
      <main>
        <section id="who-we-are" className="bg-who-we-are bg-cover bg-left">
          <div className="w-full">
            <Direction className="light-arrow h-full" />
          </div>
          <div className="flex justify-center px-4 mt-12 mb-10 xl:mt-16 xl:mb-5">
            <div className="bg-lighter shadow-md inline-block rounded-md sm:rounded-lg border border-accent border-opacity-5 px-3 sm:px-0 sm:pb-4 md:pb-3 max-w-sm sm:max-w-lg">
              <h2 className="text-secondary py-5 sm:pt-8 sm:pb-4 max-w-sm mx-auto leading-tight">
                Changing Digital Leadership
              </h2>
              <ReactMarkdown
                source={introductionData.contentHtml}
                renderers={{
                  strong: Strong,
                  paragraph: IntroductionParagraph,
                }}
              />
            </div>
          </div>
          <div className="w-full">
            <DirectionMask className="dark-arrow" />
          </div>
        </section>
        <section id="our-clients" className="bg-light pb-12">
          <h2 className="text-title pt-8 sm:pt-12 xl:pt-24 mb-5 xl:mb-8">Our Clients</h2>
          <ReactMarkdown
            source={ourClientsIntroductionData.contentHtml}
            renderers={{
              strong: Strong,
              paragraph: ClientsParagraph,
              list: ClientsList,
            }}
            className="mb-5 xl:mb-8"
          />
          <div className="px-4 sm:px-0 space-y-12 md:space-y-0 sm:flex sm:flex-wrap sm:justify-center">
            {allClientsAsCards}
          </div>
        </section>
        <section id="our-method" className="bg-dark">
          <div className="w-full">
            <Direction className="light-arrow" />
          </div>
          <h2 className="text-white pt-8 sm:pt-12 pb-4 md:pb-6 lg:pt-16 lg:pb-12 xl:pt-24 xl:mb-8">Our Method</h2>
          <div className="px-4 sm:px-0 max-w-sm mx-auto lg:mx-10 lg:max-w-full lg:flex lg:flex-row lg:flex-wrap lg:justify-evenly xl:justify-evenly">
            <ReactMarkdown
              source={ourMethodData.contentHtml}
              skipHtml
              renderers={{ strong: Strong, paragraph: OurMethodParagraph, image: Icon }}
            />
          </div>
          <div className="pt-4 pb-2 px-2 max-w-sm mx-auto sm:w-7/12 sm:pb-1 md:pt-6 lg:pt-2 lg:max-w-sm">
            <DataToAction />
          </div>
          <div className="w-full pt-8">
            <DirectionMask className="dark-arrow" />
          </div>
        </section>
      </main>
      <footer id="contact" className="bg-light px-4 pb-2">
        <h2 className="text-title text-3xl lg:text-4xl font-medium normal-case leading-tight pt-12 xl:pt-20 md:pt-16 max-w-sm mx-auto mb-6 md:mb-3 lg:mb-8 xl:mb-12 xl:font-bold">
          {contactData.callToAction}
        </h2>

        <div id="address-and-portrait" className="flex flex-wrap justify-center">
          <address className="my-4 md:mt-10 lg:mt-20 w-full lg:w-1/2 lg:pl-4 xl:pl-12 flex-grow-0 not-italic md:text-xl md:leading-relaxed text-center lg:text-left lg:order-2">
            <h4 className="sm:text-2xl xl:text-3xl">
              {contactData.name}
              <p className="text-lg sm:text-xl text-gray-700 font-normal tracking-tight leading-tight">
                {contactData.position} at {socialData.name}
              </p>
            </h4>
            <a href={`mailto:${contactData.email}`}>{contactData.email}</a>
            <br />
            <a href={`tel:${contactData.phoneAsLink}`}>{contactData.phoneAsText}</a>
            <br />
            <br />
            <a href={contactData.linkedInUrl} target="_blank" rel="noopener noreferrer">
              {socialData.name} LinkedIn
            </a>
          </address>
          <div className="mt-4 sm:mt-8 mb-2 lg:mb-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full lg:w-1/2 lg:order-1 lg:pr-4 xl:pr-12">
            <img
              src={contactData.portraitUrl}
              alt={contactData.name}
              className="rounded-lg shadow sm:shadow-md w-full lg:max-w-md lg:ml-auto"
            />
          </div>
        </div>
        <div className="w-32 sm:w-40 lg:w-full mx-auto mt-5 mb-6 lg:mt-2 lg:mb-10">
          <R3tLogo className="h-full mx-auto lg:h-16 fill-current text-primary" />
        </div>
      </footer>
    </>
  );
}

export async function getStaticProps() {
  const clientsData = await getSortedClientsData();
  const socialData = await getDataByFileName("social");
  const introductionData = await getDataByFileName("introduction");
  const ourClientsIntroductionData = await getDataByFileName("our-clients");
  const ourMethodData = await getDataByFileName("our-method");
  const contactData = await getDataByFileName("contact");
  return {
    props: {
      socialData,
      introductionData,
      ourClientsIntroductionData,
      ourMethodData,
      clientsData,
      contactData,
    },
  };
}
