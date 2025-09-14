# Civic Connect

A mobile application that connects citizens with local government to report and track civic issues.

## Overview

Civic Connect is a React Native application built with Expo that allows citizens to report issues in their community (such as potholes, broken street lights, etc.) and track their resolution. The application also provides an admin interface for government officials to manage and respond to reported issues.

## Features

### Citizen Features

- User authentication (login, signup, forgot password)
- Report new issues with details, location, and photos
- Track status of reported issues
- View issues on a map
- View a feed of community issues
- User profile management

### Admin Features

- Dashboard with issue statistics and analytics
- Manage and update issue status
- View issues on a map
- Analytics and reporting tools
- Admin profile management

## Project Structure

```
├── App.js                 # Main application entry point
├── package.json           # Project dependencies
└── src/                   # Source code
    ├── assets/            # Images and other static assets
    ├── components/        # Reusable UI components
    ├── navigation/        # Navigation configuration
    ├── screens/           # Application screens
    │   ├── admin/         # Admin-specific screens
    │   ├── auth/          # Authentication screens
    │   └── citizen/       # Citizen-specific screens
    ├── theme/             # Theme configuration
    └── utils/             # Utility functions
```

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- Expo CLI

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```
3. Start the development server:
   ```
   npm start
   ```
   or
   ```
   yarn start
   ```

## Technologies Used

- React Native
- Expo
- React Navigation
- React Native Paper
- React Native Maps (placeholder in this version)

## Future Enhancements

- Integration with real map services
- Push notifications
- Real-time updates
- Chat functionality between citizens and administrators
- Analytics dashboard improvements
- Integration with backend services