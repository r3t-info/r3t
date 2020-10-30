import Head from "next/head";

function Logo() {
  const allLogosUrl = [];

  for (let i = 1; i < 16; i++) {
    allLogosUrl.push(`images/logo/colors_${i}.svg`);
  }

  const allLogosAsElement = allLogosUrl.map((logosUrl) => {

    const imageId = String(logosUrl).substring(19, 21).replace(".", "");

    return (
      <div className="border-b-4 border-gray-500 h-screen flex flex-col justify-start" key={imageId}>
        <p className="text-6xl text-left pl-10 pt-5 text-gray-500">{imageId}</p>
        <div className="h-full flex flex-col justify-evenly">
        <img src={logosUrl} alt={"logo-medium-" + imageId} className="px-5 sm:px-0 h-32" />
        <img src={logosUrl} alt={"logo-small-" + imageId} className="hidden sm:block h-12" />
        </div>
      </div>
    );
  });

  return (
    <>
      <Head>
        <title>R3T — Logo examples</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>{allLogosAsElement}</div>
    </>
  );
}

export default Logo;
