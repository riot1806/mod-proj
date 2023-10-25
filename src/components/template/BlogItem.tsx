import ContentLoader from 'react-content-loader';

const BlogItem = (props: any) => (
  <ContentLoader height='350' width='100%' {...props}>
    <rect x='20' y='20' rx='5' ry='5' width='90%' height='300' />
  </ContentLoader>
);

export default BlogItem;
