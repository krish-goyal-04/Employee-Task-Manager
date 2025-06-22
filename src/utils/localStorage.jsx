const employees = [
  {
    id: 1,
    name: "Aarav Sharma",
    email: "employee1@example.com",
    password: "123",
    taskStats: {
      active: 2,
      completed: 1,
      newTask: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Fix login bug",
        description: "Resolve the issue with user login on Safari.",
        date: "2025-06-20",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Update docs",
        description: "Add recent API changes to the project documentation.",
        date: "2025-06-18",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Database backup",
        description: "Schedule and test weekly database backups.",
        date: "2025-06-22",
        category: "Maintenance",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 2,
    name: "Riya Mehta",
    email: "employee2@example.com",
    password: "123",
    taskStats: {
      active: 2,
      completed: 1,
      newTask: 2,
      failed: 1
    },
    tasks: [
      {
        title: "Write unit tests",
        description: "Cover 80% of the user module with tests.",
        date: "2025-06-21",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Refactor dashboard",
        description: "Improve code readability in the dashboard component.",
        date: "2025-06-17",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Client demo",
        description: "Prepare demo slides for the upcoming client meeting.",
        date: "2025-06-23",
        category: "Presentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Resolve merge conflict",
        description: "Fix conflicts in PR #2043",
        date: "2025-06-19",
        category: "Development",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 3,
    name: "Kabir Nair",
    email: "employee3@example.com",
    password: "123",
    taskStats: {
      active: 1,
      completed: 1,
      newTask: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Optimize images",
        description: "Compress all images for faster loading.",
        date: "2025-06-20",
        category: "Performance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Mobile UI fix",
        description: "Resolve overlapping issues on mobile devices.",
        date: "2025-06-21",
        category: "UI/UX",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 4,
    name: "Ishaan Verma",
    email: "employee4@example.com",
    password: "123",
    taskStats: {
      active: 1,
      completed: 1,
      newTask: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Integrate payment gateway",
        description: "Implement Razorpay integration.",
        date: "2025-06-19",
        category: "Development",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Security audit",
        description: "Run security checks on all routes and endpoints.",
        date: "2025-06-20",
        category: "Security",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Bug triage",
        description: "Classify and prioritize GitHub issues.",
        date: "2025-06-18",
        category: "Maintenance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 5,
    name: "Sneha Reddy",
    email: "employee5@example.com",
    password: "123",
    taskStats: {
      active: 2,
      completed: 1,
      newTask: 2,
      failed: 1
    },
    tasks: [
      {
        title: "Design review",
        description: "Review new design prototypes from the UI team.",
        date: "2025-06-21",
        category: "UI/UX",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Server logs analysis",
        description: "Analyze error patterns in recent server logs.",
        date: "2025-06-19",
        category: "Monitoring",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Training session",
        description: "Conduct session on Docker basics.",
        date: "2025-06-23",
        category: "Training",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Deploy hotfix",
        description: "Urgent fix for checkout flow.",
        date: "2025-06-18",
        category: "Development",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  }
];
const admin = 
 [ {
    id: 1,
    name:"Admin",
    email: "admin@example.com",
    password: "123"
  }]
;

export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage=()=>{
    const employeesData = JSON.parse(localStorage.getItem('employees'))
    const adminData = JSON.parse(localStorage.getItem('admin'))
    return {employeesData,adminData}
}