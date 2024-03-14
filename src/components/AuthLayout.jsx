import React from "react";
//will work when authentication is done and

//when authentication is true then only it will render the pages otherwise don't render this page
function Protected({ children, authentication = true }) {
  return <>{children}</>;
}

export default Protected;
