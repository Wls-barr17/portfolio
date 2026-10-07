const items = [
  'Transactional systems',
  'Backend architecture',
  'Android applications',
  'Algorithms & problem solving',
];

export function Building() {
  return (
    <section className="building-strip">
      <div className="container building-layout">
        <div>
          <p className="eyebrow">
            <span /> CURRENTLY BUILDING
          </p>
          <p className="building-intro">
            Areas I’m curious about
            <br />
            and continuing to explore.
          </p>
        </div>
        <div className="building-items">
          {items.map((item, index) => (
            <div key={item}>
              <span>0{index + 1}</span>
              <strong>{item}</strong>
              <i>↗</i>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
