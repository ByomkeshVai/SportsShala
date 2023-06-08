import React from 'react';
import Categories from '../../categories/Categories';
import ClassesFR from './ClassesFR';
import Banner from '../shared/Banner';
import { Helmet } from 'react-helmet';

const ClassArea = () => {
    return (
        <>
            <Helmet>
                <title>SportsShala - All Classes</title>
            </Helmet>
           <Banner title={"Our All Classes"}></Banner>
            <Categories></Categories>
            <ClassesFR></ClassesFR>
        </>
    );
};

export default ClassArea;