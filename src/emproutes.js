import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard/Dashboard'));

const EmpProfile = React.lazy(() => import('./views/Employee/EmpProfile/EmpProfile'));
const LeaveRequest = React.lazy(() => import('./views/Employee/LeaveRequest/LeaveRequest'));
const LeaveStatus = React.lazy(() => import('./views/Employee/LeaveStatus/LeaveStatus'));
const LeaveHistoryView = React.lazy(() => import('./views/Employee/LeaveHistoryView/LeaveHistoryView'));

const AddTimesheet = React.lazy(() => import('./views/Employee/AddTimesheet/AddTimesheet'))


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
    { path: '/', exact: true, name: 'Home' },
    { path: '/dashboard', name: 'Dashboard', component: Dashboard },

    { path: '/empProfile', name: 'Emp-Profile', component: EmpProfile },


    { path: '/leaveRequest', name: 'Leave Request', component: LeaveRequest },
    { path: '/leaveStatus', name: 'leaveStatus', component: LeaveStatus },
    { path: '/leaveHistoryView', name: 'LeaveHistoryView', component: LeaveHistoryView },

    { path: '/addTimesheet', name: 'Add Timesheet', component: AddTimesheet },


];

export default routes;
