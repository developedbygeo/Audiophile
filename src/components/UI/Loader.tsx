import ContentLoader from 'react-content-loader';

const Loader = () => (
  <section className="loading-container">
    <ContentLoader speed={2} viewBox="0 0 400 160" height={400} width={350} backgroundColor="transparent">
      <circle cx="125" cy="86" r="15" />
      <circle cx="194" cy="86" r="15" />
      <circle cx="263" cy="86" r="15" />
    </ContentLoader>
  </section>
);

export default Loader;
