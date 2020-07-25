export default {
    items: [
        {
            name: 'Dashboard',
            url: '/dashboard',
            icon: 'icon-speedometer',
        },
        {
            name: 'Profile',
            url: '/empProfile',
            icon: 'icon-user',
        },
        {
            name: 'Leave',
            icon: 'icon-envelope-letter',
            children: [
                {
                    name: 'Leave Request',
                    url: '/leaveRequest',
                    icon: 'icon-envelope-letter',
                },
                {
                    name: 'Leave Status',
                    url: '/leaveStatus',
                    icon: 'icon-envelope-open',
                },
                {
                    name: 'Leave History',
                    url: '/leaveHistoryView',
                    icon: 'icon-envelope-open',
                },
            ]
        },
        {
            name: 'Time Sheet',
            icon: 'icon-note',
            children: [
                {
                    name: 'Add Timesheet',
                    url: '/addTimesheet',
                    icon: 'icon-note',
                },
                /*  {
                   name: 'View Timesheet',
                   url: '/leaveStatus',
                   icon: 'icon-puzzle',
                 }, */
            ]
        },

    ],
};
