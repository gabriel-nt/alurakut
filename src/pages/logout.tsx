import { GetServerSideProps } from 'next';
import nookies from 'nookies';

const LogoutPage = () => {
  return <div></div>;
};

export const getServerSideProps: GetServerSideProps = async ctx => {
  nookies.destroy(ctx, 'USER_TOKEN');

  return {
    redirect: {
      destination: '/login',
      permanent: false,
    },
  };
};

export default LogoutPage;
