export default function Client({ clientData }) {
  return (
    <div key={clientData.id} id={`client-${clientData.id}`} className="border-8 border-teal-300 rounded-xl p-4 flex flex-col">
      <div id={`client-header-${clientData.id}`} className="w-full flex flex-row flex-nowrap pb-4">
        <div className="flex-shrink-0">
          <img src={clientData.img} alt={clientData.name} className="h-auto w-20 rounded-3xl" />
        </div>
        <div className="pl-2 flex-shrink">
          <h4>
            {clientData.name} <p className="text-lg text-gray-600 font-normal tracking-tight leading-tight">{clientData.position} <span className="text-gray-900">at</span> {clientData.company}</p>
          </h4>
        </div>
      </div>
      <div id={`client-body-${clientData.id}`} className="w-full">
        <p className="leading-snug mb-0">{clientData.content}</p>
      </div>
    </div>
  );
}
