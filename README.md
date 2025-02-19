# LaunchDarkly Demo App

This project is a React-based demo application that demonstrates the integration of LaunchDarkly for feature flagging, experimentation, and user context management. It uses Material UI for styling and includes various components to showcase how feature flags and experiments can be used to control user experiences and feature rollouts.

**Included Launchdarkly Features:**
- Flags
  - User Level Rules
  - Segment Level Rules 
- Segments 
- Contexts 
- Streaming changes 
- Metrics 
- Experiments

## Table of Contents

- [Features](#features)
- [Usage](#usage)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [LaunchDarkly Configuration](#launchdarkly-configuration)
    - [Required Feature Flags](#required-feature-flags)
    - [Experiment Configuration](#experiment-configuration)
- [Running the App](#running-the-app)
- [License](#license)


## Features
**Included Launchdarkly tools:**
Flags
- User Level Rules
- Segment Level Rules
Segments
Contexts
Streaming changes
Metrics
Experiments

**User Switcher:**  
  Switch between predefined user profiles loaded from a JSON file. When a user is selected, the LaunchDarkly context is updated in real time using `ldClient.identify()`. Certain features are available only to specific segments—configured in LaunchDarkly based on subscription tiers. For example, users with a "premium" subscription may have access to additional features that are hidden from free users.

**Real-Time Streaming:**  
  The app uses LaunchDarkly’s streaming mode to receive instantaneous flag updates. This means that when you enable or disable a feature—such as releasing a beta dashboard via the LaunchDarkly dashboard—changes are applied immediately without requiring a page reload.

**Settings Drawer:**  
  View user details (Name, Email, Subscription Tier) in read-only mode and toggle additional settings. Changes update both the current user state and the global users list, with updates sent to LaunchDarkly.

**Feature Flags:**  
  The app uses several feature flags in LaunchDarkly to control functionality:
    - `demo-modal-varient` for the modal experiment.
    - `analytics-access` for controlling access to analytics features.
    - `beta-dashboard` for toggling the new beta dashboard.
    - `new-ai-feature` for activating a new AI feature.
    - `order-access` for managing access to order-related functionality.

**Segments:**  
  **"Business Users"** and **"Premium Users"**. These segments enable targeted features based on subscription tiers, ensuring that specific features are only available to the appropriate user groups.

**Demo Modal Experiment:**  
A modal displays on site load (or via an info icon in the NavBar) that explains the demo. Its content is controlled by the `demo-modal-variant` flag, which uses a 50/50 A/B split. The modal is split into two variants—`ModalVariantA` (detailed) and `ModalVariantB` (simplified)—and includes two feedback buttons ("This is helpful" and "Not helpful") that fire custom events for experiment tracking.

## Usage

**Live Demo:**
https://main--ld-demo-app.netlify.app/

**User Switcher:**  
Use the dropdown in the NavBar to switch between predefined user profiles. When you select a different user, the app immediately updates the LaunchDarkly context, ensuring that features are evaluated according to the selected user's attributes and subscription tier.

**Settings Drawer:**  
Open the Settings Drawer (via the settings icon) to view the current user's details such as Name, Email, and Subscription Tier. Here, a user can enable the new AI feature.  
**Note:** The flag for the new AI feature will be reset to false when the page is refreshed or the app is reopened.

**Demo Modal Experiment:**  
On app launch (or when triggered by the info icon in the NavBar), a demo modal will appear. This modal's content is controlled by the `demo-modal-varient` flag and will display one of two variants (detailed or simplified) based on a 50/50 traffic split.

**Feedback Buttons:**  
The modal includes two buttons—"This is helpful" and "Not helpful." Clicking on "This is helpful" fires a custom event (`demoModalFeedback` with a property `feedback` set to `"helpful"`), which is tracked as a conversion metric in the experiment.  
Use this feedback to evaluate which modal variant offers a better user experience.

**Real-Time Updates:**  
Thanks to LaunchDarkly’s streaming mode, any changes made via the LaunchDarkly dashboard (e.g., toggling feature flags such as `beta-dashboard`) are applied immediately without requiring a page reload.

**Segment-Based Feature Access:**  
The app is configured to use specific segments (Business Tier and Premium Tier). Certain features (like `order-access` and `analytics-access`) will only be available based on the user's subscription tier as defined in LaunchDarkly.


## Prerequisites

- [Node.js](https://nodejs.org/) (v12 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- A [LaunchDarkly](https://launchdarkly.com/) account to set up and manage feature flags, segments, and experiments.

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/lanceRobinson/ld-demo-app.git
   cd ld-demo-app

2. **Install Dependencies**

Using npm:
   ```bash
   npm install
   ```
  Using NPM:
  ```bash
  yarn install
  ```

3. **Configure Environment Variables**

Create a .env file in the root directory with your LaunchDarkly client-side ID:
  ```bash
  REACT_APP_LAUNCHDARKLY_CLIENT_ID=your-client-side-id-here
  ```
4. **Start the Application**

Using npm:
   ```bash
   npm start
   ```
Using NPM:
  ```bash
  yarn start
  ```

## LaunchDarkly Configuration

### 1. Required Segments

Before setting up the feature flags and experiments, ensure that the following user segments are configured in your LaunchDarkly account. These segments allow you to target features based on subscription tiers.

- **Business Tier**
  - **Segment Name:** Business Tier
  - **Rule:** Target contexts where the user’s subscription tier equals "Business".  
    _Example:_ `user.tier equals "Business"`

- **Premium Tier**
  - **Segment Name:** Premium Tier
  - **Rule:** Target contexts where the user’s subscription tier equals "Premium".  
    _Example:_ `user.tier equals "Premium"`

### 2. Required Feature Flags

Configure the following feature flags in your LaunchDarkly account with the targeting rules below:

- **`demo-modal-varient`**
  - Quick side note, I know I spelled variant wrong, but this would have been a headache to change because it is tied to a bunch of stuff so...sorry.
  - **Type:** String
  - **Variations:**
    - `"A"` – Detailed modal variant
    - `"B"` – Simplified modal variant
  - **Rollout:** Configure a 50/50 percentage split so that half the users receive Variation A and half receive Variation B.
  - **Usage:** Controls which modal variant is displayed in the Demo Modal Experiment.

- **`analytics-access`**
  - **Type:** Boolean
  - **Variations:** `true` and `false`
  - **Targeting Rule:**
    - Return `true` if the context is in the **Premium Tier** segment.
  - **Usage:** Enables or disables access to enhanced analytics features within the app.

- **`beta-dashboard`**
  - **Type:** Boolean
  - **Variations:** `true` and `false`
  - **Usage:** Toggles the display of the new beta dashboard. With LaunchDarkly’s streaming mode, enabling this flag will immediately release the beta dashboard to targeted users.

- **`new-ai-feature`**
  - **Type:** Boolean
  - **Variations:** `true` and `false`
  - **Targeting Rule:**
    - Return `true` if the user attribute `aiBeta` is set to `true`.
  - **Usage:** Activates a new AI-driven feature within the app.

- **`order-access`**
  - **Type:** Boolean
  - **Variations:** `true` and `false`
  - **Targeting Rule:**
    - Return `true` if the context is in either the **Premium Tier** or the **Business Tier** segments.
  - **Usage:** Controls whether users have access to order-related functionality in the app.

### 3. Experiment Configuration

#### Demo Modal Experiment

1. **Flag Setup:**  
   Ensure the `demo-modal-varient` flag is configured as described above.

2. **Create the Experiment:**
  - Navigate to the **Experiments** section in your LaunchDarkly dashboard.
  - Create a new experiment and select the `demo-modal-varient` flag.
  - Configure the experiment to split traffic 50/50 between Variations A and B.

3. **Define the Conversion Metric:**
  - **Metric Name:** Modal Helpful Conversion
  - **Metric Type:** Custom Event Metric
  - **Event Name:** `demoModalFeedback`
  - **Event Filter:** Configure the metric to count only those events where the property `feedback` equals `"helpful"`. This will track when users click the "This is helpful" button.

4. **Launch and Monitor:**
  - Set the experiment's start (and optionally end) dates.
  - Activate the experiment.
  - Monitor exposures and conversion rates via the LaunchDarkly dashboard to compare the performance of each modal variant.

## Running the App

After completing the installation and configuring your environment variables, you can start the development server:

Using npm:
```bash
npm start
```
or using Yarn:

```bash
yarn start
```

The application will launch on http://localhost:3000 by default. When you open the app in your browser, you should see:

The NavBar with different application features, the User Switcher, the settings icon and an info icon.  
The Demo Modal experiment, which displays one of two modal variants based on the demo-modal-variant flag.

The Settings Drawer, where you can view user details and toggle settings.

