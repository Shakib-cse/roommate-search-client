import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const HomeLayout = () => {
        useEffect(() => {
          document.title = 'Roommate Search | Home';
        }, []);
    return (
        <div>
            <header>
                <Header />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default HomeLayout;