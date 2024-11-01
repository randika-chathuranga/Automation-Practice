import { test, expect } from "@playwright/test"
import { ResponseData } from "../interfaces.ts";

let userId: string;


test.skip('GET endpoint', async({request})=>{
  const response =  await request.get("https://reqres.in/api/users/2");
  //console.log(await response.json());
  expect(await response.status()).toBe(200);

  const text = await response.text();
  console.log(JSON.parse(text));
  const responseObject: ResponseData = JSON.parse(text);
  const name = responseObject?.data.first_name;
  expect(name).toContain("Janet");

})

test('POST endpoint', async({request})=>{
    const response = await request.post("https://reqres.in/api/users", {
        data: {
            "name": "Kamal",
            "job": "Manager"
        },
        headers: {
            "Accept": "application/json"
        }
    });

    const res = await response.json();  //simply we can get the if the post method returns the updated payload as response section.
    const resDuplicate =  JSON.parse(await response.text()) //this is also applicable.
    console.log(res);         
    userId = res.id;
    //console.log(userId);
    //expect(response.status()).toBe(201);
})

test.skip('PUT endpoint', async({request})=>{ 
    let url =  "https://reqres.in/api/users";                     ///request means---> APIrequestcontext
    const response = await request.put(`${url}/${userId}`, {
        data: {
            "name": "Randika",
            "job": "QA engineer"
        },
        headers: {
            "Accept": "application/json"
        }
    });

    console.log(await response.json())
    //expect(response.status()).toBe(200);
})


test.skip('DELETE endpoint', async({request})=>{
    const response = await request.delete("https://reqres.in/api/users/" + userId);
    expect(response.status()).toBe(204);
})


//we can think like some times userId was not available untill user is saved. Then if we add userId within put method it will failed.
//what we can do is in the config.ts ==> give fullyParallel as false.



//-------------------------------------------------------------------------------------------------------------------------------------------------------
/* tests for this link (https://xapihub.io/) */

test.skip("Getting the users", async({request})=>{

    const url = 'https://api.xapihub.io/platform/1.0.0/organization/roles';
    const token = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIzSGJfTUZXcWJvazB0VjF1V3IxaVRHOTJ5aHFnRGc1ZmRmblczMmhUNWZzIn0.eyJleHAiOjE3MjgwNDI5OTQsImlhdCI6MTcyODA0MjM5NCwiYXV0aF90aW1lIjoxNzI4MDQxNzc5LCJqdGkiOiJjMDg3ZGFkOS0yMDJlLTQ1YzUtODI4NC1hNzE4NDFjNDIxNjciLCJpc3MiOiJodHRwczovL2xvZ2luLnhhcGlodWIuaW8vY29tL3h2ZW50dXJlL2F1dGgvcmVhbG1zL1h2ZW50dXJlIiwic3ViIjoiZjo3MTNkMzM2Yi00MjkzLTRlOGEtYjQzMC1kZjkyN2I1M2U2ZjE6cmFuZGlrYV9jIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoieGFwaS1wcm9kIiwic2Vzc2lvbl9zdGF0ZSI6ImY4MDQyY2U3LTIzZjctNGQ0Zi1hYzhiLWI1OWZkNzYzZTdhMCIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiKiJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwic2lkIjoiZjgwNDJjZTctMjNmNy00ZDRmLWFjOGItYjU5ZmQ3NjNlN2EwIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJ1c2VyT3JnYW5pemF0aW9uUHJvZmlsZUlkIjoiNjZmZmQzNjhkZmI5ZTQ3NTRhYTU0MmNhIiwidXNlck9yZ2FuaXphdGlvbkFzc29jaWF0aW9uIjoiT1dORVIiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJyYW5kaWthX2MiLCJwcm9qZWN0SWRzIjpbXSwib3JnYW5pemF0aW9uVHlwZSI6IlBSRU1JVU0iLCJyZWFkT25seU9yZ2FuaXphdGlvbiI6ImZhbHNlIiwib3JnYW5pemF0aW9uIjoiNjZmZmQzNjhkZmI5ZTQ3NTRhYTU0MmM2IiwidXNlclR5cGUiOiJPUkdBTklaQVRJT05fT1dORVIiLCJ1c2VyIjoiNjU1ZjM4NTQwMDU3ZDU1MWUzOWE0YzhmIiwib3JnYW5pemF0aW9uVmlzaWJpbGl0eSI6IlBSSVZBVEUiLCJlbWFpbCI6InJhbmRpa2FjaGF0aHVyYW5nYTIxOUBnbWFpbC5jb20iLCJ1c2VyU2NvcGVzIjoiIn0.SKZleam3Z3YQncQ_ThJjm8ntHs2JQ46xgpAOx90G68ZyrF83kSAtUqa3RiIykj-q6mg3T7ZHXn2-W6eJVAlAjL6jvZQogv0L8Z-tzWIqIhTGw9ufYC5vo2-cg8ph86oXsO_UlJ1qWq1Fb8r6iUHD-UL48GrLNz2_Wl2U6dL6hvm0dFNE1C-lfit7KoYxW8bRlgKdlxGHQu1RS78ImDA72rQVXkw3icMQosyxHTwIRJSML0GFdniI5unH16F85dLKWrnDdemAvXB_m2PoOvIRCy3IFJk0GSg4OzlEuXSlk6fugSupGLXy47O5W1ZtI8q76hawrvMVC0P3jmn3h-xSlQ'

    const response = await request.get(url, {
        headers: {
            'Authorization': `Bearer ${token}`, // Adding the token here
            'Content-Type': 'application/json',
          },
    });

    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    console.log(responseBody.content.map((ele) => ele.name));

    //expect(responseBody).toHaveProperty('nic');
    //expect(responseBody.nic).toBe('200579103385');
    // const requestBody = {

    //         "paysystemName": "Advcash",
    //         "currency": "UAH",
    //         "method": "advcash",
    //         "period": 7,
    //         "delayPeriod": 2 

    //   };
    // const response = await request.post(url, {
    //     data: requestBody,
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // });

})


test.skip("Getting the project details", async({request})=>{

    const orgId: string = '66ffd368dfb9e4754aa542c6'
    const projectId: string = '66ffd79423c3c51c0f8956cf'

    const url = `https://api.xapihub.io/project/1.0.0/organizations/${orgId}/projects/${projectId}`;
    const token = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIzSGJfTUZXcWJvazB0VjF1V3IxaVRHOTJ5aHFnRGc1ZmRmblczMmhUNWZzIn0.eyJleHAiOjE3MjgwNDM1NTIsImlhdCI6MTcyODA0Mjk1MiwiYXV0aF90aW1lIjoxNzI4MDQxNzc5LCJqdGkiOiI0OGJkM2RiNy0xODNjLTQxMzItYTMwMy1mYjE0MzYyODU1MDciLCJpc3MiOiJodHRwczovL2xvZ2luLnhhcGlodWIuaW8vY29tL3h2ZW50dXJlL2F1dGgvcmVhbG1zL1h2ZW50dXJlIiwic3ViIjoiZjo3MTNkMzM2Yi00MjkzLTRlOGEtYjQzMC1kZjkyN2I1M2U2ZjE6cmFuZGlrYV9jIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoieGFwaS1wcm9kIiwic2Vzc2lvbl9zdGF0ZSI6ImY4MDQyY2U3LTIzZjctNGQ0Zi1hYzhiLWI1OWZkNzYzZTdhMCIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiKiJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwic2lkIjoiZjgwNDJjZTctMjNmNy00ZDRmLWFjOGItYjU5ZmQ3NjNlN2EwIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJ1c2VyT3JnYW5pemF0aW9uUHJvZmlsZUlkIjoiNjZmZmQzNjhkZmI5ZTQ3NTRhYTU0MmNhIiwidXNlck9yZ2FuaXphdGlvbkFzc29jaWF0aW9uIjoiT1dORVIiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJyYW5kaWthX2MiLCJwcm9qZWN0SWRzIjpbXSwib3JnYW5pemF0aW9uVHlwZSI6IlBSRU1JVU0iLCJyZWFkT25seU9yZ2FuaXphdGlvbiI6ImZhbHNlIiwib3JnYW5pemF0aW9uIjoiNjZmZmQzNjhkZmI5ZTQ3NTRhYTU0MmM2IiwidXNlclR5cGUiOiJPUkdBTklaQVRJT05fT1dORVIiLCJ1c2VyIjoiNjU1ZjM4NTQwMDU3ZDU1MWUzOWE0YzhmIiwib3JnYW5pemF0aW9uVmlzaWJpbGl0eSI6IlBSSVZBVEUiLCJlbWFpbCI6InJhbmRpa2FjaGF0aHVyYW5nYTIxOUBnbWFpbC5jb20iLCJ1c2VyU2NvcGVzIjoiIn0.V9VBDnt5ztylOnA-aUkeMHXaP8mdzEA0ykOgprkqGNycJu-F-hpIaOKLzYoMeToLbfgQpt7EFKVag7Oc9ph9CWKtnOHtjNBmgyMveSNc5OkJetkFAJhTJzJnpZT2nnU-tB-SsiJoD26knvGtKwvQbF2FVnzYBaRwshxtJjr0xbf3dfgO1ez1C9FVd8rsMAweOqu-TtujlCpxeq-UA2xbfYYjMUeA72wXIHUHlia6Xlp6fCJwN3k2VNLqsVDNKGg4njKw6D0zcUwx6bu4deHlBw8G5gZoLsVWhtkP3QH9hT-736Kl04ywgJmueMEitrztobgeop25jcNGQuUF8KcIVQ'
    const response = await request.get(url, {
        headers: {
            'Authorization': `Bearer ${token}`, // Adding the token here
            'Content-Type': 'application/json',
          },
    });

    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log(responseBody.name);
})




test.skip("Create project", async({request})=>{

    const orgId: string = '66ffd368dfb9e4754aa542c6';
    const token = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIzSGJfTUZXcWJvazB0VjF1V3IxaVRHOTJ5aHFnRGc1ZmRmblczMmhUNWZzIn0.eyJleHAiOjE3MjgwNDQxMTAsImlhdCI6MTcyODA0MzUxMCwiYXV0aF90aW1lIjoxNzI4MDQxNzc5LCJqdGkiOiJiMTBhZGQxNi1iN2U2LTRjY2EtOWE1Mi1kYWVlMWFiMzVjNTkiLCJpc3MiOiJodHRwczovL2xvZ2luLnhhcGlodWIuaW8vY29tL3h2ZW50dXJlL2F1dGgvcmVhbG1zL1h2ZW50dXJlIiwic3ViIjoiZjo3MTNkMzM2Yi00MjkzLTRlOGEtYjQzMC1kZjkyN2I1M2U2ZjE6cmFuZGlrYV9jIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoieGFwaS1wcm9kIiwic2Vzc2lvbl9zdGF0ZSI6ImY4MDQyY2U3LTIzZjctNGQ0Zi1hYzhiLWI1OWZkNzYzZTdhMCIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiKiJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwic2lkIjoiZjgwNDJjZTctMjNmNy00ZDRmLWFjOGItYjU5ZmQ3NjNlN2EwIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJ1c2VyT3JnYW5pemF0aW9uUHJvZmlsZUlkIjoiNjZmZmQzNjhkZmI5ZTQ3NTRhYTU0MmNhIiwidXNlck9yZ2FuaXphdGlvbkFzc29jaWF0aW9uIjoiT1dORVIiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJyYW5kaWthX2MiLCJwcm9qZWN0SWRzIjpbXSwib3JnYW5pemF0aW9uVHlwZSI6IlBSRU1JVU0iLCJyZWFkT25seU9yZ2FuaXphdGlvbiI6ImZhbHNlIiwib3JnYW5pemF0aW9uIjoiNjZmZmQzNjhkZmI5ZTQ3NTRhYTU0MmM2IiwidXNlclR5cGUiOiJPUkdBTklaQVRJT05fT1dORVIiLCJ1c2VyIjoiNjU1ZjM4NTQwMDU3ZDU1MWUzOWE0YzhmIiwib3JnYW5pemF0aW9uVmlzaWJpbGl0eSI6IlBSSVZBVEUiLCJlbWFpbCI6InJhbmRpa2FjaGF0aHVyYW5nYTIxOUBnbWFpbC5jb20iLCJ1c2VyU2NvcGVzIjoiIn0.jALBbm0Pd592tR57D4CVtjOBwGiP6gi3lkcbg3RLWu0xOArrHhZaHE__znCGuBsQSpHwYyPu3kDLtCyoPs57aSs-6aGIlTI9Pz2E5rV9LfOlznZXCIOOCeRUj7tZidSGcqiNsGYaX_E3VuJrfvgLUh_1WGcIlv3IHx9VGjlfNYHRhRtNvVIkx19oWot1nmECoYX7oi05rdpzN7t4MRBOgKrmwH7wueQcWptNpdX02WbpAlob5a9S_PTdT6FYzsWgtNOQ3mSXcsgcLdaeGQ4UemyhmBImVS5__rEFTXmf1UMu2HzwhtuZOFCYwgldZVp-daL0JIyfGPitEwdyLcD_ig'
    const url = "https://api.xapihub.io/project/1.0.0/organizations/66ffd368dfb9e4754aa542c6/projects"
    const response = await request.post(url, {
        data: {
                "name": "project 5",
                "description": "This is a private project that aims to achieve a specific objective or deliver a unique outcome within a defined timeframe and allocated resources.",
                "projectKanbanTemplate": "NONE",
                "avatar": "https://xapi-ui-resources-prod.s3.amazonaws.com/color-svg-icon/avatar20-2.svg",
                "apiCatalog": false,
                "taskAlias": "ty"
              },

        headers: {
                    'Authorization': `Bearer ${token}`, // Adding the token here
                    'Content-Type': 'application/json',
                 }
    })

    expect(response.status()).toBe(201);
    
})


test.skip("Create API", async({request})=>{

    const orgId = '66ffd368dfb9e4754aa542c6';
    const token = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIzSGJfTUZXcWJvazB0VjF1V3IxaVRHOTJ5aHFnRGc1ZmRmblczMmhUNWZzIn0.eyJleHAiOjE3MjgyNzM0NjgsImlhdCI6MTcyODI3Mjg2OCwiYXV0aF90aW1lIjoxNzI4MjcxNzQ3LCJqdGkiOiI1ZmY1NzRmYi1kNzU2LTRmM2MtYjk5Yi04Njg3NmY1ZTk5OGIiLCJpc3MiOiJodHRwczovL2xvZ2luLnhhcGlodWIuaW8vY29tL3h2ZW50dXJlL2F1dGgvcmVhbG1zL1h2ZW50dXJlIiwic3ViIjoiZjo3MTNkMzM2Yi00MjkzLTRlOGEtYjQzMC1kZjkyN2I1M2U2ZjE6cmFuZGlrYV9jIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoieGFwaS1wcm9kIiwic2Vzc2lvbl9zdGF0ZSI6IjE2NjljZjdhLTgyNTctNDhkNy1iMDQ2LTUwMWE2YzFkZjNkNCIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiKiJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwic2lkIjoiMTY2OWNmN2EtODI1Ny00OGQ3LWIwNDYtNTAxYTZjMWRmM2Q0IiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJ1c2VyT3JnYW5pemF0aW9uUHJvZmlsZUlkIjoiNjZmZmQzNjhkZmI5ZTQ3NTRhYTU0MmNhIiwidXNlck9yZ2FuaXphdGlvbkFzc29jaWF0aW9uIjoiT1dORVIiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJyYW5kaWthX2MiLCJwcm9qZWN0SWRzIjpbXSwib3JnYW5pemF0aW9uVHlwZSI6IlBSRU1JVU0iLCJyZWFkT25seU9yZ2FuaXphdGlvbiI6ImZhbHNlIiwib3JnYW5pemF0aW9uIjoiNjZmZmQzNjhkZmI5ZTQ3NTRhYTU0MmM2IiwidXNlclR5cGUiOiJPUkdBTklaQVRJT05fT1dORVIiLCJ1c2VyIjoiNjU1ZjM4NTQwMDU3ZDU1MWUzOWE0YzhmIiwib3JnYW5pemF0aW9uVmlzaWJpbGl0eSI6IlBSSVZBVEUiLCJlbWFpbCI6InJhbmRpa2FjaGF0aHVyYW5nYTIxOUBnbWFpbC5jb20iLCJ1c2VyU2NvcGVzIjoiIn0.etLaFoehGkRrTQVA6us6z3wdLXh8s_9nxcY1glq_Uhz8EOoC646XcjNNchqCHtyE1K_UmfXQUaIiiCsWS21cBtf_pAhiObm4r8pTU0fOtgWzKnk3rX09mnUUsInDXRv2ptx-uAWZc4gqibRbWBiCl2-7SDvMRwn9QLwCBViOHTql0oM1aHGXcTFdKFxnzvBWMvIK0lfzg0MEtQPMkrOJxXnoHpjFvZVBkfSx-uN1F9ahr9CDFpfhjUZoA_RP_LtpKl_AHHZBptdMlkjfDv5W8fREYFSUlPmCesxi0kOwuihIbk8RVsUN44e4vZUfqKFPeG_FEITqWh_VTKWEkgtVPA'
    const url = "https://api.xapihub.io/api-design/1.0.0/organizations/66ffd368dfb9e4754aa542c6/catalogues/66ffd3990c8c3543285fe0d6/collections/66ffd3990c8c3543285fe0d7/apis"
    const response = await request.post(url, {
        data: {
                    "name": "API1",
                    "relatedProject": "66ffd39923c3c51c0f8956cd",
                    "openApiVersion": "V3_1",
                    "version": "9.8",
                    "format": "JSON",
                    "protocol": "REST",
                    "isImported": false,
                    "description": "This is a private API located in the project 1 Catalog .",
                    "avatar": "https://xapi-ui-resources-prod.s3.amazonaws.com/color-svg-icon/avatar20-2.svg",
                    "apiTags": [
                        "Mass Media"
                    ],
                    "templateIdentifier": "coffee shop"
              },

        headers: {
                    'Authorization': `Bearer ${token}`, // Adding the token here
                    'Content-Type': 'application/json',
                 }
    })

    expect(response.status()).toBe(201);
    
})


test.skip("Delete API", async({request})=>{
    const token = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIzSGJfTUZXcWJvazB0VjF1V3IxaVRHOTJ5aHFnRGc1ZmRmblczMmhUNWZzIn0.eyJleHAiOjE3MjgyNzkzODIsImlhdCI6MTcyODI3ODc4MiwiYXV0aF90aW1lIjoxNzI4MjcxNzQ3LCJqdGkiOiI5MTgyOGJmNy0yNjRiLTQxMzMtODlkZC00YWYxYzMzMGU2MDYiLCJpc3MiOiJodHRwczovL2xvZ2luLnhhcGlodWIuaW8vY29tL3h2ZW50dXJlL2F1dGgvcmVhbG1zL1h2ZW50dXJlIiwic3ViIjoiZjo3MTNkMzM2Yi00MjkzLTRlOGEtYjQzMC1kZjkyN2I1M2U2ZjE6cmFuZGlrYV9jIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoieGFwaS1wcm9kIiwic2Vzc2lvbl9zdGF0ZSI6IjE2NjljZjdhLTgyNTctNDhkNy1iMDQ2LTUwMWE2YzFkZjNkNCIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiKiJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwic2lkIjoiMTY2OWNmN2EtODI1Ny00OGQ3LWIwNDYtNTAxYTZjMWRmM2Q0IiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJ1c2VyT3JnYW5pemF0aW9uUHJvZmlsZUlkIjoiNjZmZmQzNjhkZmI5ZTQ3NTRhYTU0MmNhIiwidXNlck9yZ2FuaXphdGlvbkFzc29jaWF0aW9uIjoiT1dORVIiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJyYW5kaWthX2MiLCJwcm9qZWN0SWRzIjpbXSwib3JnYW5pemF0aW9uVHlwZSI6IlBSRU1JVU0iLCJyZWFkT25seU9yZ2FuaXphdGlvbiI6ImZhbHNlIiwib3JnYW5pemF0aW9uIjoiNjZmZmQzNjhkZmI5ZTQ3NTRhYTU0MmM2IiwidXNlclR5cGUiOiJPUkdBTklaQVRJT05fT1dORVIiLCJ1c2VyIjoiNjU1ZjM4NTQwMDU3ZDU1MWUzOWE0YzhmIiwib3JnYW5pemF0aW9uVmlzaWJpbGl0eSI6IlBSSVZBVEUiLCJlbWFpbCI6InJhbmRpa2FjaGF0aHVyYW5nYTIxOUBnbWFpbC5jb20iLCJ1c2VyU2NvcGVzIjoiIn0.jNg-Ir7yU1qcoOMHkuB3bFxdqhoF4wSZfNqHjdAQl6bM-0UWjoxv2M6MxadhfQl_mGas1gJvTcyZZxEqg5OUNVkMS0NCmUlwtFpNtMi43I4zxIdSEEBuChcpGW3cbBDLstkPAlYoomEqdu3X9UfuuJ94F2caK84owREJG2JYEArpqQ2NlLkpyegt0P4snpT2qB1TCK5fmjFVq2ejA29QOGawpySdVy9fxrFqTyYlRt9qxs8_TTckzjuFMYVixfXkds3G1SBpC7bOCs12hLqdTAj4bl5T_WBMCOXaVj6q8E4TergsJ9rzOouXbC0Vs_DAyb5I6KOSQl-V4rwXO2-RGw'
    const url = 'https://api.xapihub.io/api-design/1.0.0/organizations/66ffd368dfb9e4754aa542c6/projects/66ffd39923c3c51c0f8956cd/catalogues/66ffd3990c8c3543285fe0d6/collections/66ffd3990c8c3543285fe0d7/apis/670357129101ae7d861b6ab5/versions/67035a129101ae7d861b6ab7'
    const response = await request.delete(url, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    expect(response.status()).toBe(204);
})

// test("update API", async({request})=>{
//     const url = 
//     const response = await request.post(url, {
//         body: {

//         }
//     })
// })



