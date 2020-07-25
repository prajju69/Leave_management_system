import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard/Dashboard'));

const EmpProfile = React.lazy(() => import('./views/Employee/EmpProfile/EmpProfile'));


const LeaveRequestList = React.lazy(() => import('./views/HR/LeaveRequestList/LeaveRequestList'));
const LeaveRequestView = React.lazy(() => import('./views/HR/LeaveRequestView/LeaveRequestView'));

const TimesheetView = React.lazy(() => import('./views/HR/TimeSheetView/TimeSheetView'))
const TimesheetHistoryView = React.lazy(() => import('./views/HR/TimesheetHistoryView/TimesheetHistoryView'))



// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
    { path: '/', exact: true, name: 'Home' },
    { path: '/dashboard', name: 'Dashboard', component: Dashboard },



    { path: '/empProfile', name: 'Emp-Profile', component: EmpProfile },

    { path: '/leaveRequestList', name: 'LeaveRequest Details', component: LeaveRequestList },
    { path: '/leaveRequestView', name: 'LeaveRequest View', component: LeaveRequestView },

    { path: '/timesheetview', name: 'TimesheetView', component: TimesheetView },
    { path: '/timesheetHistoryView', name: 'TimesheetHistoryView', component: TimesheetHistoryView },




];

export default routes;
