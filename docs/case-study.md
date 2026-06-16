# FlameForge API: Building a Public Game Data API with an Administrative Dashboard

## Overview

FlameForge is an open-source Genshin Impact API built with Node.js, Express, TypeScript, and MongoDB. The project provides structured JSON data for characters, weapons, and artifacts while also offering a dedicated administration dashboard for managing content without directly interacting with the database.

The primary goal was to eliminate the need for developers to scrape game data and build their own backend before creating community tools, websites, or personal projects. Instead, developers can consume a ready-to-use API and focus entirely on building their applications.

---

## The Problem

Developers creating Genshin Impact tools often need access to structured game data. Gathering this information typically requires scraping multiple sources, cleaning the data, designing a database, and maintaining the dataset over time.

I wanted to create a centralized data source that provided:

- Character information
- Weapon data
- Artifact information
- Public API access
- Administrative tools for content management

The result was FlameForge API.

---

## The Solution

To solve this problem, I built FlameForge API, a public REST API combined with a custom administration dashboard. The platform provides structured character, weapon, and artifact data through dedicated endpoints while allowing moderators to manage content through a graphical interface instead of directly interacting with the database.

Beyond serving API data, the project focused on simplifying long-term maintenance. Features such as role-based access control (RBAC), session-based authentication, JSON import workflows, content management tools, and Cloudinary-powered image uploads were implemented to create a secure and maintainable system for managing and distributing game data.

---

## Technical Stack

### Backend

- Node.js
- Express
- TypeScript
- MongoDB
- Express Session
- Express Validator
- Nodemailer

### Dashboard

- Handlebars (HBS)
- Tailwind CSS
- Vanilla JavaScript

### Third-Party Services

- Cloudinary (image uploads and storage)
- Render (deployment)

---

## Architecture

The project follows a layered architecture that separates responsibilities across routes, controllers, models.

This structure improved maintainability and made it easier to add new functionality without tightly coupling different parts of the application.

The project currently contains:

- REST API layer
- Administrative dashboard
- Authentication system
- Role-based authorization
- Image management workflows
- Reporting system
- Email verification flow

If rebuilt today, I would migrate the project toward a modular layered architecture for better scalability and feature isolation.

---

## Building the Administration Dashboard

One of the most important goals of the project was reducing the need to interact directly with the database.

To achieve this, I built a custom administration dashboard that allows moderators and administrators to manage API data through a graphical interface.

Key capabilities include:

- Character management
- Weapon management
- Artifact management
- Bulk JSON uploads
- Content editing
- Data deletion
- Backup exports
- Search functionality

This allowed content updates to be performed directly from the dashboard while automatically updating the underlying API data.

---

## Authentication and Access Control

The platform uses session-based authentication combined with role-based access control (RBAC).

Three roles were implemented:

- Administrator
- Moderator
- User

Access to administrative functionality is controlled entirely through server-side authorization checks, ensuring that sensitive dashboard features remain inaccessible to standard users.

Although sessions were appropriate for the project's scale, I would likely replace them with JWT-based authentication in a future version.

---

## Image Upload Pipeline

One of my favorite features was the Cloudinary-powered image upload system.

Administrators can upload character, weapon, and artifact images directly from the dashboard. Uploaded assets are stored in organized Cloudinary folders and immediately become available for use within the API dataset.

The upload workflow includes:

- File validation
- Upload processing
- Cloudinary integration
- Preview generation
- Automatic URL generation
- Error handling

This eliminated the need for manually managing image assets.

---

## Challenges

### Maintaining Data Integrity During Editing

The most difficult challenge was ensuring that dashboard edits updated only the intended data.

Since administrators could modify existing characters, weapons, and artifacts through the GUI, every update operation needed to preserve unrelated fields while safely applying changes to the targeted data.

Preventing accidental data corruption required careful validation and update handling throughout the dashboard.

### JSON Upload Validation

The platform supports importing both single objects and arrays through JSON uploads.

This required strict validation to ensure malformed files never reached the database or affected public API responses.

Invalid structures are rejected before processing, helping maintain data consistency across the platform.

### Authorization in Server-Rendered Views

Because the dashboard is built using Handlebars server-side rendering, authorization needed to be enforced on the server rather than relying on client-side restrictions.

Ensuring non-administrative users could not access protected views or functionality required additional routing and permission checks throughout the application.

### Deployment Constraints

A deployment challenge appeared when Render restricted SMTP functionality required for Nodemailer email delivery.

While email verification worked locally, deployment limitations required additional consideration when moving the project into production environments.

---

## Results

The final platform includes:

- 15+ REST API endpoints
- 80 character records
- 179 weapon records
- 44 artifact records
- 300+ total data records
- Administrative dashboard
- Role-based access control
- Cloudinary image management
- Public documentation
- Open-source codebase

The system was actively managed by an administrator and moderator through the dashboard, demonstrating the viability of the administrative tooling beyond development use.

---

## What I Learned

This project significantly improved my understanding of:

- Backend architecture
- Authentication and authorization
- Data validation
- Administrative tooling
- API design
- File upload workflows
- Debugging complex state changes
- Server-side rendering

More importantly, it taught me that building the API is often only half the problem. Creating reliable tooling for managing and maintaining data can be just as challenging as building the API itself.

## Demo and Screenshots

![register](https://i.postimg.cc/qvrdTv9j/dashboard-register.png)
![login](https://i.postimg.cc/zGkYX1N5/dashboard-login.png)
![character](https://i.postimg.cc/W4KWs9dT/dashboard-characters.png)
![artifact](https://i.postimg.cc/MGX32kK9/dashboard-weapons.png)
![weapon](https://i.postimg.cc/MGX32kK9/dashboard-weapons.png)
![imgUploader](https://i.postimg.cc/KjtsqnvF/dashboard-image-uploader.png)
![adminControl](https://i.postimg.cc/sfW8gRP8/dashboard-admin-control.png)
![editCharacter](https://i.postimg.cc/dVwgfSyf/admin-control-edit-character.png)
![editWeapon](https://i.postimg.cc/3JgPnHdp/admin-control-edit-weapon.png)
![editArtifact](https://i.postimg.cc/v86Rxny0/admin-control-edit-artifacts.png)
![home](https://i.postimg.cc/4NT0KFB3/dashboard-home.png)
![people](https://i.postimg.cc/jdVpHjdt/dashboard-people.png)
![settings](https://i.postimg.cc/Px9BFXWb/dashboard-settings.png)
![report](https://i.postimg.cc/3JmHVvbk/report.png)
![documentation](https://i.postimg.cc/43NkYF4c/documentation.png)
