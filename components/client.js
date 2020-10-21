export default function Client({ clientData }) {
  return (
    <div key={clientData.id} id={`client-${clientData.id}`} className="border-8 border-teal-300 rounded-xl sm:rounded-2xl p-4 md:px-6 md:py-4 lg:px-4 flex flex-col lg:w-1/3 lg:mx-6 xl:mx-8 lg:self-start lg:mb-6">
      <div id={`client-header-${clientData.id}`} className="w-full flex flex-row flex-nowrap pb-4">
        <div className="flex-shrink-0">
          <img src={clientData.img} alt={clientData.name} className="h-auto w-20 sm:w-24 xl:w-32 rounded-3xl" />
        </div>
        <div className="pl-3 flex-shrink">
          <h4>
            {clientData.name} <p className="text-lg md:text-md text-gray-600 font-normal tracking-tight md:tracking-normal leading-tight">{clientData.position} <span className="text-gray-900">at</span> {clientData.company}</p>
          </h4>
        </div>
      </div>
      <div id={`client-body-${clientData.id}`} className="w-full">
        <p className="leading-snug sm:leading-normal lg:text-lg mb-0">{clientData.content}</p>
      </div>
    </div>
  );
}
