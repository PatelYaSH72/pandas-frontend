const ResourceList = ({ title, items }) => (
  <div>
    <p className="font-medium mb-3">{title}</p>
    <ul className="space-y-2">
      {items?.map((item, i) => (
        <li key={i}>
          <a
            href={item.link}
            target="_blank"
            className="flex items-center gap-2 text-blue-500
                       hover:underline hover:translate-x-1 transition"
          >
            → {item.title}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default ResourceList