function checkDay() {
    const today = new Date();
    const dayOfWeek = today.getDay();
  
    switch (dayOfWeek) {
      case 0:
        console.log("Easy like Sunday Mornings.");
        break;
      case 1:
        console.log("Tell me why, I don't like Mondays");
        break;
      case 2:
        console.log("Happy Tuesday! Stay at home and get to work");
        break;
      case 3:
        console.log("Happy Wednesday! Go to work, stay at work!");
        break;
      case 4:
        console.log("Thursday is almost Friday! Work from home. Stay at home. Do not pass GO.");
        break;
      case 5:
        console.log("Friday I'm in love!");
        break;
      case 6:
        console.log("Saturday! Satu-rday. Saturday! Sat-urday is alright for chilling!");
        break;
      default:
        console.log("Something went wrong. Unable to determine the day.");
    }
  }
  
  checkDay();
  