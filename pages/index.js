import React, { useEffect } from "react";
import Head from "next/head";
import { getSortedClientsData } from "../lib/getSortedClientsData";
import { getDataByFileName } from "../lib/getDataByFileName";
import Client from "../components/client";
import ReactMarkdown from "react-markdown";
import CookieConsent from "react-cookie-consent";
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
    <p className="text-xl leading-snug text-center lg:max-w-sm lg:mx-10 xl:mx-1 xl:px-3 xl:w-1/4">{props.children}</p>
  );
}

export function OurAnalysisParagraph(props) {
  return (
    <p className="text-lg lg:text-xl leading-snug md:max-w-md md:mx-auto lg:mx-0 lg:ml-auto lg:mr-16">
      {props.children}
    </p>
  );
}

export function OurAnalysisCaption(props) {
  return <p className="font-system text-xs lg:text-base tracking-tight text-center">{props.children}</p>;
}

export function OurAnalysisCaptionLink(props) {
  return (
    <a href={props.href} className="text-xs lg:text-base">
      {props.children}
    </a>
  );
}

export function Strong(props) {
  return <strong className="font-medium">{props.children}</strong>;
}

export function Icon(props) {
  return <Icons className="h-10 xl:h-12 mx-auto mb-2 xl:mb-6 stroke-current text-accent" title={props.alt} />;
}

export default function Home({
  socialMediaData,
  introductionData,
  ourClientsData,
  ourMethodData,
  ourAnalysisData,
  contactData,
}) {

  const allClientsAsCards = ourClientsData.clients.map((clientData) => {
    return <Client clientData={clientData} key={clientData.id} />;
  });

  console.log(process.env.NEXT_PUBLIC_HOST);
  console.log(process.env.NODE_ENV);
  const vercelUrl = process.env.NODE_ENV === "production" ? "https://" + process.env.VERCEL_URL + "/" : null;

  return (
    <>
      <Head>
        <title>{socialMediaData.socialTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="title" content={socialMediaData.socialTitle} />
        <meta name="description" content={socialMediaData.socialDescription} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={socialMediaData.url} />
        <meta property="og:title" content={socialMediaData.socialTitle} />
        <meta property="og:description" content={socialMediaData.socialDescription} />
        <meta property="og:image" content={vercelUrl + socialMediaData.socialImageUrl} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content={socialMediaData.socialImageWidth} />
        <meta property="og:image:height" content={socialMediaData.socialImageHeight} />
        <meta property="og:image:alt" content={socialMediaData.socialTitle} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={socialMediaData.url} />
        <meta property="twitter:title" content={socialMediaData.socialTitle} />
        <meta property="twitter:description" content={socialMediaData.socialDescription} />
        <meta property="twitter:image" content={vercelUrl + socialMediaData.socialImageUrl} />
      </Head>
      <header className="px-2 pt-4 pb-3 sm:pt-6 xl:pt-8 lg:pb-0 bg-dark">
        <div className="h-16 sm:h-20">
          <R3tLogo className="h-full mx-auto fill-current text-primary" />
        </div>
      </header>
      <main>
        <section id="who-we-are" className="bg-who-we-are bg-cover bg-left">
          <div className="w-full">
            <Direction className="dark-arrow h-full" />
          </div>
          <div className="flex justify-center px-4 mt-12 mb-10 xl:mt-16 xl:mb-5">
            <div className="bg-light shadow-md inline-block rounded-md sm:rounded-lg border border-accent border-opacity-5 px-3 sm:px-0 sm:pb-4 md:pb-3 max-w-sm sm:max-w-lg">
              <h2 className="text-titleOnLight py-5 sm:pt-8 sm:pb-4 max-w-sm mx-auto leading-tight">
                {introductionData.title}
              </h2>
              <ReactMarkdown
                source={introductionData.content}
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
        <section id="our-clients" className="bg-dark pb-12">
          <h2 className="text-secondary pt-8 sm:pt-12 xl:pt-24 mb-5 xl:mb-8">{ourClientsData.title}</h2>
          <ReactMarkdown
            source={ourClientsData.content}
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
        <section id="our-method" className="bg-light">
          <div className="w-full">
            <Direction className="dark-arrow" />
          </div>
          <h2 className="text-titleOnLight pt-8 sm:pt-12 pb-4 md:pb-6 lg:pt-16 lg:pb-12 xl:pt-24 xl:mb-8">
            {ourMethodData.title}
          </h2>
          <div className="px-4 sm:px-0 max-w-sm mx-auto lg:mx-10 lg:max-w-full lg:flex lg:flex-row lg:flex-wrap lg:justify-evenly xl:mx-5">
            <ReactMarkdown
              source={ourMethodData.content}
              skipHtml
              renderers={{ strong: Strong, paragraph: OurMethodParagraph, image: Icon }}
            />
          </div>
          <div className="pt-4 pb-2 px-2 max-w-sm mx-auto sm:w-7/12 sm:pb-1 md:pt-6 lg:pt-2 lg:max-w-sm">
            <DataToAction colorValue={"text-black"} />
          </div>
          <div className="w-full pt-8">
            <DirectionMask className="light-arrow" />
          </div>
        </section>
        <section id="our-analysis" className="bg-dark pb-16">
          <h2 className="text-secondary pt-8 sm:pt-12 pb-5 md:pb-6 lg:pt-16 lg:pb-12 xl:pt-24 xl:mb-8">
            {ourAnalysisData.title}
          </h2>
          <div className="flex flex-wrap justify-center px-4 md:px-10 max-w-md mx-auto md:max-w-full md:items-start">
            <div className="w-full md:w-1/2">
              <ReactMarkdown
                source={ourAnalysisData.content}
                skipHtml
                renderers={{ strong: Strong, paragraph: OurAnalysisParagraph }}
              />
            </div>
            <div className="w-full sm:px-2 md:w-1/2 md:-mt-2 xl:-mt-4">
              <div className="mx-auto md:max-w-xs lg:max-w-sm lg:mx-0 lg:mr-auto lg:ml-16">
                <img
                  src={ourAnalysisData.cartoonUrl}
                  alt={ourAnalysisData.cartoonAlternativeText}
                  className="h-full w-full"
                />
                <ReactMarkdown
                  source={ourAnalysisData.cartoonCaption}
                  skipHtml
                  renderers={{ paragraph: OurAnalysisCaption, link: OurAnalysisCaptionLink }}
                ></ReactMarkdown>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer id="contact" className="bg-light px-4 pb-2">
        <div className="w-full">
          <Direction className="dark-arrow" />
        </div>
        <h2 className="text-titleOnLight text-3xl lg:text-4xl font-medium normal-case leading-tight pt-12 xl:pt-20 md:pt-16 max-w-sm mx-auto mb-6 md:mb-3 lg:mb-8 xl:mb-12 xl:font-bold">
          {contactData.callToAction}
        </h2>
        <div id="address-and-portrait" className="flex flex-wrap justify-center">
          <address className="my-4 md:mt-10 lg:mt-20 w-full lg:w-1/2 lg:pl-4 xl:pl-12 flex-grow-0 not-italic md:text-xl md:leading-relaxed text-center lg:text-left lg:order-2">
            <h4 className="sm:text-2xl xl:text-3xl">
              {contactData.name}
              <p className="text-lg sm:text-xl text-gray-600 font-normal tracking-tight leading-tight">
                {contactData.position} at {socialMediaData.name}
              </p>
            </h4>
            <a href={`mailto:${contactData.email}`}>{contactData.email}</a>
            <br />
            <a href={`tel:${contactData.phoneAsLink}`}>{contactData.phoneAsText}</a>
            <br />
            <br />
            <a href={contactData.linkedInUrl} target="_blank" rel="noopener noreferrer">
              {socialMediaData.name} LinkedIn
            </a>
          </address>
          <div className="mt-4 sm:mt-8 mb-2 lg:mb-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full lg:w-1/2 lg:order-1 lg:pr-4 xl:pr-12">
            <picture>
              <source srcSet={contactData.portraitImageWebpUrl} type="image/webp" />
              <source srcSet={contactData.portraitImageJpgUrl} type="image/jpeg" />
              <img
                src={contactData.portraitImageJpgUrl}
                alt={`${contactData.name}, ${contactData.position} at ${socialMediaData.name}`}
                className="rounded-lg shadow sm:shadow-md w-full lg:max-w-md lg:ml-auto"
              />
            </picture>
          </div>
        </div>
        <div className="w-32 sm:w-40 lg:w-full mx-auto mt-5 mb-6 lg:mt-2 lg:mb-10">
          <R3tLogo className="h-full mx-auto lg:h-16 fill-current text-primary" backgroundIsDark={false} />
        </div>
      </footer>
      <CookieConsent
        disableStyles="true"
        containerClasses="fixed bottom-0 right-0 md:right-auto md:left-0 m-1 mb-6 md:mb-1 bg-light border border-dark rounded-sm p-2 sm:p-3 text-base md:flex md:flex-row"
        buttonWrapperClasses="flex justify-end md:justify-start"
        buttonClasses="underline hover:text-accent hover:no-underline md:ml-3"
        buttonText="Continue"
        expires={150}
      >
        This website uses cookies.
      </CookieConsent>
    </>
  );
}

export async function getStaticProps() {

  const sortedClientsData = await getSortedClientsData();
  const socialMediaData = await getDataByFileName("social-media");
  const introductionData = await getDataByFileName("introduction");
  const ourClientsData = await getDataByFileName("our-clients");
  ourClientsData.clients = sortedClientsData;
  const ourMethodData = await getDataByFileName("our-method");
  const ourAnalysisData = await getDataByFileName("our-analysis");
  const contactData = await getDataByFileName("contact");

  return {
    props: {
      socialMediaData,
      introductionData,
      ourClientsData,
      ourMethodData,
      ourAnalysisData,
      contactData,
    },
  };
}
