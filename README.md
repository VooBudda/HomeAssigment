# Web Test Automation - Test Task
### General requirements

- Install a git client such as [git bash](https://git-scm.com/downloads)

Download and install

- Latest version of [Node.js](https://nodejs.org/es/download/)
- Java Development Kit [(JDK)](https://www.oracle.com/java/technologies/downloads/)
  - Make sure you have the environment variable **JAVA_HOME** set to the path of the respective JDK. **(Required for Allure report generation)**.

### Installation of the testing framework

#### **Clone the repository:**

    git clone https://github.com/VooBudda/HomeAssigment.git

#### **Install dependencies.**

    npm install

#### **To run the tests go to the root of the project and run (headless mode)**

    npm run test

#### **To run the tests go to the root of the project and run (headed mode)**

    npm run test-head
#### **To open Playwright's unified Html report of test results**

    npm run play-report

#### **To create and open the Allure unified report of test results**

    npm run open-report

#### **IMPORTANT**

After each upgrade of **Playwright**, the project must be restarted locally with the command:

    npm run reinstall

To download the latest versions of the Browsers.
