import React from 'react';
import { shallow } from 'enzyme';
import DashBoardPage  from '../../components/DashBoardPage';

test('Should render ExpenseDashBoardPage correctly', () => {
    const wrapper = shallow(<DashBoardPage />);
    expect(wrapper).toMatchSnapshot();
});
