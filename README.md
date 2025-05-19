**COMPANY: CODETECH IT SOLUTIONS
NAME: Pravalika Lakkam
INTERN ID:CT06DA407
DOMAIN:FULL STACK DEVELOPMENT
DURATION: 6 WEEKS
MENTOR: NEELA SANTOSH**
 **task-4:chrome extension**

The Time Tracker & Productivity Analyzer is a Chrome Extension built to help users monitor their browser usage and analyze how much time
they spend on productive versus unproductive websites. With the rise of remote work and online learning, people often struggle to stay
focused, and this tool offers a simple, automated solution for self-monitoring and time management.

This project consists of two main components: a Chrome Extension (frontend) and a Node.js + Express backend connected to a MongoDB database.
The extension runs in the browser and listens for tab activity using Chrome's extension APIs. Whenever the user switches tabs or navigates 
to a new page, the extension calculates the time spent on the previous tab and sends that information—along with the URL and a productivity
flag—to the backend server.

The logic for determining whether a site is productive is based on a hardcoded list of educational and developer-focused platforms such as 
GitHub, Stack Overflow, GeeksforGeeks, W3Schools, HackerRank, and LeetCode. If the visited URL matches one of these, it’s marked as productive;
otherwise, it’s considered unproductive.

The backend exposes two main API endpoints. The POST /api/data endpoint receives time tracking data from the extension and stores it in the 
MongoDB database using a Mongoose model. The GET /api/summary endpoint aggregates the stored data and returns the total time spent on productive
and unproductive sites. This information is then displayed on the extension's popup dashboard, giving the user a quick and easy overview of 
their daily productivity.

The extension's popup UI is minimal and straightforward. When clicked, it fetches the summary data from the server and displays it in a readable 
format, showing how many seconds were spent productively versus unproductively. This visual feedback helps users become more aware of their online
habits and can motivate them to make better use of their time. 

Overall, the Time Tracker & Productivity Analyzer is a practical and extensible tool that brings together browser automation and data analytics to
help users improve their digital productivity.

# output
![Image](https://github.com/user-attachments/assets/f250ce62-acd2-41c5-91d7-452528820c31)

