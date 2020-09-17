import React from 'react';
import Styled from 'styled-components';
import GlobalStyles from '../Styles/globalStyles';

const LandingItemDiv = Styled.div`
    text-align: center;
`

const LandingItem = () => {
    return (
        <LandingItemDiv>
            <h1>Landing Item Component</h1>
        </LandingItemDiv>
    )
}

export default LandingItem;