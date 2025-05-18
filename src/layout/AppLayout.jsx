import React from 'react';
import Header from './Header';
import Main from './Main';
import CartOverView from '../pages/Cart/CartOverView';
import { useNavigation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Loader from '../components/Loader';
export default function AppLayout() {
  const navigation = useNavigation();

  return (
    <>
      {navigation.state === 'loading' ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Main>
            <Outlet />
          </Main>
          <CartOverView />
        </>
      )}
    </>
  );
}
