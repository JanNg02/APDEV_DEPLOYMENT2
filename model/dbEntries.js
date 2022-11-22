const User = require('./usersSchema');
const Product = require('./productsSchema');
const Order = require('./orderSchema');
const bcrypt = require("bcrypt") ;

const addEnrty = {

    newUser1: async function () {
        const hashedPassword = await bcrypt.hash("password1", 10);
        var newUser = {
            name: "Kyla dela Cruz",
            address: "Caloocan City",
            username: "kawaiiwa",
            password: hashedPassword,
            contact_no: "09124562398"
          
        };
        User.create(newUser, err => {
            if (err) console.log(err);
        });
    },

    newUser2: async function () {
        const hashedPassword = await bcrypt.hash("password2", 10);

        var newUser = {
            name: "Arrow De Ocampo",
            address: "Pasay City",
            username: "greenarw",
            password: hashedPassword,
            contact_no: "09569841576"
        };
        User.create(newUser, err => {
            if (err) console.log(err);
        });
    },

    newUser3: async function () {
        const hashedPassword = await bcrypt.hash("password3", 10);
        var newUser = {
            name: "Nathalia Davidson",
            address: "Taguig City",
            username: "nath01",
            password: hashedPassword,
            contact_no: "09152346310"
        };
        User.create(newUser, err => {
            if (err) console.log(err);
        });
    },

    newUser4: async function () {
        const hashedPassword = await bcrypt.hash("password4", 10);
        var newUser = {
            name: "Jason Derulo",
            address: "Laguna City",
            username: "jayzone",
            password: hashedPassword,
            contact_no: "09204897521"
        };
        User.create(newUser, err => {
            if (err) console.log(err);
        });
    },

    newUser5: async function () {
        const hashedPassword = await bcrypt.hash("password5", 10);
        var newUser = {
            name: "Romina Quizon",
            address: "Ilocos City",
            username: "cutiee314",
            password: hashedPassword,
            contact_no: "09169532875"
        };
        User.create(newUser, err => {
            if (err) console.log(err);
        });
    },

    newProduct1: function () {
        var newProduct = {
            name: "Alleryease",
            category:"Allergy",
            price: 900,
            stock: 10,
            description:"Animal Science Allergy Ease Chewable helps support normal respiratory function and health in dogs with a potent combination of antioxidants and omega fatty acids. It also supports the immune system and assists the body in combating environmental pollutants. Canine allergies are quite common and occur when a dog`s immune system overreacts to foreign substances (allergens and antigens) to which it’s exposed. There are 5 types of dog allergies: food allergy, flea allergy, bacterial allergy, contact allergy, and inhalant allergy (atopy). Atopy is the most common of all dog allergies and is caused by environmental factors, such as dust mites, molds, house dust, human dander, feathers, or pollen. Allergies are manifested in three ways. The most common is itching of the skin, either in one area (localized) or all over (generalized). Another manifestation involves the respiratory system and often results in coughing, sneezing, and or wheezing. The third manifestation involves the digestive system, resulting in vomiting or diarrh", 
            pic: "allergyease.jpg"
        };
        Product.create(newProduct, err => {
            if (err) console.log(err);
        });
    },

    newProduct2: function () {
        var newProduct = {
            name: "Revolution Plus",
            category:"Medicine",
            price: 133.99,
            stock: 10,
            description: "Help protect your four-legged friend from pesky critters with this 6-in-1 broad spectrum monthly Topical Solution for Cats by Revolution Plus. Simply apply the quick-drying, small-volume prescription to help: kill fleas before they lay eggs, kill ticks for a full month, prevent heartworm disease and treat and control roundworms, hookworms and ear mites. This topical medication is suitable for cats and kittens eight weeks of age or older, weighing between 11.1 and 22 pounds.",
            pic: "catMed.png"
        };
        Product.create(newProduct, err => {
            if (err) console.log(err);
        });
    },

    newProduct3: function () {
        var newProduct = {
            name: "Heartgard",
            category:"Maintenance",
            price: 67.99,
            stock: 10,
            description: "For use in animals only. Heartgard Plus Chew for Dogs, 51-100 lbs. is a heartworm preventative that kills heartworms and also helps treat and control roundworms and hookworms. It comes in a delicious once-a-month, real-beef chew that dogs love and is safe for puppies 6 weeks and older. Head back to the dog park, reassured that your dog is protected from nasty parasites with this heartworm preventative that's trusted over 2 billion times! Your furry friend must have a current heartworm test result on file with your veterinarian in order to be prescribed heartworm medication. Please visit your veterinarian to have this test performed annually to protect your four-legged friend. Proudly sourced directly from the manufacturer or their approved distributor. Guaranteed genuine and backed by the manufacturer.", 
            pic: "heartgard.jpg"
        };
        Product.create(newProduct, err => {
            if (err) console.log(err);
        });
    },

    newProduct4: function () {
        var newProduct = {
            name: "Nexgard",
            category:"Ticks and Fleas",
            price: 72.99,
            stock: 10,
            description: "NexGard Chews for Dogs, 4-10 lbs. are vet-recommended and FDA-approved to kill adult fleas fast before they have a chance to lay eggs. This product is also FDA-approved to help prevent Lyme infections as a direct result of killing black-legged ticks. Each fast-acting chew provides safe and effective protection, killing fleas and ticks for a full month. And the chews are easy to give because dogs love the delicious beef flavor—you may even give them to your dog with or without food! Each NexGard bite-sized monthly dose is gentle enough to give to puppies and dogs as young as 8 weeks, weighing as little as 4 pounds.", 
            pic: "nexgard.png"
        };
        Product.create(newProduct, err => {
            if (err) console.log(err);
        });
    },

    newProduct5: function () {
        var newProduct = {
            name: "Simparica",
            category:"Ticks and Fleas",
            price: 161.41,
            stock: 10,
            descriptioin: "Help your furry friend fight off pests with Simparica Trio Chewable Tablets for Dogs! Every purchase comes with 6 treatments that are specially formulated for canine companions 8 weeks of age and older, weighing between 44.1 and 88 pounds. Simparica Trio is the first and only product that combines sarolaner, moxidectin and pyrantel in each treatment to help prevent heartworm disease, kill fleas before they can lay eggs, kill 5 types of ticks, treat and prevent flea infestations and treat and control roundworms and hookworms. And each monthly chewable tablet has a palatable liver flavor and can be taken with or without food!", 
            pic: "simparica.jpg"
        };
        Product.create(newProduct, err => {
            if (err) console.log(err);
        });
    },

    newOrder1: function () { 
        const dateNow = new Date();
        const date = dateNow.toDateString() + " " + dateNow.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        var newOrder = {
            pname: ["Heartgard"],
            username: "kawaiiwa",
            date: date,
            price: 677.99,
            items: 1,
            payment: "Gcash",
        }
        Order.create(newOrder, err => {
            if (err) { console.log(err); }
        });
    },

    newOrder2: function () { 
        const dateNow = new Date();
        const date = dateNow.toDateString() + " " + dateNow.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        var newOrder = {
            pname: ["Heartgard", "catMed"],
            username: "kawaiiwa",
            date: date,
            price: 811.98,
            items: 2,
            payment: "Gcash",
        }
        Order.create(newOrder, err => {
            if (err) { console.log(err); }
        });
    },

    newOrder3: function () { 
        const dateNow = new Date();
        const date = dateNow.toDateString() + " " + dateNow.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        var newOrder = {
            pname: ["allergyease", "Nexgard"],
            username: "kawaiiwa",
            date: date,
            price: 972.99,
            items: 2,
            payment: "Gcash",
        }
        Order.create(newOrder, err => {
            if (err) { console.log(err); }
        });
    },

    newOrder4: function () { 
        const dateNow = new Date();
        const date = dateNow.toDateString() + " " + dateNow.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        var newOrder = {
            pname: ["Simparica"],
            username: "kawaiiwa",
            date: date,
            price: 484.23,
            items: 3,
            payment: "Gcash",
        }
        Order.create(newOrder, err => {
            if (err) { console.log(err); }
        });
    },

    newOrder5: function () { 
        const dateNow = new Date();
        const date = dateNow.toDateString() + " " + dateNow.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        var newOrder = {
            pname: ["Heartgard"],
            username: "kawaiiwa",
            date: date,
            price: 677.99,
            items: 1,
            payment: "Gcash",
        }
        Order.create(newOrder, err => {
            if (err) { console.log(err); }
        });
    },


}
module.exports = addEnrty;