import Link from "next/link";

const Breadcrumbs = ({ title, items }) => {
  return (
    <section className="breadcrumbs">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h2>{title}</h2>
          <ol>
            {items.map((item, itemIndex) => {
              const { name, slug } = item || {};
              return (
                <li key={itemIndex}>
                  <Link href={slug}>{name}</Link>
                </li>
              );
            })}
            <li>{title}</li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumbs;
