import React from "react";
import Head from "next/head";
import Client from "../components/client";
import { getSortedClientsData } from "../lib/getSortedClientsData";
import { getDataByFileName } from "../lib/getDataByFileName";
import ReactMarkdown from "react-markdown";
import R3tLogo from "../components/svgs/r3t-logo";
import Analysis from "../components/svgs/analysis";
import DataToAction from "../components/svgs/data-to-action";
import Direction from "../components/svgs/border/direction";

export function Paragraph(props) {
  return <p className="text-xl leading-snug">{props.children}</p>;
}

export function ClientsParagraph(props) {
  return <p className="text-light text-xl leading-tight text-center mx-auto w-48">{props.children}</p>;
}

export function ClientsList(props) {
  return <ul className="text-light text-xl font-medium leading-normal text-center pb-4">{props.children}</ul>;
}

export function Strong(props) {
  return <strong className="font-medium">{props.children}</strong>;
}

export function Icon(props) {
  return <img src={props.src} alt={props.alt} className="h-10 mx-auto mb-2" />;
}

export default function Home({
  socialData,
  introductionMainData,
  introductionFootnoteData,
  introductionClientsData,
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
      <header className="px-2 py-5 bg-dark">
        <div className="w-8/12 mx-auto">
          <R3tLogo className="h-full fill-current text-white" />
        </div>
      </header>
      <div className="w-full">
        <Direction className="fill-current text-dark bg-light" />
      </div>
      <main>
        <section id="who-we-are" className="bg-light pt-6 pb-4">
          <h2 className="text-secondary uppercase font-bold text-center pt-2 pb-4">About us</h2>
          <ReactMarkdown
            source={introductionMainData.contentHtml}
            renderers={{
              strong: Strong,
              paragraph: Paragraph,
            }}
          />
          <div className="w-full py-4">
            <Analysis className="w-10/12 mx-auto" />
          </div>
          <ReactMarkdown
            source={introductionFootnoteData.contentHtml}
            renderers={{
              strong: Strong,
              paragraph: Paragraph,
            }}
          />
        </section>
        <div className="w-full">
          <Direction className="fill-current text-light bg-dark" />
        </div>
        <section id="our-clients" className="bg-dark px-4 pt-6 pb-12">
          <h2 className="text-primary uppercase font-bold text-center pt-3 pb-5">Our clients</h2>
          <ReactMarkdown
            source={introductionClientsData.contentHtml}
            renderers={{
              strong: Strong,
              paragraph: ClientsParagraph,
              list: ClientsList,
            }}
            className="mb-5"
          />
          <div className="space-y-10">{allClientsAsCards}</div>
        </section>
        <div className="w-full">
          <Direction className="fill-current text-dark bg-light" />
        </div>
        <section id="our-method" className="bg-light pt-6 pb-8">
          <h2 className="text-secondary uppercase font-bold text-center pt-2 pb-4">Our Method</h2>
          <ReactMarkdown
            source={ourMethodData.contentHtml}
            skipHtml
            renderers={{ strong: Strong, paragraph: Paragraph, image: Icon }}
          />
          <div className="pt-4 pb-2 px-2">
            <DataToAction />
          </div>
        </section>
      </main>
      <div className="w-full">
        <Direction className="fill-current text-light bg-dark" />
      </div>
      <footer id="contact" className="bg-dark px-4 pt-8 pb-2">
        <h2 className="text-center text-primary text-3xl xl:text-4xl font-medium mb-6 lg:mb-20 sm:px-32">
          {contactData.callToAction}
        </h2>
        <div id="address-and-portrait" className="lg:flex lg:flex-wrap lg:px-20 lg:justify-center">
          <address className="my-4 text-center md:mt-12 lg:mt-20 lg:pl-4 not-italic sm:px-16 lg:px-0 sm:text-center lg:text-left md:text-xl md:leading-relaxed lg:w-1/2 lg:self-start lg:order-2">
            <h4 className="md:text-2xl">
              {contactData.name}
              <p className="text-lg md:text-xl text-gray-500 font-normal tracking-tight leading-tight">
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
          <div className="mt-4 sm:mt-8 mb-2 lg:mb-10 sm:px-32 md:px-40 lg:px-0 lg:pr-4 xl:pl-24 lg:w-1/2 lg:order-1">
            <img
              src={contactData.portraitUrl}
              alt={contactData.name}
              className="rounded-lg sm:rounded-2xl lg:mx-auto"
            />
          </div>
          <div className="w-6/12 mx-auto my-6">
            <R3tLogo className="h-full fill-current text-white" />
          </div>
        </div>
      </footer>
    </>
  );
}

export async function getStaticProps() {
  const clientsData = await getSortedClientsData();
  const socialData = await getDataByFileName("social");
  const introductionMainData = await getDataByFileName("introduction-main");
  const introductionFootnoteData = await getDataByFileName("introduction-footnote");
  const introductionClientsData = await getDataByFileName("introduction-clients");
  const ourMethodData = await getDataByFileName("our-method");
  const contactData = await getDataByFileName("contact");
  return {
    props: {
      socialData,
      introductionMainData,
      introductionFootnoteData,
      introductionClientsData,
      ourMethodData,
      clientsData,
      contactData,
    },
  };
}
