import React from 'react';
import {MemoryRouter, StaticRouter} from 'react-router-dom';
import {mount} from 'enzyme';
import Portal from './index';
import Dashboard from './scenes/Dashboard';
import Profile from './scenes/Profile';
import Transactions from './scenes/Transactions';

describe('Portal', () => {
    // mock match prop for nested component that uses router
    const match = {
        path: '/p',
        url: '/p'
    };

    const paths = [
        match.path,
        `${match.path}/dashboard`,
        `${match.path}/transactions`,
        `${match.path}/profile`,
        `${match.path}/random-path`
    ];

    test(`${paths[0]} path should render 404`, () => {
        const context = {};
        const location = {pathname: paths[0]};

        mount(
            <StaticRouter context={context}>
                <Portal match={match} location={location} />
            </StaticRouter>
        );

        expect(context.url).toBe('/404');
    });

    test(`${paths[1]} path should render Dashboard`, () => {
        const location = {pathname: paths[1]};

        const wrapper = mount(
            <MemoryRouter initialEntries={[ location.pathname ]}>
                <Portal match={match} location={location} />
            </MemoryRouter>
        );

        expect(wrapper.find(Dashboard)).toHaveLength(1);
        expect(wrapper.find(Transactions)).toHaveLength(0);
        expect(wrapper.find(Profile)).toHaveLength(0);
    });

    test(`${paths[2]} path should render Transactions`, () => {
        const location = {pathname: paths[2]};

        const wrapper = mount(
            <MemoryRouter initialEntries={[ location.pathname ]}>
                <Portal match={match} location={location} />
            </MemoryRouter>
        );

        expect(wrapper.find(Dashboard)).toHaveLength(0);
        expect(wrapper.find(Transactions)).toHaveLength(1);
        expect(wrapper.find(Profile)).toHaveLength(0);
    });

    test(`${paths[3]} path should render Profile`, () => {
        const location = {pathname: paths[3]};

        const wrapper = mount(
            <MemoryRouter initialEntries={[ location.pathname ]}>
                <Portal match={match} location={location} />
            </MemoryRouter>
        );

        expect(wrapper.find(Dashboard)).toHaveLength(0);
        expect(wrapper.find(Transactions)).toHaveLength(0);
        expect(wrapper.find(Profile)).toHaveLength(1);
    });

    test('random path should render 404', () => {
        const context = {};
        const location = {pathname: paths[4]};

        mount(
            <StaticRouter context={context}>
                <Portal match={match} location={location} />
            </StaticRouter>
        );

        expect(context.url).toBe('/404');
    });
});