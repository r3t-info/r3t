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
import Icons from "../components/svgs/icons/icons";

export function Paragraph(props) {
  return <p className="text-xl leading-snug sm:w-9/12 md:w-8/12 lg:max-w-xl mx-auto">{props.children}</p>;
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
  return <Icons className="h-10 mx-auto mb-2 stroke-current text-primary" title={props.alt} />
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
      <header className="px-2 py-5 sm:pt-5 sm:pb-3 lg:pb-0 bg-dark">
        <div className="h-20 sm:h-24">
          <R3tLogo className="h-full mx-auto fill-current text-white" />
        </div>
      </header>
      <main>
        <div className="w-full">
          <Direction className="dark-arrow h-full" />
        </div>
        <section id="who-we-are" className="bg-light pt-6 pb-4 md:pt-8 md:pb-6">
          <h2 className="text-secondary pt-2 pb-4">About us</h2>
          <ReactMarkdown
            source={introductionMainData.contentHtml}
            renderers={{
              strong: Strong,
              paragraph: Paragraph,
            }}
          />
          <div className="max-w-xs sm:max-w-sm mx-auto py-4 md:py-8 lg:pt-6 lg:pb-9">
            <Analysis className="w-full" />
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
          <Direction className="light-arrow" />
        </div>
        <section id="our-clients" className="bg-dark px-4 pt-6 pb-12 md:pt-8">
          <h2 className="text-primary pt-3 pb-5">Our clients</h2>
          <ReactMarkdown
            source={introductionClientsData.contentHtml}
            renderers={{
              strong: Strong,
              paragraph: ClientsParagraph,
              list: ClientsList,
            }}
            className="mb-5"
          />
          <div className="space-y-10 lg:space-y-0 sm:flex sm:flex-wrap sm:justify-center xl:max-w-screen-lg xl:mx-auto">
            {allClientsAsCards}
          </div>
        </section>
        <div className="w-full">
          <Direction className="dark-arrow" />
        </div>
        <section id="our-method" className="bg-light pt-6 pb-8 md:pt-8">
          <h2 className="text-secondary pt-2 pb-4 md:pb-6">Our Method</h2>
          <ReactMarkdown
            source={ourMethodData.contentHtml}
            skipHtml
            renderers={{ strong: Strong, paragraph: Paragraph, image: Icon }}
          />
          <div className="pt-4 pb-2 px-2 max-w-sm mx-auto sm:w-7/12 sm:pb-1 md:pt-6 lg:max-w-sm">
            <DataToAction />
          </div>
        </section>

        <div className="w-full">
          <Direction className="light-arrow" />
        </div>
      </main>
      <footer id="contact" className="bg-dark px-4 pt-8 pb-2 md:pt-10">
        <h2 className="text-primary text-3xl xl:text-4xl max-w-sm lg:max-w-md mx-auto font-medium normal-case leading-tight mb-6 lg:mb-8">
          {contactData.callToAction}
        </h2>

        <div id="address-and-portrait" className="flex flex-wrap justify-center lg:justify-center">
          <address className="my-4 md:mt-10 lg:mt-20 w-full lg:w-1/2 lg:pl-4 flex-grow-0 not-italic md:text-xl md:leading-relaxed text-center lg:text-left lg:order-2">
            <h4 className="sm:text-2xl">
              {contactData.name}
              <p className="text-lg sm:text-xl text-gray-400 font-normal tracking-tight leading-tight">
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

          <div className="mt-4 sm:mt-8 mb-2 lg:mb-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full lg:w-1/2 lg:order-1 lg:pr-4">
            <img
              src={contactData.portraitUrl}
              alt={contactData.name}
              className="rounded-lg sm:rounded-2xl lg:rounded-xl w-full lg:max-w-md lg:ml-auto"
            />
          </div>
        </div>
        <div className="w-3/12 sm:w-3/12 md:w-2/12 lg:w-full lg:order-3 mx-auto mt-5 mb-4">
          <R3tLogo className="h-full mx-auto lg:h-16 fill-current text-white" />
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
