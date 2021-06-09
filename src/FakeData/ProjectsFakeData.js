import paintingBee from '../image/painting-bee-landing.png';
import foodAnywhere from '../image/food-anywhere-landing.png';
import quickDestination from '../image/quick-destination-landing.png';
import sportsTracker from '../image/sports tracker.png';
import teamSelection from '../image/team-selection-landing.png';
import cookingMaster from '../image/cooking-master-landing.png';

const ProjectsFakeData = [{
  "id": "1",
  "projectName": "Painting Bee",
  "image": paintingBee,
  "description": "It’s a website for a house painting company where both admin and users can add and see their contributions and update reviews, services, etc.",
  "tools": "React, Express JS, Node JS, React Router, Bootstrap 5.0, Mongodb, Firebase, heroku.",
  "liveSiteUrl": "https://painting-bee.web.app/",
  "githubClientURL": "https://github.com/iffatunnessa/painting-bee-client",
  "fullDetails": "This website is a complete website for a housing painting company.It is a react application with express js, node js. Mongodb has been used as database. Server is deployed in heroku and client side in firebase. Bootstrap 5.0 has been used for front - end. Features: 1. Responsive Home page with six sections: Header, About, Services, Previous Projects, Testimonial, and Footer. 2. Responsive Sticky Nav: Dropdown for mobile - view 3. Responsive About with d - flex : z- index has been used to overlap the component for min - width: 650px 4. Services: added by admin from admin panel, animation in icons, bootstrap cards 5. Projects: Bootstrap card with scaling image animation 6. Testimonial: review can be added by user, Carousel cards, 3 in a row for min - width: 600 and 1 in a row for max - width: 600 7. Footer: contained nav links as shortcuts, Social icons. n8. Dashboard: two separate view for admin and normal user in same dashboard. 9. Admin: can add new admin, manage order - list with dropdown button(pending, on going, done), manage lists, add service etc n10. Normal user: by clicking service can book by payment and adding info, can see status of bookings, can give review which will added in testimonials."
}, {
  "id": "2",
  "projectName": "Food Anywhere",
  "image": foodAnywhere,
  "description": "This site is created for an online food delivery service. It’s an ongoing project. A user can order food and an admin can add, delete and update the food list.",
  "tools": "React, Express JS, Node JS, React Router, Bootstrap 5.0, Mongodb, Firebase, heroku.",
  "liveSiteUrl": "https://food-anywhere-ded2b.web.app/",
  "githubClientURL": "https://github.com/iffatunnessa/food-anywhere-client",
  "fullDetails": "This website is an on going project. People can add their account via Google accounts. Also they can place their orders and checkout. But it works for a single food in checkout. They can see their previous orders also. An admin can add new products and delete them also. Payment method and all the things are not working yet. But I'll update this project latter."

}, {
  "id": "3",
  "projectName": "Quick Destination",
  "image": quickDestination,
  "description": "It’s a project where users can see the state, transportation cost, and the location of the vehicles on the map. Four kinds of transportation systems have been included with JSON.",
  "tools": "React, Javascript, ES6, React Router, Material UI, Rest API, Firebase",
  "liveSiteUrl": "https://quick-destination.web.app/",
  "githubClientURL": "https://github.com/iffatunnessa/quick-destination",
  "fullDetails": "This project is focused on firebase authentication system. A user can login with their google and facebook account. They can also add a new account manually. We are giving them four options for their destination and they can place their current and destination location manually."
}, {
  "id": "4",
  "projectName": "Sports Tracker",
  "image": sportsTracker,
  "description": "",
  "tools": "React, JavaScript, Material-UI",
  "liveSiteUrl": "https://keen-tesla-0bb9ba.netlify.app/",
  "githubClientURL": "https://github.com/iffatunnessa/sports-tracker",
  "fullDetails": "It is a project based on REST API. We can see all the details of Leagues which that external API has been provided. I set only two pictures, and gender icons for Male and Female Teams. In the footer area, I added three redirected social media platforms of the respective League."
}, {
  "id": "5",
  "projectName": "Team Selection",
  "image": teamSelection,
  "description": "",
  "tools": "React, JavaScript, Bootstrap 5.0",
  "liveSiteUrl": "https://romantic-newton-054366.netlify.app/",
  "githubClientURL": "https://github.com/iffatunnessa/team-selection-react",
  "fullDetails": "This project had been made to learn some basics of React and JavaScript. By clicking 'Add to team' button a player can be added and his dummy salary will be summed up to the total budget of this team. Also I added a list of players here. I had a future plan to add a delete button so that a player can be removed and team selection can be easier for the user."
}, {
  "id": "6",
  "projectName": "Cooking Master",
  "image": cookingMaster,
  "description": "",
  "tools": "JavaScript, Bootstrap 5.0, REST API",
  "liveSiteUrl": "https://iffatunnessa.github.io/cooking-master/",
  "githubClientURL": "https://github.com/iffatunnessa/cooking-master",
  "fullDetails": "This project is based on REST API and JavaScript. Searching by any word or letter shows some food items. By clicking any of the cards, the ingredients of that item will be popped up at the page. User can check or uncheck the ingredients while purchase or making that food."
}]
export default ProjectsFakeData;