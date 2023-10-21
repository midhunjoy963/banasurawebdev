import React from "react";
function Header() {
  return <header>// complex content</header>;
}
// Similar for Footer component
function Root() {
  return (
    <div>
      <Header />
    </div>
  );
}
const cabdetailscreen = () => {
  return (
    // <>
    // <h1>here you can find all information about this cab</h1>
    // </>
    <div>
      <header>simple header content </header>
      <footer> simple footer content </footer>
    </div>
  );
};

export default cabdetailscreen;
