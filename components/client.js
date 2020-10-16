export default function Client({ children }) {
  return (
    <div key={children.id} id={`client-${children.id}`} className="border-2 border-teal-500 rounded-2xl p-3 lex flex-row flex-wrap">
      <div id={`client-header-${children.id}`} className="w-full flex flex-row flex-nowrap">
        <div className="mb-4">
          <img src={children.img} alt={children.name} className="h-auto w-56 rounded-full" />
        </div>
        <div className="pl-2 py-2">
          <h5>
            {children.name}, <span className="text-gray-600">{children.position} at {children.company}</span>
          </h5>
        </div>
      </div>
      <div id={`client-body-${children.id}`} className="w-full flex">
        <p className="mb-0">{children.content}</p>
      </div>
    </div>
  );
}
