import {test, expect} from '@playwright/test'


let petId;

//add new pet to store
test("Add pet", async({request})=>{

    const url = "https://petstore3.swagger.io/api/v3/pet"
    const response = await request.post(url, {
        data: {
                "id": 11,
                "name": "pet-insighture",
                "photoUrls": [
                  "string"
                ],
                "tags": [
                  {
                    "id": 0,
                    "name": "string"
                  }
                ]
              
            },
        
        headers: {
            "accept": "application/json",
            "Content-Type": "application/json"
        }
    })

    const res = await response.json();
    petId = res.id;

    expect(await response.status()).toBe(200);
})


//Get the pet from using filter
test("Find pet from the status", async({request})=>{

    const url = "https://petstore3.swagger.io/api/v3/pet/findByStatus?status=pending"
    const response = await request.get(url);

    const result = await response.json();
    const mappedResults = result.map(res=>res.id);
    console.log(mappedResults);

    expect(await response.status()).toBe(200);
})


//updating existing pet
test("Update Pet", async({request})=>{
    const url = "https://petstore3.swagger.io/api/v3/pet";
    
    const response = await request.put(url, {
        data: {
            "id": 11,
            "name": "pet-ddbaby",
            "photoUrls": [
              "string"
            ],
            "tags": [
              {
                "id": 0,
                "name": "string"
              }
            ]
          
        },
    
        headers: {
            "accept": "application/json",
            "Content-Type": "application/json"
        }
    })

    //expect(await response.status()).toBe(200);

     const res = await response.json();
     const resId = res.id;
})


//delete selected Pet
test("Delete a Pet", async({request})=>{
    const url = "https://petstore3.swagger.io/api/v3/pet/11"
    const response = await request.delete(url);

    expect(await response.status()).toBe(200);
    expect(await response.text() === "Pet deleted").toBeTruthy();
})



// test.only("login", async({page})=>{
//     await page.goto("https://rahulshettyacademy.com/client/auth/login");

//     const userName = await page.locator('id="userEmail"').fill("amaan");
//     console.log(userName);

//     await page.waitForTimeout(5000);

// })



test("Create User", async({request})=>{
    const url = "https://petstore3.swagger.io/api/v3/user";
    const response = await request.post(url, {
        data: {
            "id": 12,
            "username": "theUser",
            "firstName": "John",
            "lastName": "James",
            "email": "john@email.com",
            "password": "12345",
            "phone": "12345",
            "userStatus": 1 
        },

        headers: {
            "accept": "application/json",
            "Content-Type": "application/json"
        }
    })

    expect(await response.status()).toBe(200);

    
})
