import ReactMarkdown from "react-markdown";

export default function Client({ clientData }) {
  return (
    <div
      key={clientData.id}
      id={`client-${clientData.id}`}
      className="bg-light border-solid border-3 border-accent rounded-lg p-2 sm:w-7/12 sm:p-3 md:px-6 md:py-4 lg:px-4 flex flex-col lg:w-1/3 xl:max-w-sm lg:mx-6 xl:mx-4 lg:self-start lg:mb-6"
    >
      <div id={`client-header-${clientData.id}`} className="w-full flex flex-row flex-nowrap pb-4">
        <div className="flex-shrink-0">
          <img src={clientData.img} alt={clientData.name} className="h-auto w-20 sm:w-24 rounded-lg" />
        </div>
        <div className="pl-3 flex-shrink">
          <h4>
            {clientData.name}{" "}
            <p className="text-lg md:text-md text-gray-600 font-normal tracking-tight md:tracking-normal leading-tight">
              {clientData.position} at {clientData.company}
            </p>
          </h4>
        </div>
      </div>
      <ReactMarkdown
        id={`client-body-${clientData.id}`}
        source={clientData.contentHtml}
        className="font-system text-lg w-full leading-snug sm:leading-normal lg:text-lg -mb-4"
      ></ReactMarkdown>
    </div>
  );
}
