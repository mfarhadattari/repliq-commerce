import { Helmet } from "react-helmet-async";

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{title ? `${title} | Repliq Commerce` : "Repliq Commerce"}</title>
    </Helmet>
  );
};

export default PageTitle;
