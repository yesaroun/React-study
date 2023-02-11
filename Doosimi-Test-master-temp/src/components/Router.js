import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Result from '../routes/Result';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Result />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
