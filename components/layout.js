import Nav from "./nav";

const Layout = ({ children, global, categories }) => (
  <>
    <Nav global={global} categories={categories} />
    {children}
  </>
);

export default Layout;
