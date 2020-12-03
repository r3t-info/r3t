import ReactMarkdown from "react-markdown";

export default function Client({ clientData }) {

  return (
    <div
      key={clientData.id}
      id={`client-${clientData.id}`}
      className="bg-light shadow-md border border-accent border-opacity-20 rounded-md sm:rounded-lg max-w-sm md:max-w-xs mx-auto md:mx-6 md:mb-8 md:self-start xl:mb-16 p-3 sm:p-4 md:p-3 md:pb-4 xl:pt-4 xl:pb-5 lg:px-4 xl:px-6 flex flex-col xl:max-w-sm xl:mx-10 xl:shadow-xl"
    >
      <div id={`client-header-${clientData.id}`} className="w-full flex flex-row flex-nowrap pb-4">
        <div className="flex-shrink-0">
          <img src={clientData.portraitUrl} alt={clientData.name}  className="h-auto w-20 sm:w-24 rounded-md shadow" />
        </div>
        <div className="pl-3 flex-shrink">
          <h4>
            {clientData.name}
            <p className="text-lg md:text-md text-gray-600 font-normal tracking-tight md:tracking-normal leading-tight">
              {clientData.position} at {clientData.company}
            </p>
          </h4>
        </div>
      </div>
      <ReactMarkdown
        id={`client-body-${clientData.id}`}
        source={clientData.content}
        className="font-system text-lg w-full leading-snug sm:leading-normal lg:text-lg -mb-4"
      ></ReactMarkdown>
    </div>
  );
}
