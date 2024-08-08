import React from 'react';
import ReportViewer from '../components/ReportViewer';

function Reports() {
  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-center font-bold text-indigo-600 text-2xl">Performance Reports</h1>
      <ReportViewer />
    </div>
  );
}

export default Reports;
