# FlameForge Platform

## Overview

FlameForge Platform is an open-source Genshin Impact API built with Node.js, Express, TypeScript, and MongoDB. The project provides structured JSON data for characters, weapons, and artifacts while also offering a dedicated administration dashboard for managing content without directly interacting with the database.

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

The result was FlameForge Platform.

---

## The Solution

To solve this problem, I built FlameForge Platform — a public REST API combined with a custom administration dashboard. The platform provides structured character, weapon, and artifact data through dedicated endpoints while allowing moderators to manage content through a graphical interface instead of directly interacting with the database.

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

- Cloudinary
- Render

---

## Architecture

The project follows a layered architecture that separates responsibilities across routes, controllers, and models. This structure improved maintainability and made it easier to add new functionality without tightly coupling different parts of the application.

The project currently contains:

- REST API layer
- Administrative dashboard
- Authentication system
- Role-based authorization
- Image management workflows
- Reporting system

If rebuilt today, I would migrate the project toward a modular layered architecture for better scalability and feature isolation.

---

## Building the Administration Dashboard

One of the most important goals of the project was reducing the need to interact directly with the database. To achieve this, I built a custom administration dashboard that allows moderators and administrators to manage API data through a graphical interface.

Key capabilities include:

- Character, weapon, and artifact management
- Bulk JSON uploads for batch data import
- Content editing and deletion
- Backup exports
- Search functionality across all data types

This allowed content updates to be performed directly from the dashboard while automatically updating the underlying API data.

## Authentication and Access Control

The platform uses session-based authentication combined with role-based access control (RBAC). Three roles were implemented:

- Administrator
- Moderator
- User

Access to administrative functionality is controlled entirely through server-side authorization checks, ensuring that sensitive dashboard features remain inaccessible to standard users.

Although sessions were appropriate for the project's scale, I would likely replace them with JWT-based authentication in a future version.

---

## Image Upload Pipeline

One of my favorite features was the Cloudinary-powered image upload system. Administrators can upload character, weapon, and artifact images directly from the dashboard. Uploaded assets are stored in organized Cloudinary folders and immediately become available for use within the API dataset.

The upload workflow includes:

- File validation before upload
- Upload processing and Cloudinary integration
- Preview generation on the dashboard
- Automatic public URL generation for use in API responses
- Error handling for malformed files

This eliminated the need for manually managing image assets.

---

## Challenges

### Maintaining Data Integrity During Editing

The most difficult challenge was ensuring that dashboard edits updated only the intended data. Since administrators could modify existing characters, weapons, and artifacts through the GUI, every update operation needed to preserve unrelated fields while safely applying changes to the targeted data.

Preventing accidental data corruption required careful validation and update handling throughout the dashboard.

### JSON Upload Validation

The platform supports importing both single objects and arrays through JSON uploads. This required strict validation to ensure malformed files never reached the database or affected public API responses.

Invalid structures are rejected before processing, helping maintain data consistency across the platform.

### Authorization in Server-Rendered Views

Because the dashboard is built using Handlebars server-side rendering, authorization needed to be enforced on the server rather than relying on client-side restrictions. Ensuring non-administrative users could not access protected views or functionality required additional routing and permission checks throughout the application.

### Deployment Constraints with Nodemailer

While deploying the application, I encountered platform-specific restrictions affecting email delivery functionality. This highlighted the importance of understanding deployment limitations and adapting application features for production environments.

## Key Features

- 15+ REST API endpoints for characters, weapons, and artifacts
- Custom administration dashboard built with Handlebars and Tailwind CSS
- Role-based access control with three permission tiers
- Session-based authentication with email verification
- Cloudinary image upload pipeline with preview and URL generation
- Bulk JSON import for batch data management
- Backup export functionality for all data types
- Reporting system for content and user activity
- Public API documentation
- Open-source codebase

---

## Lessons Learned

### Building the API is Only Half the Problem

The most valuable lesson from this project was realizing that building the API itself is only part of the challenge. Creating reliable tools for managing and maintaining data can be equally complex. The administration dashboard required careful consideration around content management, data integrity, authorization, and update workflows, ultimately becoming just as important as the API layer itself.

### Session-Based Authentication Tradeoffs

Implementing session-based authentication provided practical experience with managing user sessions, authorization, and access control. While sessions were a good fit for the project's requirements, the experience helped me better understand the tradeoffs between session-based and stateless authentication approaches and how those decisions can influence future system design.

---

## Future Improvements

- Migrate from a layered architecture to a modular layered architecture for improved scalability and feature isolation.
- Replace Express Validator with Zod to create a more maintainable and type-safe validation workflow.
- Replace session-based authentication with JWT-based authentication to simplify API consumption and support stateless authentication.
- Introduce a dedicated transactional email service for production email delivery and account verification workflows.
- Expand the API dataset to support newer Genshin Impact content and maintain long-term data relevance.

---

## Results

The final platform includes 15+ REST API endpoints, 80 character records, 179 weapon records, 44 artifact records, and over 300 total data records managed through a custom administration dashboard.

The platform was actively maintained by an administrator and moderator through the dashboard, validating the effectiveness of the content management tooling and eliminating the need for direct database interaction during routine updates.

One of the most successful features was the Cloudinary-powered image upload pipeline, which streamlined asset management by providing validation, direct uploads, organized storage, and immediate availability of uploaded content within the platform.

---

## Demo and Screenshots

![architecture_diagram](https://i.postimg.cc/G3ktFd4m/flameforge-architecture-complete.png)
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
