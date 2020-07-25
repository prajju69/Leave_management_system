import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard/Dashboard'));

const AddEmployee = React.lazy(() => import('./views/Admin/AddEmployee/AddEmployee'));
const EmployeeList = React.lazy(() => import('./views/Admin/EmployeeList/EmployeeList'));
const EditEmployee = React.lazy(() => import('./views/Admin/EditEmployee/EditEmployee'));
const ViewEmployee = React.lazy(() => import('./views/Admin/ViewEmployee/ViewEmployee'));


const AddLeaveType = React.lazy(() => import('./views/Admin/AddLeaveType/AddLeaveType'));
const LeaveTypesList = React.lazy(() => import('./views/Admin/LeaveTypeList/LeaveTypeList'))
const EditLeaveType = React.lazy(() => import('./views/Admin/EditLeaveType/EditLeaveType'));

const CompanyAddHoliday = React.lazy(() => import('./views/Admin/CompanyAddHoliday/CompanyAddHoliday'));
const CompanyHolidayList = React.lazy(() => import('./views/Admin/CompanyHolidayList/CompanyHolidayList'));

const AddNotification = React.lazy(() => import('./views/Admin/AddNotification/AddNotification'));
const NotificationView = React.lazy(() => import('./views/Employee/NotificationView/NotificationView'));

const Calender = React.lazy(() => import('./views/Admin/CalenderView/EditorCustomField'));

const LeaveRequestList = React.lazy(() => import('./views/HR/LeaveRequestList/LeaveRequestList'));
const LeaveRequestView = React.lazy(() => import('./views/HR/LeaveRequestView/LeaveRequestView'));

const TimesheetView = React.lazy(() => import('./views/HR/TimeSheetView/TimeSheetView'))
const TimesheetHistoryView = React.lazy(() => import('./views/HR/TimesheetHistoryView/TimesheetHistoryView'))




// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },

  { path: '/dashboard', name: 'Dashboard', component: Dashboard },

  { path: '/addEmployee', name: 'Add Employee', component: AddEmployee },
  { path: '/employeeList', name: 'Employee List', component: EmployeeList },
  { path: '/editEmployee/:id', name: 'Edit Employee', component: EditEmployee },
  { path: '/viewEmployee/:id', name: 'View Employee', component: ViewEmployee },

  { path: '/addLeaveType', name: 'Add LeaveType', component: AddLeaveType },
  { path: '/leaveTypeList', name: 'LeaveType List', component: LeaveTypesList },
  { path: '/editLeaveType', name: 'Update LeaveType', component: EditLeaveType },

  { path: '/companyAddHoliday', name: 'Company AddHoliday', component: CompanyAddHoliday },
  { path: '/companyHolidayList', name: 'Company HolidayList', component: CompanyHolidayList },

  { path: '/addnotification', name: 'Add Notification', component: AddNotification },
  { path: '/notificationsview', name: 'NotificationsView', component: NotificationView },

  { path: '/calender', name: 'calender', component: Calender },


  { path: '/leaveRequestList', name: 'LeaveRequest Details', component: LeaveRequestList },
  { path: '/leaveRequestView', name: 'LeaveRequest View', component: LeaveRequestView },

  { path: '/timesheetview', name: 'TimesheetView', component: TimesheetView },
  { path: '/timesheetHistoryView', name: 'TimesheetHistoryView', component: TimesheetHistoryView },



];

export default routes;
