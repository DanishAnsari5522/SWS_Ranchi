import React from 'react';
import {CONTAINER_OUTER_SPACING} from  '../config/constants';
import theme from '../config/theme';

const Container = ({ children, style }) => (
    <div style={[{ flex: 1, backgroundColor: theme.colors.background,padding:CONTAINER_OUTER_SPACING }, style]}>
        {children}
    </div>
);

export default Container;
