import React, { Fragment } from "react";
import ListingPage from "./pages/listing";
import NewFeaturePage from "./pages/new-feature";

const App = () => {
  const page = window.location.pathname;
  const listingPage = page === "/listing";
  const newFeaturePage = page === "/new-feature";
  if (!listingPage && !newFeaturePage) {
    window.location.href = window.location.origin + "/listing";
  }

  return (
    <Fragment>
      {listingPage && <ListingPage></ListingPage>}
      {newFeaturePage && <NewFeaturePage></NewFeaturePage>}
    </Fragment>
  );
};

export default App;
