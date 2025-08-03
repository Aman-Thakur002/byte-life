import sequelize from './db';
import Project from './models/project';
import Experience from './models/experience';
import { log } from './vite';

const projectsData = [
  {
    title: "Ribeez POS",
    description: "Restaurant management system processing 500+ daily orders across 30+ locations with 99.9% uptime.",
    technologies: ["Node.js", "MySQL", "BullMQ"],
    featured: true,
    metrics: { orders: "500+", locations: "30+", uptime: "99.9%" },
  },
  {
    title: "Spirestro SaaS",
    description: "Multi-tenant SaaS platform supporting 50+ restaurant entities with shared infrastructure and real-time analytics.",
    technologies: ["Multi-tenant", "Analytics", "BullMQ"],
    featured: true,
    metrics: { entities: "50+", jobs: "1000+", failure_rate: "<1%" },
  },
];

const experiencesData = [
  {
    company: "Spirehub Softwares Pvt. Ltd",
    position: "Backend Developer",
    location: "Noida, UP",
    startDate: "Jul 2024",
    endDate: null,
    description: [
      "Developed and maintained 15+ RESTful APIs serving 500+ daily requests with 99.8% uptime",
      "Optimized database queries by 73%, reducing average latency from 450ms to 120ms",
      "Implemented Redis caching, decreasing database load by 40% and improving response times by 60%",
      "Established CI/CD pipelines reducing release times by 25%"
    ],
    technologies: ["Node.js", "Express.js", "MySQL", "Redis", "Docker"],
    isCurrent: true,
  },
];

async function seed() {
  try {
    await sequelize.sync({ force: true }); // This will drop the tables and recreate them
    log('Database synchronized successfully.', 'seed');

    await Project.bulkCreate(projectsData);
    log('Projects seeded successfully.', 'seed');

    await Experience.bulkCreate(experiencesData);
    log('Experiences seeded successfully.', 'seed');

  } catch (error) {
    console.error('Error seeding the database:', error);
  } finally {
    await sequelize.close();
    log('Database connection closed.', 'seed');
  }
}

seed();
