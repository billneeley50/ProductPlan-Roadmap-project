import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ProductRoadmap from './ProductRoadmap';
import ProductRoadmapHeader from './ProductRoadmapHeader';

configure({adapter: new Adapter()});

describe('Whatever', () => {

    it('<ProductRoadmap/>', () => {
        const wrapper = shallow(<ProductRoadmap/>);

        expect(wrapper.find(ProductRoadmapHeader()));

    });

});