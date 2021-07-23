setInterval(() => {

fetch('http://www.boredapi.com/api/activity/')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const myActivity = data.activity;
            const participants = data.participants;          
            const type = data.type;
            const myKey = data.key;
            const myLink = data.link;
            const accessibility = data.accessibility;
            const price = data.price;
         console.log(myLink)

            myFunction(myActivity,participants,myLink,type,myKey,accessibility,price);

        });


        const myFunction = (myActivity,participants,myLink,type,myKey,accessibility,price) =>{
             
            document.querySelector("#activites").innerHTML =`" ${myActivity} "`;
            document.querySelector("#type").innerHTML = type;
            document.querySelector("#price").innerHTML = price;
            document.querySelector("#accessibility").innerHTML = accessibility;
            document.querySelector("#participants").innerHTML = participants;
            document.querySelector("#key").innerHTML = myKey;
            const activitiesLink = document.querySelector("#my-link");

            if (myLink != "") {
                activitiesLink.innerHTML = myLink;
                activitiesLink.style.color = "green"
            } else {
                activitiesLink.innerHTML = `Sorry..!!! This activities has no link.`;
                activitiesLink.style.color = "red";
            }
            
        }
        
       
            
        }, 4000);