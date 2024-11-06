const employees = [
    {
        "id": 1,
        "firstName": "Suman",
        "email": "e@e.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Design Homepage",
                "description": "Create a mockup for the homepage redesign",
                "date": "2024-11-03",
                "category": "design"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "title": "Fix Login Bug",
                "description": "Resolve the issue causing login failures for some users",
                "date": "2024-10-28",
                "category": "dev"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "title": "Research Competitor Features",
                "description": "Analyze features from competitors' products",
                "date": "2024-11-01",
                "category": "research"
            }
        ],
        "taskNumbers": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 2,
        "firstName": "Pratik",
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Implement Authentication",
                "description": "Set up user authentication for the new app",
                "date": "2024-11-02",
                "category": "dev"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "title": "Update Database Schema",
                "description": "Revise schema to include new user fields",
                "date": "2024-10-20",
                "category": "dev"
            },
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Create Wireframe",
                "description": "Design wireframes for new user dashboard",
                "date": "2024-11-05",
                "category": "design"
            }
        ],
        "taskNumbers": {
            "active": 2,
            "newTask": 2,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 3,
        "firstName": "Ramesh",
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": true,
                "title": "Backend API Integration",
                "description": "Connect frontend to backend API",
                "date": "2024-10-30",
                "category": "dev"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "title": "User Testing",
                "description": "Conduct user testing for prototype",
                "date": "2024-10-25",
                "category": "testing"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Update Documentation",
                "description": "Revise API documentation",
                "date": "2024-11-03",
                "category": "documentation"
            }
        ],
        "taskNumbers": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        }
    },
    {
        "id": 4,
        "firstName": "Sita",
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Design Marketing Material",
                "description": "Create designs for promotional materials",
                "date": "2024-11-04",
                "category": "design"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "title": "SEO Audit",
                "description": "Analyze website for SEO improvements",
                "date": "2024-10-22",
                "category": "marketing"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "title": "Fix Navbar Issue",
                "description": "Resolve bug with navbar on mobile view",
                "date": "2024-11-01",
                "category": "dev"
            }
        ],
        "taskNumbers": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 5,
        "firstName": "Gita",
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Create Social Media Plan",
                "description": "Outline content strategy for social media",
                "date": "2024-11-06",
                "category": "marketing"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "title": "Develop Onboarding Flow",
                "description": "Implement onboarding steps for new users",
                "date": "2024-11-04",
                "category": "dev"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "title": "Analyze Survey Data",
                "description": "Summarize feedback from recent surveys",
                "date": "2024-10-29",
                "category": "research"
            }
        ],
        "taskNumbers": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    }
];

const admin = [
    {
        "id": 1,
        "firstName": "Bishnu",
        "email": "admin@me.com",
        "password": "123"
    }
];



export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees))
    localStorage.setItem("admin", JSON.stringify(admin))
}



export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"));
    const admin = JSON.parse(localStorage.getItem("admin"));
    return { employees, admin }
}