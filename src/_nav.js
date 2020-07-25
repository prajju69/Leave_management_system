export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
    },
    {
      name: 'Employee',
      icon: 'icon-people',
      children: [
        {
          name: 'Add Employee',
          url: '/addEmployee',
          icon: 'icon-people',
        },
        {
          name: 'View Employees',
          url: '/employeeList',
          icon: 'icon-people',
        },
        /* {
          name: 'Update Employee',
          url: '/editEmployee',
          icon: 'icon-people',
        }, */
      ]
    },
    {
      name: 'Leave Types',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Add LeaveType',
          url: '/addLeaveType',
          icon: 'icon-puzzle',
        },
        {
          name: 'View LeaveType',
          url: '/leaveTypeList',
          icon: 'icon-puzzle',
        },
        /*  {
           name: 'Update LeaveType',
           url: '/editLeaveType',
           icon: 'icon-puzzle',
         }, */
      ]
    },
    {
      name: 'Holidays',
      icon: 'icon-calendar',
      children: [
        {
          name: 'Add Holiday',
          url: '/companyAddHoliday',
          icon: 'icon-calendar',
        },
        {
          name: 'Holiday List',
          url: '/companyHolidayList',
          icon: 'icon-calendar',
        },
      ]
    },
    {
      name: 'Notifications',
      icon: 'icon-bell',
      children: [
        {
          name: 'Send Notification',
          url: '/addnotification',
          icon: 'icon-bell',
        },
        {
          name: 'Notification List',
          url: '/notificationsview',
          icon: 'icon-bell',
        },
      ]
    },
    {
      name: 'Calender',
      url: '/calender',
      icon: 'icon-calendar',
    },


    /* {
      name: 'Leave Requests',
      url: '/leaveRequestList',
      icon: 'icon-envelope-letter',
    },
    {
      name: 'LeaveRequest View',
      url: '/leaveRequestView',
      icon: 'icon-envelope-open',
    },
    {
      name: 'TimeSheet View',
      url: '/timesheetview',
      icon: 'icon-note',
    },
    {
      name: 'TimeSheetHistory View',
      url: '/timesheetHistoryView',
      icon: 'icon-note',
    },
 */

  ],
};
