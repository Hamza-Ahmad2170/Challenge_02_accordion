function AccordionItem({ title, num, curOpen, onOpen, children }) {
  const isOpen = num === curOpen;

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={() => onOpen(isOpen ? null : num)}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}

export default AccordionItem;
