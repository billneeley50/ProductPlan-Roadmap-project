import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Lane from '../Lane/Lane';
import ProductRoadmapHeader from './ProductRoadmapHeader';
import ProductRoadmapSidebar from './ProductRoadmapSidebar';
import ProductRoadmapSidebarItem from './ProductRoadmapSidebarItem';

configure({adapter: new Adapter()});

describe('Whatever', () => {

    it('Two buttons', () => {
        const wrapper = shallow(<ProductRoadmapSidebar/>);

        expect(wrapper.find(Lane)).toHaveLength(0);

    });

});