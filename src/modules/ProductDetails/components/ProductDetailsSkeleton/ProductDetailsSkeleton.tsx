import { Skeleton } from '../../../../components/Skeleton';

export const ProductDetailsSkeleton = () => {
  return (
    <div className="containerProductDetailsPage">
      <div className="productPageHero">
        <section className="imagesBlock">
          <Skeleton />
        </section>

        <section className="selectionBlock">
          <Skeleton />
        </section>
      </div>

      <div className="description">
        <div className="about">
          <Skeleton />
        </div>
        <div className="skeleton techSpecs">
          <Skeleton />
        </div>
      </div>

      <div className="alsoLike">
        <Skeleton />
      </div>
    </div>
  );
};
