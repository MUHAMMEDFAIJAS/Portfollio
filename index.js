function sendmail() {
    var params = {
       name: document.getElementById("name").value,
       email: document.getElementById("email").value,
       messege: document.getElementById("message").value,
    };
    const serviceID = "service_5bzwvro";
    const templateID = "template_zhajgij";
 
    emailjs
       .send(serviceID, templateID, params)
       .then((res) => {
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message was sent successfully");
       })
       .catch((err) => console.log(err));
 
    return false; // Prevent the default form submission behavior
 }
 
 document.getElementById("contactForm").addEventListener("submit", sendmail);
 