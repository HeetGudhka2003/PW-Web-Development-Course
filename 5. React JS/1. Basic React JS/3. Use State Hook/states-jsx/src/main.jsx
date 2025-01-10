import { StrictMode } from "react";

import { createRoot } from "react-dom/client";

import TextInputFormContainer from "./components/TextInputFormContainer.jsx";

createRoot(document.getElementById("root")).render(

  <StrictMode>

    <TextInputFormContainer />

  </StrictMode>
);