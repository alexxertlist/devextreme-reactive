import * as React from 'react';
import { shallow } from 'enzyme';
import { Marker } from './marker';


describe('Marker', () => {
  it('should render span', () => {
    const tree = shallow(<Marker color="color" />);

    expect(tree.type())
      .toEqual('svg');
    expect(tree.find('svg').props().fill)
      .toEqual('color');
  });

  it('should pass the className prop to the root element', () => {
    const tree = shallow((
      <Marker className="custom-class" />
    ));

    expect(tree.is('.custom-class'))
      .toBeTruthy();
  });

  it('should pass the rest property to the root element', () => {
    const tree = shallow(<Marker customProperty />);
    const { customProperty } = tree.find('svg').props();

    expect(customProperty)
      .toBeTruthy();
  });
});
