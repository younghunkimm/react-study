import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import styled from 'styled-components';

// Pages
import MainPage from './component/page/MainPage';
import PostWritePage from './component/page/PostWritePage';
import PostViewPage from './component/page/PostViewPage';

const MainTitleText = styled.p`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;

function App(props) {
    return (
        <Router>
            <MainTitleText>미니 블로그</MainTitleText>
            <Routes>
                <Route index path="/" element={<MainPage />} />
                <Route path="/post-write" element={<PostWritePage />} />
                <Route path="/post/:postId" element={<PostViewPage />} />
            </Routes>
        </Router>
    )
}

export default App;
